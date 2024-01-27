import React from 'react'
import {NavLink} from 'react-router-dom'
import '../../css/Nav/Nav.css'

function Nav() {
  return (
    <ul className='nav'>
      <li className='nav-item'><NavLink to='/' className='nav-link'>Home</NavLink></li>
      <li className='nav-item'><NavLink to='/orders' className='nav-link'>orders</NavLink></li>
    </ul>
  )
}

export default Nav
