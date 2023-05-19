import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Details from '../pages/Details'

const MyRoots = () => {
  return (
    <>
   <Routes>
     <Route path='/' element={<Home/>}/> 
     <Route path='/about' element={<About/>}/> 
     <Route path='/contact' element={<Contact/>}/> 
     <Route path='/details'element={<Details/>} />
   </Routes>

    </>
  )
}

export default MyRoots