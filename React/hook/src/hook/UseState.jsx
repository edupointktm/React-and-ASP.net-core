import React, { useState } from 'react'

function UseState() {
    const [count, setCount]=useState(5)
  return (
    <>
    <h1> Exmaples of useState </h1>
    <hr/>

     <button onClick={()=>setCount(count+1)}>+</button> {count}  <button onClick={()=>setCount(count-1)}>-</button>
    </>
  )
}

export default UseState