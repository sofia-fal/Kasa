import React from 'react'
import bannerImage from '../assets/banner-home.png'
import '../style/banner.css'

function Banner() {
    return (
        <div className='banner'>
            <img src={bannerImage} alt="Bannière" className='banner-image' />
            <div className='banner-text'>Chez vous, <span>partout et ailleurs</span></div>
        </div>
    )
}

export default Banner