import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useLocation } from 'react-router-dom'



const SearchPage = () => {
 const location=useLocation().state.search
  const [data,setData]=useState('')
  
    useEffect(()=>{
       axios.get(`https://ecommersbackend-lqqo.onrender.com/products/search/${location}`)
       .then((res)=>setData(res.data))
       .catch((err)=>console.log(err))
    },[location])
  return (
  <div className='mob4'>
    <h1>{data.length} Results Related To Search</h1>
    <div className='generic-Compo'>
      {
        data && data.map((item,index)=>{
          return(
            <Link className='card' to={`/dynamiccompo/${item._id}`} key={index}>
              <img className='card-img1' src={item.image} alt='not found'/>
               <p className='card-name'>{item.name.slice(0,70)}...</p>
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

export default SearchPage
