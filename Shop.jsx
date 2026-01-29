import React from 'react'
import Hero from '../Hero/Hero'
import Popular from '../Popular/Popular'
import Offer from '../Offer/Offer'
import Newcollection from '../Newcollection/Newcollection'
import Subscribe from '../Subscribe/Subscribe'
export const Shop = () => {
  return (
    <div className="page-wrapper">
      <div className="page-content">
        <Hero/>
        <Popular/>
        <Offer/>
        <Newcollection/>
      </div>
      <div className="page-footer">
        <Subscribe/>
      </div>
    </div>
  )
}
