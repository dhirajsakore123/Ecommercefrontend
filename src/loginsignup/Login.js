import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { ToastContainer ,toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';



const Login = (props) => {

  const navigate=useNavigate()
  const[email,setEmail]=useState('')
  const[password,setPassword]=useState('')
  
 const  obj={
    "email":email,
    "password":password
}



  const handelSubmit=(e)=>{
    e.preventDefault()
   
     setEmail('')
     setPassword('')
   
      axios.post(`http://localhost:4000/products/login`,obj)
      .then(res=>{
       
        if(res.data.token){
           toast(res.data.msg)
          localStorage.setItem('token',res.data.token)
          localStorage.setItem('loggedIn',true)
          navigate('/')

        }else{
            toast(res.data.msg)
        }
    
        
       

       
      })
      .catch(err=>console.log(err))
     

      
     
  }
 
 
  return (
  <form onSubmit={handelSubmit}>
    <div className='container-login'>
    <div className='box1-login'>
     <h1>Login</h1>
    </div>

    <div className='box-login'>
    <label htmlFor="email">Email</label>
    <input type="email" id="email" name="email" onChange={(e)=>setEmail(e.target.value)} value={email}  className='input-login'/>
   </div>

   <div className='box-login'>
    <label htmlFor="password">Password</label>
    <input type="password" id="password" name="password" onChange={(e)=>setPassword(e.target.value)} value={password}  className='input-login'/>
   </div>

   <div className='box-login'>
      <button type='submit' className='button' >Login</button>
    </div>

     
     <div>
       Don't have any account?<span onClick={props.handelClick} className='toggle-login'>Register Here</span>
     </div>

    </div>
    <ToastContainer/>
  </form>
  )
}

export default Login

