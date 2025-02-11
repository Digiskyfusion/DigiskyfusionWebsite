import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import AboutUs from './Components/Aboutus'
import Footer from "./Components/Footer"
import Membershipplan from './Components/Membershipplan'


function App() {
  

  return (
    <>
    
   <BrowserRouter>
  <Navbar />
  <Routes>
    <Route  path='/' element={<Home />} />
    <Route  path='/about' element={<AboutUs />} />
    </Routes>
 <Footer /> 
</BrowserRouter>

 <Membershipplan />

 
   
 
   
   
    
    </>
  )
}

export default App
