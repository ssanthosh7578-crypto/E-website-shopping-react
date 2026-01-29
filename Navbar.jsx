import React, { useState } from 'react'
import './Navbar.css'
import logo from '../assets/Assets/logo.png'
import cart_icon from '../assets/Assets/cart_icon.png'
import { Link } from 'react-router-dom'
const Navbar = () => {
    const [menu,setMenu]=useState("Shop");
  return (
    <div className='navbar'>
       <div className='navbar-left'> 
        <img src={logo} alt='logo'/>
        <p>SHOPPER</p>
       </div>
       <ul className='navbar-menu'>
         <li onClick={()=>setMenu('Shop')}><Link to='/' style={{textDecoration:'none'}}>Shop</Link>{menu==="Shop"?<hr/>:<></>}</li>
         <li onClick={()=>setMenu('Men')}><Link to='/mens'style={{textDecoration:'none'}}>Men</Link>{menu==="Men"?<hr/>:<></>}</li>
         <li onClick={()=>setMenu('Women')}><Link to='/womens'style={{textDecoration:'none'}}>Women</Link>{menu==="Women"?<hr/>:<></>}</li>
         <li onClick={()=>setMenu('Kids')}><Link to='/kids'style={{textDecoration:'none'}}>Kids</Link>{menu==="Kids"?<hr/>:<></>}</li>
       </ul>
       <div className='navbar_right'>
        <Link to='/login'><button>Login</button></Link>
        <Link to='/cart'><img src={cart_icon} alt='cart'/></Link>
        <div className='cart_count'>0</div>
       </div>
       
    </div>
  
  )
}

export default Navbar