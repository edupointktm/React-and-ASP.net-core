import React from 'react'
import Home from './page/Home'
import Contact from './page/Contact'
import { Route, Routes } from 'react-router-dom'
import About from './page/About'
import Page_not_found from './page/Page_not_found'
import Items_detials from './page/Items_detials'

function Section() {
    
    return (
        <>
          
    

        
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path ="/contact" element={<Contact/>}/>
            <Route path ="/about" element={<About/>}/>
            <Route path ="/items_details/:item_id" element={<Items_detials/>}/>
            <Route path ="/*" element={<Page_not_found/>}/>

            
        </Routes>
        

        </>
    )
}

export default Section