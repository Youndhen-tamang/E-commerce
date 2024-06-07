import React, { useContext, useState } from 'react'
import { RxCross2 } from "react-icons/rx";
import'./ProductDisplay.css'
import profile_example from '../Assets/korean.jpeg'
import { ShopContext } from '../../Context/ShopContext';
import { Link } from 'react-router-dom';
const ProductDisplay = (props) => {
  const {product} = props;
  const{addToCart} =useContext(ShopContext);
  const [quantity,setquantity] = useState(0);
  const handleQuantity = (event)=>{
    console.log(event.target.value);
    }
  const addProduct =()=>{
    setquantity(quantity + 1);
  }
  const lessProduct = ()=>{
    setquantity(quantity-1);
  }
  const crossButton = ()=>{
    setquantity(0);
  }
  return (
    <div className='productdisplay'>
      <div className="upper-display">

      <div className="display-left">
        <div className="main-image">
          <img src={product.image} alt="" />
        </div>
        <div className="side-images">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
      </div>
      <div className="display-right">
        <div className='title'>
        <h1>{product.name}</h1>
      <div className="prices">
        <p >Rs<span className='old'> {product.old_price}</span></p>
        <p>Rs {product.new_price}</p>
      </div>
        </div>
        <div className="addLessButton">
          <button onClick={lessProduct}>-</button>
          <input type="text" value={quantity} onChange={handleQuantity} className='quantity'/>
          <button onClick={addProduct}>+</button>
        <button onClick={crossButton}><RxCross2 className='cross'/></button>
        </div>
        <div className="cart-buy">
          <button className='btn btn-dark' onClick={()=>{addToCart(product.id)}}>Add to Cart</button>
         <Link to='/payment'><button className='btn btn-dark' >Buy Now</button></Link> 
        </div>
        <div className="ratings">Ratings</div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit voluptas rem rerum minus placeat vel beatae, laborum sunt dolor non inventore totam itaque dolores labore, quasi consequuntur consequatur cupiditate blanditiis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum adipisci dicta accusamus sunt illo repellat. Dolor placeat fugiat vero ut officia quis aspernatur ad, molestiae non perspiciatis numquam, natus incidunt!</p>
      </div>
    
      </div>
      <div className="lower-display">
      <div className="lower-container">
        <h3>Customer Reviews</h3>
        <div className="review-lists">
          <div className="profile">
            <img src={profile_example} alt="" />
            <div className="name-ratings">
              <p>ratings</p>
              <p>Name</p>
            </div>
            </div>
            <div className="review">
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. A at, laboriosam odit nihil voluptatibus maxime praesentium quam, voluptatem consequatur magnam minima nostrum beatae quo, eos amet fugit nisi eligendi harum?</p>
            </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default ProductDisplay
