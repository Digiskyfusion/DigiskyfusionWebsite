import React from 'react'
import MapComponent from '../Components/MapComponent'
import MapSecondSection from '../Components/MapSecondSection'
import ContactUs from '../Components/Contactus'


function Contactuspage() {
  return (
    <>
      <div>
      <ContactUs />
        <div className=' mt-1 p-1 rounded-md'>
        <div className='flex flex-col md:flex-row p-2 bg-gray-400 rounded-md'>
        <MapComponent />
        <MapSecondSection />
        </div>
         
        </div>
      </div>
    </>
  )
}


export default Contactuspage


