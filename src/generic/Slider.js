import React from 'react'
import Screen1 from '../logos/Screenshot1.png'
import Screen2 from '../logos/Screenshot2.png'
import Screen3 from '../logos/Screenshot3.png'
import Screen4 from '../logos/Screenshot4.png'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import {Carousel} from "react-responsive-carousel"
import '../style/Slider.css'

const Slider = () => {

      
      return (
        
           <section className='imageSlider'>
        
          <Carousel infiniteLoop autoPlay>
            <div className='image'>
            <img src={Screen1} alt='Screen1'/>
            </div>
            <div className='image'>
            <img src={Screen2} alt='Screen2'/>
            </div>
            <div className='image'>
            <img src={Screen3} alt='SScreen3'/>
            </div>
            <div className='image'>
            <img src={Screen4} alt='Screen4'/>
            </div>
          
          </Carousel>
          </section>
        
       
      )
}



export default Slider