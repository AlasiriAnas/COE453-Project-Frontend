import "./TodoForm.css"
import TodoList from "./TodoList"
export function DisplayTasks({title}){

    return(

        <div id="display-todos">
        <li> 
        <label >{title}</label>
         </li>
        </div>

    )


}