import { useState } from "react";
import Products from "./page/Products";
import "./scss/style.css"
import Cart from "./page/Cart";
import { Route, Router, Routes } from "react-router-dom";
import Header from "./component/Header";
import Product from "./component/Product";
function App() {
  let [cart,setCart] = useState([])
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element = {<Products data = {cart} setData = {setCart}/>}/>
        <Route path="cart" element = {<Cart data = {cart} setData = {setCart}/>}/>
        <Route path="product/:id" element = {<Product data = {cart} setData = {setCart}/>}/>
      </Routes>
    </>
  );
}
export default App;
