import React, {useState} from 'react';
import './NavBar.css'
import logo from '../assets/logo.svg' 
import { MdMenu } from "react-icons/md";
import { MdClose } from "react-icons/md";



export default function NavBar (){
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)
    
    return(

        <>
          <nav>

            <a href=''> <img src={logo} className="NavBar-logo" alt="logo" /> </a>
            <div className="NavList-Container" >
                <ul id="NavList" className={
                    click? "#NavList active":
               "NavList" }>
                    <li><a href="Tasks">Add Tasks</a></li>
                    <li><a href="DisplayAllTasks">Display All Tasks</a></li>
                </ul>
            </div>
            <div id="Mobile-Screen" onClick={handleClick}>
                <i>
                {click? <MdClose size={35}/>: <MdMenu size={35}/>}  
                </i>
            
               
                
            </div>
           
          </nav>
        </>


    )
}

