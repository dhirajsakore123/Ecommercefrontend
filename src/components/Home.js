
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Slider from '../generic/Slider';
import AllCatogary from './AllCatogary';
import { useEffect} from 'react';
import SlidingProduct from './SlidingProduct';



const Home = () => {
 
  useEffect(()=>{
     window.scrollTo(0,0)
  },[])
  
  
 
  return (
    <div>
      <Slider/>
      <ToastContainer/>
      <AllCatogary />
      <SlidingProduct/>
     </div>
   
  )
}

export default Home 
