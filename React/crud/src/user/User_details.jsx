import axios from 'axios'
import React, { useEffect, useState } from 'react'
import User_create from './User_create'
import Nav from '../component/Nav'
import { Button, Modal } from 'react-bootstrap'

function User_details() {
  let [showAddUserModal, setShowAddUserModal] = useState(false)
  let [user_data, setUser_data] = useState([])
  let [getEditID, setGetEditID] = useState("")
  let [search, setSearch] = useState("")

  
  useEffect(() => {
    getAllusers()



  }, [])

  let getAllusers = () => {
    axios.get("http://localhost:3000/users")
      .then((res) => setUser_data(res.data))
  }

  let handleDelete = (id) => {
    axios.delete('http://localhost:3000/users/' + id)
    confirm("Do you want to Delete the Data")


  }
  return (
    <>
    <Nav/>
      <div className="container py-2">
        <div className="row d-flex justify-between">
          <div className="col">
            <input type="text" onChange={(e)=>setSearch(e.target.value)}/>
          </div>
          <div className="col">
            <button type="button" className="btn btn-primary"
              onClick={() => { setShowAddUserModal(true) }}
            >
              ADD NEW
            </button>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col">
            <table className="table">
              <thead className='table-primary'>
                <tr>
                  <th scope="col">SN</th>
                  <th scope="col">User Name</th>
                  <th scope="col">Gender</th>
                  <th scope="col">Adress</th>
                  <th scope="col">Mobile</th>
                  <th scope="col">Email</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {user_data.filter((ud)=>ud.name.toLowerCase().includes(search)).map((ud, i) =>
                  <tr key={i}>
                    <th scope="row">{i + 1}</th>

                    <td>{ud.name}</td>
                    <td>{ud.gender}</td>
                    <td>{ud.address}</td>
                    <td>{ud.mobile}</td>
                    <td>{ud.email}</td>
                    <td>
                      <button className='btn btn-primary' onClick={() => { setShowAddUserModal(true); setGetEditID(ud.id) }}>EDIT</button> |
                      <button className='btn btn-danger' onClick={() => handleDelete(ud.id)}>DELETE</button></td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* AddNew User Modal */}


      <User_create
        getEditID={getEditID}
        showModal={showAddUserModal}
        getAdduser={() => { setShowAddUserModal(false); getAllusers() }}
      />




    </>
  )
}

export default User_details