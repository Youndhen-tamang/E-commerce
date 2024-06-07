import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom'

const Item = (props) => {
  return (
    <div className='item'>
      <Link to={`/product/${props.id}`}><img src={props.image} alt="" /></Link>
      <div className="title">
      <p>{props.name}</p>
      </div>

      <div className="prices">
        <div className="oldprice">
       Rs {props.old_price}
        </div>
        <div className="newprice">
       Rs {props.new_price}
        </div>
      </div>
    </div>
  )
}

export default Item
