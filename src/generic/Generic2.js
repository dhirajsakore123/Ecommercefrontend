import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'
const GenericCompo2 = () => {
    const params=useParams()
    console.log(params);
  const [data,setData]=useState('')
    useEffect(()=>{
    
       axios.get(`https://ecommersbackend-lqqo.onrender.com/products/catogary2/${params.catogary2}`)
       .then((res)=>setData(res.data))
       .catch((err)=>console.log(err))
    },[params.catogary2])
  return (
    <div className='mob'>
    <div className='generic-Compo'>
      {
        data && data.map((item,index)=>{
          return(
            <Link className='card' to={`/dynamiccompo/${item._id}`} key={index}>
              <img className='card-img1' src={item.image} alt='not found'/>
               <p className='card-name1'>{item.name.slice(0,70)}...</p>
               <p className='card-sellprice'>Sale Price:{item.sellingprice}</p>
               <p className='card-costprice'>M.R.P:{item.costprice}</p>
               <p className='card-rating'>Rating:{item.rating}⭐</p>
            </Link>
          )
        })
      }
    </div>
    </div>
  )
}

export default GenericCompo2
