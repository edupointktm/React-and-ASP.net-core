import React, { createContext } from 'react'
import Event_handling from './Event_handling'
import UseState from './hook/UseState'
import Fetch_api_data from './hook/Fetch_api_data'
import Form from './hook/Form'
import ComponentA from './hook/group/ComponentA'
import { Route, Routes } from 'react-router-dom'
import CatWise from './hook/CatWise'
import Items_Search from './hook/Items_Search'

export let nameContext = createContext()
function App() {
  
  let names = 'Garib Regmi'
  let address = "Kathmandu"
  let users = "Ram kumar Regmi"
  return (
    <>
      {/* <Event_handling n={names} add={address}/> */}

      {/* <UseState/> */}
      {/* <Form/> */}
      {/* <Routes>
        <Route path="/" element={<Fetch_api_data/>}/> 
        <Route path="/catwise/:cat_id" element={<CatWise/>}/> 

      </Routes> */}

      {/* <nameContext.Provider value={users}>
        <ComponentA />
      </nameContext.Provider > */}
      <Items_Search/>
    </>
  )
}

export default App