import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from '../components/Home'
import Mobile from '../components/Mobile'
import Laptop from '../components/Laptop'
import Accessories from '../components/Accessories'
import Navbar from './Navbar'
import Tablet from '../components/Tablet'
import DynamicCompo from '../components/DynamicCompo'
import GenericCompo2 from '../components/GenericCompo2'
import Generic2 from '../generic/Generic2'
import Cart from '../cartredux/Cart'
import SearchPage from '../components/SearchPage'
import Signuologin from '../loginsignup/Signuplogin'



const Routing = () => {
  return (
    <div>
     
      <Navbar/>
      <div className='middle-part'>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/tablet' element={<Tablet/>}/>
            <Route path='/mobile' element={<Mobile/>}/>
            <Route path='/laptop' element={<Laptop/>}/>
            <Route path='/assessories' element={<Accessories/>}/>
            <Route path='/generic2/:catogary2' element={<GenericCompo2/>}/>
            <Route path='/genericcompo2/:catogary2' element={<Generic2/>}/>
            <Route path='/dynamiccompo/:Id' element={<DynamicCompo/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/search' element={<SearchPage/>}/>
            <Route path='/signuplogin' element={<Signuologin/>}/>
             
            
        </Routes>
        </div>
     
    </div>
  )
}

export default Routing
