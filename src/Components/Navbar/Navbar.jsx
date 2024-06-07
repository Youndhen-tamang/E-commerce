import React, { useState } from 'react'
import './Navbar.css'
import cart_icon from'../Assets/cart.png';
import selira_logo from '../Assets/selira_logo.jpeg'
import { Link } from 'react-router-dom';
const Navbar = () => {
  const [line,setline] = useState('home');
  return (
    <div className='navbar'>
      <div className="navbar-logo">
        <img src='moon.png' alt="" />
        <h1>GUU</h1>
      </div>
      <div className="navbar-menu">
        <ul>
    
         <li onClick={()=>{
            setline('home');}}><Link style={{textDecoration:'none'}} to='/'>Shop</Link>{line === 'home'?<hr/>:<></>}</li>
          <li onClick={()=>{
            setline('category');
           }}><Link style={{textDecoration:'none'}} to='/men'>Men</Link>{line === 'category'?<hr/>:<></>}</li>
          <li onClick={()=>{
            setline('about');
          }} ><Link style={{textDecoration:'none'}} to='/women'>Women</Link>{line === 'about'?<hr/>:<></>}</li>
        </ul>
      </div>
    <div className="navbar-cart">
      <Link to='/login'><button>Login</button></Link>
      <Link to='/cart'><img src={cart_icon} alt="" /></Link>
      <p>0</p>
    </div>
    </div>
  )
}

export default Navbar
