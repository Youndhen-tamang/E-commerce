import React from 'react'
import Item from '../Item/Item'
import'../CSS/Men.css'
import { ShopContext } from '../../Context/ShopContext';

import { useContext } from 'react';
const Men = () => {
  const {allproduct} = useContext(ShopContext);
  return (
    <div className='men'>
      <div className='men-wears'>
        {allproduct.map((item,i)=>{
          if(item.category==='men'){
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
          }
          else{
            return null;
          }
        }
        
        )}
      </div>
    </div>
  )
}

export default Men
