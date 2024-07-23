import React from 'react'
import '../style/logement-details.css'

function Details({ logement }) {
    const { title, description, host, rating, location, equipments, tags } = logement;

  return (
    <div>
        <div className='detail-header'>
            <h2>{title}</h2>
            <p className='location'>{location}</p>
            <ul className='tags'>
                {tags.map((tag, index) => (
                    <li key={index} className='tag'>{tag}</li>
                ))}
            </ul>
        </div>
        
        <p>Description: {description}</p>
        <p>Host: {host.name}</p>
        <p>Rating: {rating}</p>
        <p>Location: {location}</p>
        <p>Equipments:</p>
        <ul>
            {equipments.map((equipment, index) => (
                <li key={index}>{equipment}</li>
            ))}
        </ul>
    </div>
  )
}

export default Details