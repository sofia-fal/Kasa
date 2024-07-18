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
            <NavLink exact to="/" activeClassName="active">Accueil</NavLink>
          </li>
          <li>
            <NavLink to="/a-propos" activeClassName="active">A Propos</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header