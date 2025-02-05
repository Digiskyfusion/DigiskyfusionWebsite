import React, { useEffect } from 'react';
import leftpic from './../assets/Images/leftpi.png';
import  "aos/dist/aos.css";
import Aos from "aos"


function OurServices() {

  useEffect(()=>{
    Aos.init({duration:2000})
    Aos.refresh();
  })

  return (
    <div className='px-4 py-6 md:p-10 lg:p-5 flex flex-col-reverse md:flex-row  justify-center gap-8 ' >
      
      {/* {/ Left Content /} */}
      <div className='md:w-1/2 flex flex-col items-center md:items-start md:text-left' data-aos="slide-right" >
        <h1 className='text-3xl md:text-5xl font-bold mb-3 Roboto-thin'>Our Services</h1>
        <p className='text-lg md:text-2xl mt-2 md:mt-4 poppins-thin'>
          Grow your business with our comprehensive digital marketing solutions
        </p>

        {/* {/ Accordion Section /} */}
        <div className='mt-4 md:mt-8 w-full Roboto-thin '>
          {["Search Engine Optimization (SEO)", "Pay-Per-Click Advertising (PPC)", "Social Media Marketing", "Content Marketing"].map((service, index) => (
            <details 
              key={index} 
              className='border-b-2 border-black pb-2 rounded-md p-3 transition-all md:mb-5 duration-300 hover:bg-gray-100 focus:outline-none'
            >
              <summary className='font-medium pb-3 cursor-pointer'>{service}</summary>
              <p className='text-gray-500'>
              Deliver {service.toLowerCase()}  value with compelling content that educates, inspires, and converts
              </p>
            </details>
          ))}
        </div>

        {/* {/ CTA Button /} */}
        <button className='poppins-thin cursor-pointer mt-6 md:mt-8 px-6 py-3 rounded-full bg-gradient-to-r from-[#0E546A] to-[#F16D3C] text-white font-medium shadow-md hover:opacity-90 transition duration-300'>
          See More
        </button>
      </div>

      {/* {/ Right Image Section /} */}
      <div className="md:w-1/2 p-2" data-aos="slide-left">
        <img 
          src={leftpic} 
          alt='service pic' 
          className='w-full md:h-[30rem] lg:h-[40rem] object-cover rounded-md shadow-lg'  
        />
      </div>

    </div>
  );
}

export default OurServices;