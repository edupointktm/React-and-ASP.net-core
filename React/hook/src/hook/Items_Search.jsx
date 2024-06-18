import React, { useEffect, useState } from 'react'

function Items_Search() {
    let [count, setCount] = useState(10)
    let [tempcount, setTempCount] = useState(5)

    let [title, setTitle] = useState([])
    let [search, setSearch]=useState("")
    
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(data => setTitle(data))
    }, [])

    let searchData = title.filter((sd)=>sd.title.includes(search))
    console.log(searchData)
    let decrease = () => {
        setCount(count - 1)
    }
    let getSearch=(e)=>{
      
        setSearch(e.target.value)
    }
    return (
        <>

            <div className="container py-5">
                <div className="row">
               
                    <div className="col">
                        
                        <input type="text"  name="txtsearch" onChange={getSearch}/>
                    </div>
                </div>
                {searchData.map((t, id) =>
                    <div className="row border-bottom border-danger py-1" key={id} >
                        <div className="col">{t.title}</div>
                    </div>
                )}


            </div>
            {/* <div className="container py-5">
                <div>Welcome to Search Component</div>
                <button className='btn btn-primary' onClick={()=>setCount(count+1)}>+</button> 
                <label htmlFor="">  {count}  </label> 
                <button className='btn btn-danger' onClick={decrease}>-</button>
            </div>

            <div className="container py-5">
                <div>Welcome to Search Component</div>
                <button className='btn btn-warning' onClick={()=>setTempCount(tempcount+1)}>+</button> 
                <label htmlFor="">  {tempcount}  </label> 
                <button className='btn btn-success' onClick={()=>setTempCount(tempcount-1)}>-</button>
            </div> */}
        </>
    )
}

export default Items_Search