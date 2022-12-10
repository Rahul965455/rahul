import React from 'react'

import { NavLink } from 'react-router-dom'
import "./header.css"
const Header = () => {
 
  return (
    <div className='header'>
        <p className='logo'> Contact App</p>
        <div className='header-right'>
            <NavLink to="/">
        <p>Home</p>
            </NavLink>
            <NavLink to="/add">
    <p>Add Contact</p>
            </NavLink>
            <NavLink to="about">
     <p>About</p>
            </NavLink>
        
        </div>
    </div>
  )
}

export default Header