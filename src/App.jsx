import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Shop from './Components/Pages/Shop'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Women from './Components/Pages/Women'
import Men from './Components/Pages/Men'
import Login from './Components/Pages/Login'
import Cart from './Components/Pages/Cart'
import Footer from './Components/Footer/Footer';
import Product from './Components/Pages/Product';
import ProductDisplay from './Components/ProductDisplay/ProductDisplay';
import PaymentPage from './Components/PaymentPage/PaymentPage';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
    
      <BrowserRouter>
      <Navbar/>
    <Routes>
      <Route path='/' element={<Shop/>}/>
      <Route path='women' element={<Women/>}/>
      <Route path='men' element={<Men/>}/>
      <Route path='login' element={<Login/>}/>
      <Route path='cart' element={<Cart/>}/>
      <Route path='product' element={<Product/>}>
        <Route path=':productId' element={<ProductDisplay/>}/>
      </Route>
      <Route path='payment' element={<PaymentPage/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
   
    </div>
    </>
  )
}

export default App
