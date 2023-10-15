import React, { useState } from 'react'

const HocCompo = (Wrappedcompo) => {
    
    function Hoc(){
        const[value,setValue]=useState(1)
      const handelAdd=()=>{
        setValue(value+1)
      }
      const handelSub=()=>{
        setValue(value-1)
      }
      return(
        <Wrappedcompo value={value} handelAdd={handelAdd} handelSub={handelSub}/>
      )
    }
  return Hoc
   
}

export default HocCompo
