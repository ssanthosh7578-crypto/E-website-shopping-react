import React from 'react'
import './Hero.css'
import hero_image from '../assets/Assets/hero_image.png'
import hand_icon from '../assets/Assets/hand_icon.png'
import arrow from '../assets/Assets/arrow.png'
const Hero = () => {
  return (
    <div className='herobox'>
        <div className='right_side'>
            <h4>NEW ARRIVALS ONLY</h4>
            
            <div className='hero_img'>
              <p>new</p>
              <img src={hand_icon} alt='heroimg'/>
            </div> 
            <div className='p_tag'>
            <p>Collections</p>
            <p>for Everyone</p>
            </div>
              <div className='btn_hero'>
            <button>Latest collection<img src={arrow} alt='noarr'/></button>
        </div>
        </div>
      
        <div className='left_side'>
            <img src={hero_image} alt='right_img'/>
        </div>

    </div>
  )
}

export default Hero