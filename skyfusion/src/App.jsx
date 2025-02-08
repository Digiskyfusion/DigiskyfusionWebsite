import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import { Routes } from 'react-router-dom'
import Home from './Components/Home'
import WholeCircle from './Components/WholeCircle'
import Ourservices from './Components/Ourservices'
import Contactus from './Components/Contactus'
import Portfolio from './Components/Portfolio'
import Footer from './Components/Footer'
import Chooseus from './Components/Chooseus'
import Experience from './Components/Experience'


function App() {
  

  return (
    <>
    
   
  <Navbar />
 <Home />
 <WholeCircle />
 <Ourservices />
 <Chooseus />
 <Experience />

 <Portfolio /> 
 <Contactus /> 
 <Footer /> 
 
   
 
   
    <Routes>
   
    </Routes>
    
    </>
  )
}

export default App
