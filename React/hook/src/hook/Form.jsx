import React, { useState } from 'react'

function Form() {
    let [fname, setFname] = useState("Prabhat")
    let getData = (e) => {
        //console.log(e.target.value)
        setFname(e.target.value)
    }
    let abc=(e)=>{
         e.preventDefault()
         console.log(fname)
    }
    return (
        <>    <div>Form</div>
            <h3> Welcome {fname}</h3>
            <form action="" onSubmit={abc}>
                <input type="text" onChange={getData} name="fNmae" />
                <button>Send</button>
            </form>
        </>

    )
}

export default Form