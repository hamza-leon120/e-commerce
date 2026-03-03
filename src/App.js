import { useEffect, useState } from "react";
import Products from "./page/Products";
import "./scss/style.css"
import Cart from "./page/Cart";
import { Route, Router, Routes } from "react-router-dom";
import Header from "./component/Header";
import Product from "./component/Product";
function App() {
  let [cart,setCart] = useState([])
  let [products,setProducts] = useState([])
      useEffect(function(){
          fetch("https://fakestoreapi.com/products")
          .then(function(e){return e.json()})
          .then(function(e){
            e.map(function(ele){
              Object.assign(ele,{
                repetition : 1
              })
            })
            return e
          })
          .then(function(e){return setProducts(e)})
      },[])
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element = {<Products products = {products} data = {cart} setData = {setCart}/>}/>
        <Route path="cart" element = {<Cart data = {cart} setData = {setCart}/>}/>
        <Route path="product/:id" element = {<Product products = {products} data = {cart} setData = {setCart}/>}/>
      </Routes>
    </>
  );
}
export default App;
