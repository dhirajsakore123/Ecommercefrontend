import React ,{useState}from 'react'

const Menu = () => {
    const[text,setText]=useState('bar-hamburger')
    const[text1,setText1]=useState('bar-hamburger')
    const[text2,setText2]=useState('bar-hamburger')
    
  
    const handelClick=()=>{
        setText((prevClassName) => prevClassName === 'bar-hamburger' ? 'ba-hamburger' : 'bar-hamburger');
        setText1((prevClassName) => prevClassName === 'bar-hamburger' ? 'ba1-hamburger' : 'bar-hamburger');
        setText2((prevClassName) => prevClassName === 'bar-hamburger' ? 'ba2-hamburger' : 'bar-hamburger');

    }
  return (
    <>
    <div className='menu-hamburger' onClick={handelClick}>
      <div  id='bar1-hamburger' className={text} ></div>
      <div  id='bar2-hamburger'className={text1}></div>
      <div  id='bar3-hamburger' className={text2}></div>
    </div>
    </>
  )
}

export default Menu