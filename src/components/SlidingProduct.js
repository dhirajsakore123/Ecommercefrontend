import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';


function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style,right:"20px" , display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block",left:"40px", background: "green" }}
      onClick={onClick}
    />
  );
}



const SlidingProduct = () => {

      const [data,setData]=useState('')
    useEffect(()=>{
       axios.get(`https://ecommersbackend-lqqo.onrender.com/products/allproducts`)
       .then((res)=>setData(res.data))
       .catch((err)=>console.log(err))
    },[])

  
  
    var settings1 = {
      infinite: true,
      slidesToShow: 3,
    
      nextArrow: <SampleNextArrow />,
      prevArrow: <PrevArrow />
     
    };


  return (
    <div className='product-slider'>
        <Slider  {...settings1}>
        {
        data && data.map((item,index)=>{
          return(
            <Link className='slider-card' to={`/dynamiccompo/${item._id}`} key={index}>
              <div className='sliderimg-div'><img className='slidercard-img' src={item.image} alt='not found'/></div> 
               <p className='card-name cardname-slider'>{item.name.slice(0,70)}...</p>
               <p className='card-sellprice cardname-slider'>Sale Price:{item.sellingprice}</p>
               <p className='card-costprice cardname-slider'>M.R.P:{item.costprice}</p>
               <p className='card-rating '>Rating:{item.rating}⭐</p>
            </Link>
          )
        })
      }
        </Slider>
      </div>
  )
}

export default SlidingProduct
