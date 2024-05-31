import React from 'react'
import { useParams } from 'react-router-dom'

function Items_detials() {
    let {item_id} = useParams()
  return (
    <>
    <div className="container">
        <h1> Product Details : {item_id}</h1>
    </div>
    </>
  )
}

export default Items_detials