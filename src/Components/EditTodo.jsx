import React, { useState } from "react";
import './TodoForm.css'



export function EditTodo({editTodo,title}){
    
    const [newTask, setNewTask] = useState(title);

    function handleSubmit(event) {
        event.preventDefault()
        if (newTask === "") return
        editTodo(newTask,title.id)

        setNewTask("")
    }
     return(
    <form editTodo={handleSubmit} id="Todo-form" >
    <div id="FormContainer">   
    <input  value={newTask} onChange={e => setNewTask(e.target.value)} type="text" placeholder="Update your task"/>
    <button type="submit" id="Add-button">Update</button>
  
    </div>
    </form>
     )

}