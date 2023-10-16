
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
// import 'react-slideshow-image/dist/styles.css'

import Slider from '../generic/Slider';
import AllCatogary from './AllCatogary';
import { useEffect } from 'react';

const Home = () => {
 
  useEffect(()=>{
     window.scrollTo(0,0)
  },[])

  
  
  return (
    <div>
      <Slider/>
      <ToastContainer/>
    <AllCatogary/>
     </div>
   
  )
}

export default Home 
