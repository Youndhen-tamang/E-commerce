import React from 'react'
import { ShopContext } from '../../Context/ShopContext';
import "../CSS/Women.css"
import { useContext } from 'react';
import Item from '../Item/Item'
const Women = () => {
    const {allproduct} = useContext(ShopContext);
  return (
    <div className='women'>
      <div className='women-wears'>
        {allproduct.map((item,i)=>{
          if(item.category==='women'){
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

export default Women
