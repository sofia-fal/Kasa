import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../style/card.css'

function Card({ id, title, cover }) {
  const navigate = useNavigate()

  const cardClick = () => {
    navigate(`/Kasa/logement/${id}`)
  }

  return (
    <div className='card' data-id={id} onClick={cardClick}>
      <div className='card-cover'>
        <img src={cover} alt={title} className='card-img' />
        <div className='card-title'>{title}</div>
      </div>
    </div>
  )
}

export default Card