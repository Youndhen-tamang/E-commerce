import React, { useContext } from 'react'
import { ShopContext } from '../../Context/ShopContext';
import {useParams} from 'react-router-dom'
import Breadcrum from '../Breadcrums/Breadcrum';
import ProductDisplay from '../ProductDisplay/ProductDisplay';
const Product = () => {
  const {allproduct} =useContext(ShopContext);
 const {productId} = useParams();
 const product = allproduct.find((e)=> e.id === Number(productId))
  return (
    <div>
      <Breadcrum product = {product}/>
      <ProductDisplay product = {product}/>
    </div>
  )
}

export default Product
