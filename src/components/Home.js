
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Slider from '../generic/Slider';
import AllCatogary from './AllCatogary';
import { useEffect, useState } from 'react';



const Home = () => {
 
  useEffect(()=>{
     window.scrollTo(0,0)
  },[])
  
  const [data,setData]=useState([])
  console.log(data)
  return (
    <div>
      <Slider/>
      <ToastContainer/>
      <AllCatogary setData={setData}/>
     </div>
   
  )
}

export default Home 
