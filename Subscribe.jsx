import React from 'react'
import './Subscribe.css'
const Subscribe = () => {
  return (
    <div className='subscribe'>
        <h1>Get Exclusive Offers On Your Email</h1>
        <p>Subscribe to our newletter and stay updated</p>
        <div className='input_box'> 
            <input type='text' placeholder='Enter Your Email'/>
            <button>Subscribe</button>
        </div>
    </div>
  )
}

export default Subscribe