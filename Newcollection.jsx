import React from 'react'
import './Newcollection.css'
import new_collections from '../assets/Assets/new_collections.js'
import Item from '../Item/Item'
const Newcollection = () => {
  return (
    <div className='container_coll'>
        
            <h1>NEW COLLECTIONS</h1>
            <hr/>
        <div className='collect_items'>
            {
            new_collections.map((product)=>{
                return <Item key={product.id} name={product.name} image={product.image} new_price={product.new_price} old_price={product.old_price}/>
            })}
        </div>

    </div>
  )
}

export default Newcollection