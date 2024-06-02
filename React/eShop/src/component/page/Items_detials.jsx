import React from 'react'
import { useParams } from 'react-router-dom'
import Items from '../../data/Items'
function Items_detials() {
    let {item_id} = useParams()

    let find_item = Items.find((fi)=>item_id==fi.id)

    console.log(find_item)
  return (
    <>
    <div className="container">
        <h1> Product Details </h1>
        <div className="row">
          <div className="col-5"> 
            <img src={find_item.image} alt="" />
          </div>
          <div className="col">
            <h4> Title : {find_item.item_name} </h4>
            <h4> Description : {find_item.description}</h4>
            <h4> categories : {find_item.categories}</h4>
            <h4> Price : {find_item.price}</h4>
          </div>
        </div>
    </div>
    </>
  )
}

export default Items_detials