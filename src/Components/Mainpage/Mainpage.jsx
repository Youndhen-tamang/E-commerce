import React from 'react'
import './Mainpage.css'
import ribbon_icon from '../Assets/ribbon.png'
import hero_banner from '../Assets/shop-banner-main.png'
import arrow_icon from '../Assets/arrow.png'
const Mainpage = () => {
  return (
    <div className='mainpage'>
      <div className='hero-left'>
      <h1>New collections </h1>
      <div>
        <div className='text'>
        <p>SLAY EVERYDAY</p>
        <p1>WITH US</p1>
        </div>
      <img src={ribbon_icon} alt="" />
      </div>
      <button>Latest Collections <img src={arrow_icon} alt="" /> </button>
      </div>
      <div className="hero-right">
        <img src={hero_banner} alt="" />
      </div>
    </div>
  )
}

export default Mainpage
