import React from 'react'

function App() {
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
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Gallery</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Download</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Contact</a>
                            </li>


                        </ul>

                    </div>
                </div>
            </nav>

            <div id="banner">
                <h4> Welcome to our eShop</h4>
            </div>

            <section>
                <div className="container">
                    <h3 className='text-center text-secondary'> Our Product</h3>
                    <div className="row">
                        <div className="col-2">
                            <div className='categories'>
                                <div className='bg-dark text-white fs-3 text-center'>CATEGORIES</div>
                                <div><ul><li><a href="#">Women's Fashion</a></li></ul></div>
                                <div><ul><li><a href="#">Health & Beauty</a></li></ul></div>
                                <div><ul><li><a href="#">Health & Beauty</a></li></ul></div>
                                <div><ul><li><a href="#">Health & Beauty</a></li></ul></div>
                                <div><ul><li><a href="#">Health & Beauty</a></li></ul></div>
                                <div><ul><li><a href="#">Health & Beauty</a></li></ul></div>
                                <div><ul><li><a href="#">Health & Beauty</a></li></ul></div>
                                <div><ul><li><a href="#">Health & Beauty</a></li></ul></div>
                            </div>
                        </div>

                        <div className="col-2 d-flex ">
                            <div className="card" style={{ width: '18rem' }}>
                                <img src="https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=1798&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <p className="card-text">Book</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-2 d-flex ">
                            <div className="card" style={{ width: '18rem' }}>
                                <img src="https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=1798&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <p className="card-text">Book</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-2 d-flex ">
                            <div className="card" style={{ width: '18rem' }}>
                                <img src="https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=1798&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <p className="card-text">Book</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-2 d-flex ">
                            <div className="card" style={{ width: '18rem' }}>
                                <img src="https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=1798&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <p className="card-text">Book</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-2 d-flex ">
                            <div className="card" style={{ width: '18rem' }}>
                                <img src="https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=1798&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <p className="card-text">Book</p>
                                </div>
                            </div>
                        </div>





                    </div>
                </div>
            </section>

            <footer>
                <div>Copyright © 2008 - 2024. Broadway Infosys Pvt. Ltd. or its affiliate(s). All rights reserved.</div>
            </footer>
        </>
    )
}

export default App