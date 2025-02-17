import React from 'react'
import Home from '../Components/Home'
import WholeCircle from '../Components/WholeCircle'
import OurServices from '../Components/Ourservices'
import Portfolio from '../Components/Portfolio'
import ContactUs from '../Components/Contactus'

import Chooseus from '../Components/Chooseus'
import Experience from '../Components/Experience'


function HomePage() {
  return (
    <div>
      <Home />
      <WholeCircle />
      <OurServices />
      <Chooseus />
      {/* <Experience /> */}
      <Portfolio />
      <ContactUs />
  
    
    </div>
  )
}

export default HomePage
