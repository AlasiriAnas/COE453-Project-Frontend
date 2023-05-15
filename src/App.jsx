import { useEffect, useState } from 'react'
import NavBar from './Components/NavBar'
import TodoForm from './Components/TodoForm'
import  './styles.css'


export default function App(){


    return(

        <div className='App'>
        
         <NavBar/>
         <div id='TO-DO'>
         <TodoForm/>
         </div>
      
         </div>
      


    )


}
