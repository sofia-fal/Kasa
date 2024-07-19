import React from 'react'
import bannerImage from '../assets/banner-home.png'
import bannerImage2 from '../assets/banner-about.png'
import '../style/banner.css'

export const Banner = () => {
    return (
        <div className='banner'>
            <img src={bannerImage} alt="Bannière" className='banner-image' />
            <div className='banner-text'>Chez vous, <span>partout et ailleurs</span></div>
        </div>
    )
}

export const BannerAbout = () => {
    return (
        <div className='banner'>
            <img src={bannerImage2} alt="Bannière" className='banner-image' />
        </div>
    )
}