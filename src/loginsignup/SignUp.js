import React, {  useState } from 'react'
import axios from 'axios'
// import { useNavigate } from 'react-router-dom'
import { ToastContainer ,toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';



const SignUp = (props) => {
// const navigate=useNavigate()
//   const navigate=useNavigate()
    const[name,setName]=useState('')
    const[lastname,setLastname]=useState('')
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')
    
   const  obj={
      firstname:name,
      lastname:lastname,
      email:email,
      password:password
  }

 
   
// const[toggle,setToggle]=useState(false)
    const handelSubmit=(e)=>{
      e.preventDefault()
    

      setName('')
      setLastname('')
       setEmail('')
       setPassword('')
     
       axios.post(`https://ecommersbackend-lqqo.onrender.com/products/register`,obj)
        .then(res=>toast(res.data.msg))
        .catch(err=>console.log(err))
     
      // localStorage.setItem('token',value && value.token)
      // console(value && value)
      // alert(value && value.msg)
    }
  //  const handelcall=()=>{
    
  //  }
    
   
    

   
  return (

    
     <form onSubmit={handelSubmit}>
        <div className='container-login'>
        <div className='box1-login'>
         <h1>Registration</h1>
        </div>
      
         <div className='box-login'>
         <label htmlFor='name'>FirstName</label> 
          <input type='text' name='name' id='name' onChange={(e)=>setName(e.target.value)} value={name} autoComplete='off' className='input-login'/>
        </div>
      
        <div className='box-login'>
          <label htmlFor='phone'>LastName</label>
          <input type='text' name='phone' id='phone' onChange={(e)=>setLastname(e.target.value)}  value={lastname} className='input-login'/>
       </div >
      
       <div className='box-login'>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" onChange={(e)=>setEmail(e.target.value)} value={email} className='input-login'/>
       </div>
       
       <div className='box-login'>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" onChange={(e)=>setPassword(e.target.value)} value={password} required className='input-login'/>
       </div>
         
        <div className='box-login'>
          <button type='submit' className='button'>Register</button>
         </div>
      
        <div >
            Alreadty have any account?<span onClick={props.handelClick} className='toggle-login'>Login Here</span>
        </div>
      
        </div>
        <ToastContainer/>
      </form>
    
  )
}

export default SignUp

