import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-warning">
                <div className="container">
                    <a className="navbar-brand" href="#"><span className='text-danger fw-bold '>e</span>Shop</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Gallery</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Download</a>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/contact">Contact</Link>
                            </li>


                        </ul>

                    </div>
                </div>
            </nav>
    </>
  )
}

export default Nav