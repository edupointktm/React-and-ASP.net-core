import React, { useEffect, useState } from 'react'

function UseState() {
    const [count, setCount]=useState(5)

    const [testcount, settestCount]=useState(10)
  
    useEffect(()=>{
      console.log("show me"+ count + testcount )
    },[testcount])

  let inc = ()=>{
    setCount(count+1)
  }

  let dec=()=>{
    setCount(count-1)
  }
    
  return (
    <>
    <h1> Exmaples of useState </h1>
    <hr/>

     <button onClick={()=>inc()}>+</button> 
         {count}  
     <button onClick={()=>dec()}>-</button>

     <br/>
     <br/>
     <br/>

     <button onClick={()=>settestCount(testcount+5)}>+</button> 
         {testcount}  
     <button onClick={()=>settestCount(testcount-5)}>-</button>
     
    </>
  )
}

export default UseState