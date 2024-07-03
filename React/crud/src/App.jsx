import axios from 'axios'

import User_details from './user/User_details'
import Nav from './component/Nav'
import { useState } from 'react'
import UserModal from './user/UserModal'
import { Button, Modal } from 'react-bootstrap'
import Login from './component/Login'
import { Route, Routes } from 'react-router-dom'
import Product_details from './product/Product_details'

function App() {
  let [show, setShow] = useState(false)

  let handleShow = () => { setShow(true) }

  let handleClose = () => { setShow(false) }


  return (
    <>
{/*  */}
      
      {/* <User_details /> */}
      <Routes>
        <Route path ="/" element={<Nav />}/>
       <Route path="/login" element={<Login />} />
       <Route path="/users" element={<User_details />} />
       <Route path="/products" element={<Product_details />} />
       
      </Routes>
    </>
  )
}

export default App