import React from "react";
import ReactDom from "react-dom/client"
import Msg from './Msg'
import Class_component from "./Class_component";
// import './style/style.css'

// import './SASS/main.scss'

ReactDom.createRoot(document.getElementById('root')).render(
    <>
      
       <Msg/>
       <Class_component/>

    </>
    
)



// let msg = "Welcome to React"
// document.getElementById('root').innerHTML = `<h1> ${msg} </h1>`

