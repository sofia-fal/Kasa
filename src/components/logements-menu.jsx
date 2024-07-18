import React from 'react'
import '../style/logements-menu.css'
import Card from './card'
import logementdata from '../data/logements.json'

function LogementsMenu() {
  return (
    <div className='logements-menu'>
      <div className='grid-container'>
        {logementdata.map((logement) => (
          <Card
          key={logement.id}
          id={logement.id}
          title={logement.title}
          cover={logement.cover}
          />
        ))}
      </div>
    </div>
  )
}

export default LogementsMenu