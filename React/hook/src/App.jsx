import React from 'react'
import Event_handling from './Event_handling'
import UseState from './hook/UseState'
import Fetch_api_data from './hook/Fetch_api_data'

function App() {
  let names='Garib Regmi'
  let address = "Kathmandu"
  return (
    <>
    {/* <Event_handling n={names} add={address}/> */}

    {/* <UseState/> */}
    <Fetch_api_data/>
    </>
  )
}

export default App