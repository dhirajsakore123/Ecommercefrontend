import React, { useEffect, useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import profile from '../logos/profilewhite.png'
import axios from 'axios';
import Menu from '../cartredux/Menu';

const Navbar = () => {
   const navigate=useNavigate()
   const [search,setSearch]=useState('')
   // const cartItem = useSelector((state) => state.Cart.cart);
  const[show,setShow]=useState(false)
  const[mobile,setMobile]=useState(false)
  const[laptop,setLaptop]=useState(false)
  const[tablet,setTablet]=useState(false)
  const[accessories,setAccessories]=useState(false)
  const[change,setChange]=useState(false)
  const[cart,Setcart]=useState('')
  const handelLogout=()=>{
   navigate('/')
   localStorage.removeItem('loggedIn')
   localStorage.removeItem('token')
  
  }
  const handelSearch=()=>{
   navigate('/search', { state: { search: search } })
   setSearch('')
  }
  const loggin=localStorage.getItem('loggedIn')
  useEffect(()=>{
   if(loggin){
     const token=localStorage.getItem("token")
     const token1=window.atob(token.split(".")[1])
     const jsonString = `${token1}`;
     const obj = JSON.parse(jsonString);
     const userId = obj._id;
     const obj2={
       userId:userId
      }
     
       axios.post("https://ecommersbackend-lqqo.onrender.com/products/cart",obj2)
       .then((res)=>Setcart(res.data.user.cart))
       .catch((err)=>console.log(err))
     }
   })
  return (
    <div className='navbar'>

      <div className='upper-nav'>
         <div className='nav1'>
          <div className='tag' onClick={()=>navigate('/')}>

          </div>
         </div>
            <div className='nav2'>
              
                <input type='text' placeholder='Search for products,brands and more...' className='search-inp' value={search} onChange={(e)=>setSearch(e.target.value)}/>
                <div className='search-btn' onClick={handelSearch}></div>
              
            </div>
         <div className='nav3'>
            {loggin?<div className='profile-box' onClick={()=>setShow(!show)}><img src={profile} alt='not found' className='img-profile'/>
            <div className={show?"log-out":"log-out1"} onClick={handelLogout}>Log Out</div></div>:<button className='login-btn' onClick={()=>navigate('/signuplogin')}>Login</button>}
          
         </div>
         <div className='nav4'>
          <div className='cart-btn' onClick={()=>navigate("/cart")}>
            {loggin?cart.length:"0"}
          </div>
         </div>
      </div>

      <div className={change?"menu-navshow":'menu-nav'}>

    <div>
       <div><NavLink className='menu' to='/' >Homes</NavLink></div>
       <div className='min-menufalse'>
          
        </div>
    </div> 
    <div onMouseEnter={()=>setMobile(true)}  onMouseLeave={()=>setMobile(false)}>

       <div><NavLink className='menu' to='/mobile' >Mobiles</NavLink></div>

       <div className={mobile?'min-menu':'min-menufalse'}>
           <div ><Link className='sub-items' to='/generic2/iphone'>Iphone</Link></div>
           <div><Link className='sub-items' to='/generic2/oneplus'>OnePlus</Link></div>
           <div ><Link className='sub-items' to='/generic2/vivo'>Vivo</Link></div>  
      </div>
      
    </div>
    <div onMouseEnter={()=>setLaptop(true)} onMouseLeave={()=>setLaptop(false)}>
       <div><NavLink className='menu' to='/laptop' >Laptops</NavLink></div>
       <div className={laptop?'min-menu':'min-menufalse'}>
       <div ><Link className='sub-items' to='/genericcompo2/mac'>MacBook</Link></div>
       <div ><Link className='sub-items' to='/genericcompo2/hp'>HP</Link></div>
         
        </div>
    </div>
    <div onMouseEnter={()=>setTablet(true)} onMouseLeave={()=>setTablet(false)}>
       <div><NavLink className='menu' to='/tablet' >Tablets</NavLink></div>
       <div className={tablet?'min-menu':'min-menufalse'}>
       <div ><Link className='sub-items' to='/genericcompo2/ipad'>IPad</Link></div>
       <div ><Link className='sub-items' to='/genericcompo2/lenovo'>Lenovo</Link></div>
        </div>
    </div>
    <div onMouseEnter={()=>setAccessories(true)} onMouseLeave={()=>setAccessories(false)}>
       <div><NavLink className='menu' to='/assessories' >Accessories</NavLink></div>
       <div className={accessories?'min-menu':'min-menufalse'}>
       <div ><Link className='sub-items' to='/genericcompo2/wirlessbud'>Wirlessbud</Link></div>
       <div><Link className='sub-items' to='/generic2/wirlessspeaker'>Speaker</Link></div>
        </div>
    </div> 
    
      </div>
      <div className='hamburger' onClick={()=>setChange(!change)}><Menu/></div>
    </div>
  )
}

export default Navbar
