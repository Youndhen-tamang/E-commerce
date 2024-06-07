import React, { useContext } from 'react'
import './CartItems.css'
import { ShopContext } from '../../Context/ShopContext'
import { RxCross2 } from "react-icons/rx";

const CartItems = () => {
  const {allproduct,cartItems,removeFromCart}  = useContext(ShopContext);
  return (
    <div className='cartitems'>
      <div className='container'>
      <div className="cartitems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr className='special' />
     {allproduct.map((e)=>{
      if(cartItems[e.id] > 0){
        return <div>
        <div className="cartitems-format">
          <img src={e.image} className='carticon-product-icon'/>
          <p>{e.name}</p>
          <p>${e.new_price}</p>
          <button className='cartitems-quantity'>
            {cartItems[e.id]}
          </button>
          <p>{e.new_price * cartItems[e.id]}</p>
          <button  onClick={()=>{
            removeFromCart(e.id)}}><RxCross2/></button>
         
          

        </div>
        <hr />
        
      </div>
      }
     })}
      </div>
      
    </div>
  )
}

export default CartItems
