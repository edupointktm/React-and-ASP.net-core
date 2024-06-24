import axios from 'axios'
import React, { useEffect, useState } from 'react'

function App() {
  let [user_data, setUser_data] = useState([])
  let [input_data, setinput_data] = useState({
    name: '',
    gender: '',
    address: '',
    email: '',
    password: ''
  })


  useEffect(() => {
    axios.get("http://localhost:3000/users")
      .then((res) => setUser_data(res.data))


  }, [])

  let setData = (e) => {
    setinput_data({...input_data, [e.target.name]:e.target.value})
    
    
  }

  let saveData=()=>{
    axios.post('http://localhost:3000/users', input_data)    
    alert("Sucecssfully Save")
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Navbar</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Link</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" aria-disabled="true">Disabled</a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>

      <div className="container">
        <div className="row d-flex justify-content-between py-2">
          <div className="col-2">
            <div class="mb-3">
              <div>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
              </div>

            </div>
          </div>

          <div>
            {/* Button trigger modal */}
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
              ADD NEW
            </button>
            {/* Modal */}
            <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                  </div>
                  <div className="modal-body">
                    <div>
                      <div className="row">
                        <div className="col-12">
                          <label htmlFor="username" className="form-label">User Name</label>
                          <input type="text" id="user_name" className="form-control" name="name" onChange={setData} />
                        </div>
                        <div className="col-12">
                          <label htmlFor="username" className="form-label">Gender</label>
                          <input type="text" id="gender" className="form-control" name="gender" onChange={setData} />
                        </div>

                        <div className="col-12">
                          <label htmlFor="username" className="form-label">Address</label>
                          <input type="text" id="user_name" className="form-control" name="address" onChange={setData} />
                        </div>
                        <div className="col-12">
                          <label htmlFor="username" className="form-label">Email</label>
                          <input type="text" id="gender" className="form-control" name="email" onChange={setData}/>
                        </div>
                      </div>
                    </div>

                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-primary" onClick={saveData}>Save changes</button>
                  </div>
                </div>
              </div>
            </div>
          </div>


        </div>

        <table class="table">
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
            {user_data.map((ud, i) =>
              <tr>
                <th scope="row">{i + 1}</th>

                <td>{ud.name}</td>
                <td>{ud.gender}</td>
                <td>{ud.address}</td>
                <td>{ud.mobile}</td>
                <td>{ud.email}</td>
                <td><button className='btn btn-primary'>EDIT</button> | <button className='btn btn-danger'>DELETE</button></td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

    </>
  )
}

export default App