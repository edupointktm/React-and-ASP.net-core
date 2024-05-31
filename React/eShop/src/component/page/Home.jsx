import React from 'react'
import Categories from '../../data/Categories'
import Items from '../../data/Items'
import { Link } from 'react-router-dom'
function Home() {

    return (
        <>
            <section>
                <div className="container">
                    <h3 className='text-center text-secondary'> Our Product</h3>
                    <div className="row">
                        <div className="col-2">
                            <div className='categories text-secondary'>
                                <div className='bg-dark text-white fs-3 text-center'>CATEGORIES</div>
                                {Categories.map((cat) =>
                                    <div className='py-1 px-2'><ul><li><a href="#">{cat}</a></li></ul></div>
                                )}
                            </div>
                        </div>

                        {Items.map((i) =>
                            <Link to={`/items_details/${i.id}`} className="col-2 d-flex ">
                               
                                    <div className="card mx-1" style={{ width: '18rem' }}>
                                        <img src={i.image} className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <p className="card-text">{i.description}</p>
                                        </div>
                                    </div>
                                
                            </Link>

                        )}


                    </div>



                </div>
            </section>
        </>
    )
}

export default Home