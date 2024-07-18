import React from 'react'
import '../style/card.css'

function Card({ id, title, cover }) {
  return (
    <div className='card' date-id={id}>
      <div className='card-cover'>
        <img src={cover} alt={title} />
        <div className='card-title'>{title}</div>
      </div>
    </div>
  )
}

export default Card