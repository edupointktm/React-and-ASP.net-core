import React from 'react'
import Event_handling from './Event_handling'
import UseState from './hook/UseState'

function App() {
  let names='Garib Regmi'
  let address = "Kathmandu"
  return (
    <>
    {/* <Event_handling n={names} add={address}/> */}

    <UseState/>
    </>
  )
}

export default App