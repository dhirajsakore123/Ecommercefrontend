import React, { useEffect, useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import profile from '../logos/profilewhite.png'
import axios from 'axios';
import hamburger from '../logos/hamburger.png'

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
   },[cart,loggin])
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
       <div><NavLink className='menu' to='/'  onClick={()=>setChange(!change)} >Homes</NavLink></div>
       <div className='min-menufalse'>
          
        </div>
    </div> 
    <div >

       <div  className='flex'><NavLink className='menu' to='/mobile'  onClick={()=>setChange(!change)} >Mobiles</NavLink> <span className='menu-arrow'  onMouseEnter={()=>setMobile(true)}  onMouseLeave={()=>setMobile(false)}>˅</span></div>

       <div className={mobile?'min-menu':'min-menufalse'}  onMouseEnter={()=>setMobile(true)}  onMouseLeave={()=>setMobile(false)} >
           <div  ><Link className='sub-items' to='/generic2/iphone' onClick={()=>setChange(!change)} >Iphone</Link></div>
           <div><Link className='sub-items' to='/generic2/oneplus' onClick={()=>setChange(!change)}>OnePlus</Link></div>
           <div ><Link className='sub-items' to='/generic2/vivo' onClick={()=>setChange(!change)}>Vivo</Link></div>  
      </div>
      
    </div>
    <div>
       <div className='flex'><NavLink className='menu' to='/laptop'  onClick={()=>setChange(!change)} >Laptops</NavLink> <span  className='menu-arrow'  onMouseEnter={()=>setLaptop(true)} onMouseLeave={()=>setLaptop(false)}>˅</span></div>
       <div className={laptop?'min-menu':'min-menufalse'}  onMouseEnter={()=>setLaptop(true)} onMouseLeave={()=>setLaptop(false)}>
       <div ><Link className='sub-items' to='/genericcompo2/mac' onClick={()=>setChange(!change)}>MacBook</Link></div>
       <div ><Link className='sub-items' to='/genericcompo2/hp'onClick={()=>setChange(!change)}>HP</Link></div>
         
        </div>
    </div>
    <div >
       <div  className='flex'><NavLink className='menu' to='/tablet'  onClick={()=>setChange(!change)}>Tablets</NavLink> <span  className='menu-arrow' onClick={()=>setTablet(!tablet)} onMouseEnter={()=>setTablet(true)} onMouseLeave={()=>setTablet(false)}>˅</span></div>
       <div className={tablet?'min-menu':'min-menufalse'} onMouseEnter={()=>setTablet(true)} onMouseLeave={()=>setTablet(false)}>
       <div ><Link className='sub-items' to='/genericcompo2/ipad' onClick={()=>setChange(!change)} >IPad</Link></div>
       <div ><Link className='sub-items' to='/genericcompo2/lenovo'onClick={()=>setChange(!change)}>Lenovo</Link></div>
        </div>
    </div>
    <div>
       <div  className='flex'><NavLink className='menu' to='/assessories'   onClick={()=>setChange(!change)}>Accessories</NavLink> <span  className='menu-arrow' onMouseEnter={()=>setAccessories(true)} onMouseLeave={()=>setAccessories(false)}>˅</span></div>
       <div className={accessories?'min-menu':'min-menufalse'}  onMouseEnter={()=>setAccessories(true)} onMouseLeave={()=>setAccessories(false)}>
       <div ><Link className='sub-items' to='/genericcompo2/wirlessbud' onClick={()=>setChange(!change)}>Wirlessbud</Link></div>
       <div><Link className='sub-items' to='/generic2/wirlessspeaker'onClick={()=>setChange(!change)}>Speaker</Link></div>
        </div>
    </div> 
    
      </div>
      <div className='hamburger' onClick={()=>setChange(!change)}><img src={hamburger} alt='not found' className='menu-hamburger'/></div>
    </div>
  )
}

export default Navbar
