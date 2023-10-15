import React, {useState } from 'react'
import Login from './Login'
import SignUp from './SignUp'
import '../style/singnup.css'

const Signuologin = () => {

    const[toggle,setToggle]=useState(true)
const handelClick=()=>{
  setToggle(!toggle)
}
  return (
    <div className='mob'>
     {toggle? <Login handelClick={handelClick} />:<SignUp handelClick={handelClick} /> }
    </div>
  )
}

export default Signuologin