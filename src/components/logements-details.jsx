import React from 'react'
import '../style/logement-details.css'
import Rating from './rating'
import Collapse from './collapse'

function Details({ logement }) {
    const { title, description, host, rating, location, equipments, tags } = logement

    return (
        <div className='wrapper'>
            <div className='details'>
                <div className='basic-info'>
                    <h2>{title}</h2>
                    <p className='location'>{location}</p>
                    <ul className='tags'>
                        {tags.map((tag, index) => (
                            <li key={index} className='tag'>{tag}</li>
                        ))}
                    </ul>
                </div>
                <div className='host-section'>
                    <div className='host'>
                    <p>{host.name}</p>
                    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <clipPath id="clip-circle">
                                <circle cx="32" cy="32" r="32" />
                            </clipPath>
                        </defs>
                        <circle cx="32" cy="32" r="32" fill="#C4C4C4" />
                        <image href={host.picture} x="0" y="0" height="64" width="64" clipPath="url(#clip-circle)" />
                    </svg>
                    </div>
                    <div className='rating'>
                        <Rating rating={rating} />
                    </div>
                </div>
            </div>
            <div className='desc-equip'>
                <Collapse title="Description" content={description} />
                <Collapse title="Equipments" content={
                    <ul>
                        {equipments.map((equipment, index) => (
                            <li key={index}>{equipment}</li>
                        ))}
                    </ul>
                } />
            </div>
        </div>
    )
}

export default Details