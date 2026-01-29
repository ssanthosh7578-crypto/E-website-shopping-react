import React from 'react'
import './Item.css'

const Item = (props) => {
  return (
    <div className='item_box'>
        
        <img src={props.image} alt='itemimg'/>
        <h4>{props.name}</h4>
        
    <div className='item_cost'>
        <div className='new_cost'>${props.new_price}</div>
        <div className='old_cost'>${props.old_price}</div>
    </div>
    </div>
  )
}

export default Item