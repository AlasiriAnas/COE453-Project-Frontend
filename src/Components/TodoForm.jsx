import React, { useEffect, useState } from "react";
import './TodoForm.css'
// import TaskForm from "./TaskForm";
// import TodoList from "./TodoList";

export default function TodoForm() {


    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState("")
    // const [isEditing, setIsEditing] = useState(false);


    const apigateway = 'http://localhost:8000';
    // const [data, setData] = useState([]);
    // const [update, setUpdate] = useState(true);

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //     // Update the count every second
        
    //     setUpdate(!update);
    //     }, 1000);
        
    //     // Cleanup the interval on component unmount
    //     return () => clearInterval(interval);
    //     }, []);

    useEffect(() => {
        getTodos();
    }, [])

    


    const getTodos = async() => {
       await fetch(apigateway + "/MC2/DisplayTasks")
            .then(res => res.json())
            .then(data => setTodos(data))
            .catch(err => console.log('Error: ', err))

    }

   




    async function addNewTodo() {

        const data = await fetch(apigateway + '/MC1/Tasks'
            , {
                method: 'POST'
                , headers: {
                    "Content-Type": "application/json" 
                },body: JSON.stringify({
                    text: newTodo
                })
            }).then(res => res.json());
		     setTodos([...todos, data])
             setNewTodo("")
        
    }


    
    async function toggleTodo(id) {

        const data = await fetch(apigateway + '/MC1/Tasks/complete/' + id, { method: 'PUT' }).then(res => res.json());

        setTodos(todos => todos.map(todo => {
            if (todo._id === data._id) {
                todo.complete = data.complete
            }
            return todo;
        }))

    }

//    async function deleteTodo(id) {
//         const data = await fetch(apigateway +'/MC1/Tasks/' + id, {method:'DELETE'}).then(res => res.json());
//         setTodos(currentTodos => {return currentTodos.filter(todo => todo._id !== id)});
//         console.log(data._id);
//     }


async function deleteTodo(id) {
   
    await fetch(apigateway + '/MC1/Tasks/' + id, { method: 'DELETE',  headers: {
        'Access-Control-Allow-Origin': '*'
    } },);
    
    setTodos(todos => todos.filter(todo => todo._id !== id));
    }

    // function editTodo(id) {
    //     setTodos(currentTodos => {
    //         return currentTodos.map(todo => todo.id === id ? {
    //             ...todo, isEditing: !todo.isEditing
    //         } : todo)
    //     })

    // }

    function editTodoList({ title, id }) {
        setTodos(currentTodos.map(todo => todo.id === id ? { ...todo, title, isEditing: !todo.isEditing } : todo))
    }

    return (

        <div id="FormWraper">
            <div className="label">
                <h3>TO-DO LIST</h3>
            </div>
            <div id="ListWraper">
                
                     <div id="FormContainer">
                        <form action="/" onSubmit={() => addNewTodo()}>
                        <input type="text" onChange={e => setNewTodo(e.target.value)}  placeholder="Enter your task"/>
                        <button id="Add-button" type="submit" >Add</button>
                        </form>
                    </div>
               
                <div id="Todo-List">
                    <ul id="List">
                        {/* Add this to Display all tasks */}
                        {todos.length === 0 && "There is no todo"}
                        {todos.map(todo => (
                            
                          
                             <div className={
                                "todo-items" + (todo.complete ? " is-complete" : "")} key={todo._id} onClick={()=> toggleTodo(todo._id)}>
                             <div className="todo-item">
                                {/* <div className="checkbox"></div>   */}
                                <div className="todo-item-list">
                                <div className="text">{todo.text}</div>
                                   
                                </div>  
                                
                              
                              <form action="/" onSubmit={(e) =>  deleteTodo(todo._id)}>
                              <button  id="delete-btn"  type="submit" >Delete</button></form>
                               
                            </div>
                           
                        </div>
                        
                        
                        ))}

                    </ul>
                   

                </div>

            </div>
        </div>

    )


}
