import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Navbar/Navbar'
import { Routes,Route } from 'react-router-dom';
import { Shop } from './Pages/Shop'
import { Cart } from './Pages/Cart'
import { ShopCategory } from './Pages/ShopCategory'
import { Product } from './Pages/Product'
import LoginSignup from './Pages/LoginSignup'
import women_banner from './assets/Assets/banner_women.png'
import men_banner from './assets/Assets/banner_mens.png'
import kid_banner from './assets/Assets/banner_kids.png'
function App() {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/mens' element={<ShopCategory banner={ men_banner} category="men"/>}/>
        <Route path='/womens' element={<ShopCategory banner={ women_banner} category="women"/>}/>
        <Route path='/kids' element={<ShopCategory banner={kid_banner} category="kid"/>}/>
        <Route path='/product' element={<Product/>}>
           <Route path=':productId' element={<Product/>}/>
        </Route>
        <Route path='/login' element={<LoginSignup/>}/>
      </Routes>
      
    </>
  )
}

export default App
