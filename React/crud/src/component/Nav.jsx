import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Nav() {
  let usenavigate = useNavigate()

  useEffect(() => {
    let getid = sessionStorage.getItem('id')
    if (getid == "" || getid == null) {
      usenavigate('/login')
    }
  }, [])

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-secondary text-light">
        <div className="container">
          <a className="navbar-brand" href="#">Navbar</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/users">Users</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/products">Products</Link>
              </li>


            </ul>
            <ul>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/login">Log Out</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Nav