import React from 'react'
import { NavLink } from 'react-router-dom'
import '../styling/navBar.css'
function NavBar() {
  return (
    <div>
        <nav className='nav'>
            <div className="title">
              <h1>PassCode Generator</h1>
            </div>
            <NavLink to='/' className='link'>Generate PassCode</NavLink>
            <NavLink to='/saved' className='link'>Saved PassCode</NavLink>
        </nav>
    </div>
  )
}

export default NavBar