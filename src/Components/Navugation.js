import React from 'react'
import {FaHome,FaClipboardList,FaPhoneAlt} from "react-icons/fa"
import { Link } from 'react-router-dom'
const Navugation = ({click,setClick}) => {
  const handleClick=()=>{
    setClick(!click)
    localStorage.setItem("click",click)
  }
  return (
    <div className='nav'>
    <Link to="/" style={{textDecoration:"none"}}><nav><FaHome/>Home</nav></Link> 
    <Link to="/about" style={{textDecoration:"none"}}><nav><FaClipboardList/>About</nav></Link> 
    <Link to="/contact" style={{textDecoration:"none"}}><nav><FaPhoneAlt/>Contact</nav></Link>
    <button onClick={handleClick} className='btn-home'>Click</button>
    </div>
  )
}

export default Navugation