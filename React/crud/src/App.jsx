import axios from 'axios'

import User_details from './user/User_details'
import Nav from './component/Nav'
import { useState } from 'react'
import UserModal from './user/UserModal'
import { Button, Modal } from 'react-bootstrap'

function App() {
let [show, setShow]=useState(false)
  
let handleShow=()=>{setShow(true)}

let handleClose=()=> {setShow(false)}


  return (
    <>

      <Nav />
      <User_details />

        {/* <div className="container py-5">
          <div className="row">
            <div className="col "> <button className='btn btn-primary' onClick={handleShow}> ADD</button></div>
          </div>
        </div> */}
       
        {/* <Modal show={show} onHide={handleClose}>
        
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>

        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      
      </Modal> */}
    </>
  )
}

export default App