import {configureStore} from '@reduxjs/toolkit'
import  addtoCart  from './CounterSlice'


export  const store=configureStore({
    reducer:{
       Cart:addtoCart
    }
})