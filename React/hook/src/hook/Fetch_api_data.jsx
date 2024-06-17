import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Fetch_api_data() {
    let [api_data, setApi_data] = useState([])
    let [api_cat, setApi_cat] = useState([])
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => setApi_data(data))

        fetch('https://fakestoreapi.com/products/categories')
            .then(res => res.json())
            .then(data => setApi_cat(data))

    }, [])

    return (
        <>
            <div className="container-fluid">
                <h3>Categories</h3>
                <div className="row bg-primary text-white py-2">
                    {api_cat.map((ac) =>

                        <div className="col-2">
                            <h5><Link to={`/catwise/${ac}`} className='nav-link'> {ac} </Link></h5>
                        </div>
                    )}
                    <div className="col">
                        <input type="text" name="search" /> 
                    </div>
                </div>
            </div>


            <div className="container">
                <div className="row">
                    {api_data.map((ad) =>
                        <div className="col-3 py-1">
                            <div className="card" style={{ width: '18rem' }}>
                                <img src={ad.image} className="card-img-top" alt="..." width="10%" />
                                <div className="card-body">
                                    <h5 className="card-title">{ad.title}</h5>
                                    <p className="card-text">{ad.description}</p>
                                    <h5>${ad.price}</h5>
                                    <a href="#" className="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>

                        </div>

                    )}

                </div>
            </div>

        </>
    )
}

export default Fetch_api_data