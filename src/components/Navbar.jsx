import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FaAlignJustify } from "react-icons/fa6";
import Dark from "../../images/Dark.png"
const Navbar = () => {
  const [open,setOpen]=useState(false)
  return (
    <>
      <nav >
        <Link className='title' to='/'><img src={Dark} alt="" /></Link>
        <div className='menu' onClick={()=>{
          setOpen(!open)
        }}>
          <FaAlignJustify className='menu_bar'/>
        </div>
        <ul className={open ? "open":""}>
          <li><NavLink  to='/'>Home</NavLink></li>
          <li><NavLink to='/about'>About</NavLink></li>
          <li><NavLink to='/contact'>Contact</NavLink></li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar