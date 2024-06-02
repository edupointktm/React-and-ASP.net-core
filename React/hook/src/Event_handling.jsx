import React from 'react'

function Event_handling(props) {
    
     function message(name, add) {
       
        alert("Your Name is "+name + " and Address is "+add)
    }

  return (
    <>
    <h1> Event Handling </h1>
    <hr />
   
    <button onClick={()=>message(props.n, props.add)}>Hit Me</button>
    </>
  )
}

export default Event_handling