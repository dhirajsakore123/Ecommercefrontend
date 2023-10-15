import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const SlidingProduct = () => {
    const properties={
        transitionDuration:200,
       
      }
      const divStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundSize: 'cover',
        width:'120px',
        height:'22vh'
      }

      const [data,setData]=useState('')
    useEffect(()=>{
       axios.get(`http://localhost:4000/products/allproducts`)
       .then((res)=>setData(res.data))
       .catch((err)=>console.log(err))
    },[])

  return (
    <div>
       <div className="horizontal-box">
            <Slide className="slide-products">
             {data && data.map((slideImage, index)=>{
                return(
                    <div className='horizantal-flex'>
                        <div className='horizantal-box'>
                        <img src={slideImage.image}/>
                        </div>
                    </div>
                )
             }
              

              
              )} 
            </Slide>
          </div>
    </div>
  )
}

export default SlidingProduct
