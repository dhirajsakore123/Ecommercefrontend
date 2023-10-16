import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import { ToastContainer ,toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const DynamicCompo = () => {
 
    const [data,setData]=useState('')
   const navigate=useNavigate()
    const params=useParams()
    useEffect(()=>{
      window.scrollTo(0,0)
   },[])
    useEffect(()=>{
     

       axios.get(`https://ecommersbackend-lqqo.onrender.com/products/Id/${params.Id}`)
       .then((res)=>setData(res.data))
       .catch((err)=>console.log(err))
    },[params.Id])


    function addtocart() {
    const loggedIn=localStorage.getItem("loggedIn")
   if(loggedIn){
    const token=localStorage.getItem("token")
    const token1=window.atob(token.split(".")[1])
    const jsonString = `${token1}`;
    const obj = JSON.parse(jsonString);
    const userId = obj._id;
    const productId=params.Id
    axios.post("https://ecommersbackend-lqqo.onrender.com/products/addtocart",{
    userId:userId,
    productId:productId
   })
   .then((res)=>console.log(res.data))
   .catch((err)=>console.log(err))
    navigate("/cart")
   }else{
    toast("Please Login")
   }
    
   
    

   
  
  }

console.log(data)
  return (
    <div className='dynamiccompo'>
    {
        data && data.map((item,index)=>{
            return(
               
                <div className='dynamic1' key={index}>
                   <img src={item.image} className='dynamic-img'  alt='not found'/>
                <button className='addtocart-link addtocart'   onClick={()=>addtocart()} >ADD TO CART</button>
                </div>
              
            )
        })
       }
       {
        data && data.map((item,index)=>{
            return(
               
                <div className='dynamic2' key={index}>
                  <p className='dynamic-name'>{item.name}</p>
                  <p className='special-price'>Special price</p>
                  <p><span className='price-sell'>{item.sellingprice}</span>     <span className='price-cost'>{item.costprice}</span>      <span className='price-discount'> {item.discount}Off</span></p>
                  <div className='dynamic-rating'>{item.rating}⭐</div>
                    <p className='dynamic-revive'>487 rating and 58 revivew</p>
                    <div className='dynamic-details'>
                    <p className='offers'>Available offers</p>
                    <div><div className='dynamic-tag'></div><b>Bank Offer</b>10% off on ICICI Bank Credit Card,up to ₹1500,on order of ₹5,000 and above<b className='blue'>T&C</b></div>
                    <div><div className='dynamic-tag'></div><b>Bank Offer</b>10% off on Axis Bank and Citi Credit Card, up to ₹1500, on orders of ₹5,000 and above<b className='blue'>T&C</b></div>
                    <div><div className='dynamic-tag'></div><b>Bank Offer</b>5% off on Flipkart Axis Bank Credit Card, up to ₹625, on orders of ₹5,000 and above<b className='blue'>T&C</b></div>
                    <div><div className='dynamic-tag'></div><b>Bank Offer</b>10% off on ICICI Bank Credit Card EMI Txns, up to ₹1750, on orders of ₹5,000 and above<b className='blue'>T&C</b></div>
                    <p className='para'><span className='tital'>Delivery</span>Delivery by Fri Oct 13 2023 | ₹40</p>
                    <p className='para'><span className='tital'>Warranty</span>No Warranty</p>
                    <p className='para'><span className='tital'>Description</span>{item.description}</p>
                    </div>  
                </div>
              
            )
        })
       }
        <ToastContainer/>
     </div>  
  )
}

export default DynamicCompo
