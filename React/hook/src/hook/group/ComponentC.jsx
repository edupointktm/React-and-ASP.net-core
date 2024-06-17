import React, { useContext } from 'react'
import { nameContext } from '../../App'


function ComponentC() {
    let user_name= useContext(nameContext)
    return (
        <>
            <div>Component C</div>
            <h5> My Name is : {user_name} </h5>
        </>

    )
}

export default ComponentC