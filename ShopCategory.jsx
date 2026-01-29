import React,{useContext} from 'react'
import './Css/ShopCategory.css'

import dropdown_icon from '../assets/Assets/dropdown_icon.png'
import { ShopContext } from '../Context/Shopcontext'
import Item from '../Item/Item'
export const ShopCategory = (props) => {
  const {all_product}=useContext(ShopContext);
  return (
    <div className='shop-category'>
      
      <img className='banner' src={props.banner} alt=''/>
      <div className='shop-meta'>
        <div className='shop-meta-left'>
          <span className='showing'>Showing 1-12 of 36 Products</span>
        </div>
        <div className='shop-meta-right'>
          <div className="shop_sort">
            sort by <img src={ dropdown_icon } alt=''/>
          </div>
        </div>
      </div>
       <div className='shop_product'>
      {
        all_product.map((product)=>{
          if (props.category===product.category){
            return <Item key={product.id} name={product.name} image={product.image} new_price={product.new_price} old_price={product.old_price}/> 
          }
          else{
            return null;
          }
        })
      }
    </div>
    </div>
   
  )
}
