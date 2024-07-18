import React from 'react'
import '../style/header.css'
import logo from '../assets/LOGO.svg'

function header() {
  return (
    <header>
      <img src={logo} alt="Logo" className='logo' />
      <nav>
        <ul>
          <li><a href="/">Accueil</a></li>
          <li><a href="/a-propos">A Propos</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default header