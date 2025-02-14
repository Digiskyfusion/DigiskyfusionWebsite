import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AboutUs from './Components/Aboutus'
import Footer from "./Components/Footer"
import Membershipplan from './Components/Membershipplan'
import Services from './Pages/Services'
import ContactUs from './Components/Contactus'
import NavPortfolio from './Components/NavPortfolio'
import Contactuspage from './Pages/Contactuspage'
import HomePage from './Pages/HomePage'


function App() {
  

  return (
    <> 
   <BrowserRouter>
  <Navbar />
  <Routes>
    <Route  path='/' element={<HomePage />} />
    <Route  path='/about' element={<AboutUs />} />
    <Route  path='/services' element={ <Services />} />
    <Route  path='/ContactUs' element={ <Contactuspage />} />
    <Route path='/portfolio' element={ <NavPortfolio />} />
    </Routes>
   
 <Footer /> 
</BrowserRouter>


   
 
   
   
    
    </>
  )
}

export default App
