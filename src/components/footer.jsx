import React from 'react'
import '../style/footer.css'
import logo from '../assets/LOGO-footer.svg'

function footer() {
  return (
    <footer>
      <img src={logo} alt="Logo" />
      <div className='content'>
        <p>&copy; 2020 Kasa. All <span>rights reserved</span></p>
      </div>
    </footer>
  )
}

export default footer