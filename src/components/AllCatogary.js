
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link} from 'react-router-dom'

const AllCatogary = () => {
    const [data,setData]=useState('')
    useEffect(()=>{
       axios.get(`http://localhost:4000/products/allproducts`)
       .then((res)=>setData(res.data))
       .catch((err)=>console.log(err))
    },[])

  return (
    <div className='mob3'>
        <h1>All Catogary Products</h1>
    <div className='generic-Compo'>
      {
        data && data.slice(0,12).map((item,index)=>{
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

export default AllCatogary
