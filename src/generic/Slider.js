import React from 'react'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import Screen1 from '../logos/Screenshot1.png'
import Screen2 from '../logos/Screenshot2.png'
import Screen3 from '../logos/Screenshot3.png'
import Screen4 from '../logos/Screenshot4.png'


const Slider = () => {
  
      const properties={
        transitionDuration:200,
       
      }
      const divStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundSize: 'cover',
        height: '80vh'
      }
      const slideImages = [
        {
          url: Screen1,
          caption: 'First Slide'
        },
        {
          url: Screen2,
          caption: 'Second Slide'
        },
        {
          url: Screen3,
          caption: 'Third Slide'
        },
        {
            url: Screen4,
            caption: 'Third Slide'
          },
      ];
      
      return (
        
           <div  className='horizontal-box'>
            <Slide {...properties}>
             {slideImages && slideImages.map((slideImage, index)=> (
                <div key={index} className='horizontal-box'>
                  <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}>
                  </div>
                </div>
              ))} 
            </Slide>
          </div>
        
       
      )
}

export default Slider
