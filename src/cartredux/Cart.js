import React, { useEffect, useState } from "react";
import "../style/cart.css";
import Empty from "../logos/Empty.png";

import HocCompo from "./HocCompo";
import axios from "axios";

const Cart = () => {
  
  const [cart,Setcart]=useState('')
  // const [products,SetProducts]=useState('')
  // const map= cart && cart.map(item=>item.productId)
  // const cartProduct=products && products.filter(item => map.includes(item._id))

  
const price1=cart && cart.map(item=>item.productId.sellingprice)
const price2=cart && cart.map(item=>item.productId.costprice)
// console.log(price2)
const quantity=cart && cart.map(item=>item.quantity)
// console.log(quantity)

let p=1
 let arr =[]
for(let i=0; i<quantity.length; i++){
    p = quantity[i] *price1[i]
    arr.push(p)
}

let sellingprice = arr.reduce((sum, item) => {
  return sum + parseInt(item);
  }, 0)


let p1=1
 let arr1 =[]
for(let i=0; i<quantity.length; i++){
    p1 = quantity[i] *price2[i]
    arr1.push(p1)
}

let costprice = arr1.reduce((sum, item) => {
  return sum + parseInt(item);
  }, 0)





  

  const loggedIn=localStorage.getItem("loggedIn")
    
   
     
     
        useEffect(()=>{
        if(loggedIn){
          const token=localStorage.getItem("token")
          const token1=window.atob(token.split(".")[1])
          const jsonString = `${token1}`;
          const obj = JSON.parse(jsonString);
          const userId = obj._id;
          const obj2={
            userId:userId
           }
          
            axios.post("https://ecommersbackend-lqqo.onrender.com/products/cart",obj2)
            .then((res)=>Setcart(res.data.user.cart))
            .catch((err)=>console.log(err))
          }
        })

       
         
        const[id,setId]=useState('')

   
    
      const handelRemove=()=>{
        if(loggedIn){
          const token=localStorage.getItem("token")
          const token1=window.atob(token.split(".")[1])
          const jsonString = `${token1}`;
          const obj = JSON.parse(jsonString);
          const userId = obj._id;
  
          const obj1 ={
            productId:id,
            userId:userId 
           }
  
          axios.post("https://ecommersbackend-lqqo.onrender.com/products/removecartitem",obj1)
          .then((res)=>console.log(res.data))
          .catch((err)=>console.log(err))
        }
       
      }

      const handelPlus=()=>{
        if(loggedIn){
          const token=localStorage.getItem("token")
          const token1=window.atob(token.split(".")[1])
          const jsonString = `${token1}`;
          const obj = JSON.parse(jsonString);
          const userId = obj._id;
  
          const obj1 ={
            productId:id,
            userId:userId 
           }
  
          axios.post("https://ecommersbackend-lqqo.onrender.com/products/plusquantity",obj1)
          .then((res)=>res.data)
          .catch((err)=>console.log(err))
        }
       
      }

      const handelMinus=()=>{
        if(loggedIn){
          const token=localStorage.getItem("token")
          const token1=window.atob(token.split(".")[1])
          const jsonString = `${token1}`;
          const obj = JSON.parse(jsonString);
          const userId = obj._id;
  
          const obj1 ={
            productId:id,
            userId:userId 
           }
  
          axios.post("https://ecommersbackend-lqqo.onrender.com/products/minusquantity",obj1)
          .then((res)=>res.data)
          .catch((err)=>console.log(err))
        }
       
      }
  
     
      
  






  return (
    <div className="mob1">
      {cart.length === 0 ? (
        <div className="empty-cart">
          <h1>Your cart is currently Empty</h1>
          <img src={Empty} alt="not found" className="empty-img" />
        </div>
      ) : (
        <div className="item-cart">
          <div className="item-cart1">
         
            {cart &&
              cart.map((item, index) => {
                return (
                  <div className="cart-iteminner" key={index}>
                    <div className="img-box">
                      <img
                        src={item.productId.image}
                        className="cart-img"
                        alt="not found"
                      />
                      <div className="plus-minus">
                        <button className="plus"  onMouseOver={()=>setId(item.productId._id)}
                        onClick={handelMinus}>-</button>{" "} 
                          <p>{item.quantity}</p>
                        <button className="plus"  onMouseOver={()=>setId(item.productId._id)}
                        onClick={handelPlus} >+</button>{" "}
                      </div>
                    </div>
                    <div className="cart-iteminner1">
                      <p className="name">{item.productId.name}...</p>
                      <p>
                        <span className="price-sell">₹{item.productId.sellingprice}</span>
                        <span className="price-cost">
                        ₹{item.productId.costprice}
                        </span>{" "}
                        <span className="price-discount">
                          {" "}
                          {item.discount}Off
                        </span>
                      </p>
                      <p>Delivery By Delivery by Tue Oct 17 </p>
                      <button
                        className="btn-remove"
                        onMouseOver={()=>setId(item.productId._id)}
                        onClick={handelRemove}
                      >
                        REMOVE
                      </button>
                    </div>
                  </div>
                );
              })}
              <div className="quantity-container">
             
              </div>
          </div>

          <div className="item-cart2">
            <div className="price-details">Price details</div>
            <hr />
            <div className="price-cont">
              {" "}
              <div className="price-left">
                price(<span>{cart.length}</span>item)
              </div>{" "}
              <div className="price-right">{costprice}</div>{" "}
            </div>
            <div className="price-cont">
              <div className="price-left">Discount</div>{" "}
              <div className="price-right green">
                -{costprice - sellingprice}
              </div>{" "}
            </div>
            <div className="price-cont">
              <div className="price-left">Delivery Charges</div>{" "}
              <div className="price-right">
                <span className="green">Free</span>
              </div>{" "}
            </div>
            <hr />
            <div className="price-cont price-details">
              <div className="price-left">Total Amount</div>{" "}
              <div className="price-right">{sellingprice}</div>{" "}
            </div>
            <hr />
            <div className="price-details green">
              You will save {costprice - sellingprice} on this order
            </div>
          </div>
        </div>
      )}
       
    </div>
  );
};

export default HocCompo(Cart);
