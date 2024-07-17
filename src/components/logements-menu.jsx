import React from 'react'
import '../style/logements-menu.css'
import Card from './card'

function LogementsMenu() {
  return (
    <div className='logements-menu'>
        <h2>Featured Listings</h2>
        <div className='grid-container'>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
    </div>
  )
}

export default LogementsMenu