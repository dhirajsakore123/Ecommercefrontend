import React from 'react'
import Routing from './rounting/Routing'
import './style/nav.css'
import Footer from './rounting/Footer'


const App = () => {
  return (
    <div className='page'>
      <Routing/>
      <div className='home-footer'>
        <Footer/>
      </div> 
    </div>
  )
}

export default App

