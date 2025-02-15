import React from 'react'
import OurServices from '../Components/Ourservices'
import Experience from '../Components/Experience'
import Product from '../Components/Product'
import MembershipPlan from '../Components/Membershipplan'
import Homepage from '../Components/Homepage'
import WholeCircle from '../Components/WholeCircle'

function Services() {
  return (
    <>
      <div>
      <Homepage />
      <WholeCircle />
        <OurServices />
      {/* <MembershipPlan /> */}
        <Product />
        
      </div>
    </>
  )
}

export default Services
