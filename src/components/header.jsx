import React from 'react'
import { NavLink } from 'react-router-dom'
import '../style/header.css'
import logo from '../assets/LOGO.svg'

function Header() {
  return (
    <header>
      <img src={logo} alt="Logo" className='logo' />
      <nav>
        <ul>
          <li>
            <NavLink to="/Kasa" end className={({ isActive }) => isActive ? 'active' : ''}>Accueil</NavLink>
          </li>
          <li>
            <NavLink to="/Kasa/a-propos" className={({ isActive }) => isActive ? 'active' : ''}>A Propos</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header