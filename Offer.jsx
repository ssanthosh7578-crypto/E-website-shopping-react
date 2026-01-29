import React from 'react'
import './Offer.css'
import exclusive_image from '../assets/Assets/exclusive_image.png'
const Offer = () => {
  return (
    <div className='container'>
        <div className='offers_left'>
            <h1>Exclusive</h1>
            <h1>Offers For You</h1>
            <h4>ONLY ON BEST SELLERS PRODUCTS</h4>
            <button className='btn'>Check Now</button>
        </div>
        <div className='offers_right'>
            <img src={exclusive_image} alt='offalt'/>
        </div>
    </div>
  )
}

export default Offer