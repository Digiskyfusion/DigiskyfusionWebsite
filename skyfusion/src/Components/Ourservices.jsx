import React from 'react';
import { motion } from 'framer-motion';
import leftpic from './../assets/Images/leftpi.png';

function OurServices() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className='px-4 py-6 md:p-10 lg:p-5 flex flex-col-reverse md:flex-row justify-center gap-8'
    >
      {/* Left Content */}
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className='md:w-1/2 flex flex-col items-center md:items-start md:text-left'
      >
        <h1 className='text-3xl md:text-5xl font-bold mb-3 Roboto-thin'>
          Our Services
        </h1>
        <p className='text-lg md:text-2xl mt-2 md:mt-4 poppins-thin'>
          Grow your business with our comprehensive digital marketing solutions
        </p>

        {/* Accordion Section */}
        <div className='mt-4 md:mt-8 w-full Roboto-thin'>
          {[
            'Search Engine Optimization (SEO)',
            'Pay-Per-Click Advertising (PPC)',
            'Social Media Marketing',
            'Content Marketing',
          ].map((service, index) => (
            <motion.details
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className='border-b-2 border-black pb-2 rounded-md p-3 transition-all md:mb-5 duration-300 hover:bg-gray-100 focus:outline-none'
            >
              <summary className='font-medium pb-3 cursor-pointer'>
                {service}
              </summary>
              <p className='text-gray-500'>
                Deliver {service.toLowerCase()} value with compelling content that educates, inspires, and converts.
              </p>
            </motion.details>
          ))}
        </div>

        {/* CTA Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className=' poppin md:poppins-thin cursor-pointer mt-6 md:mt-8 px-6 py-2 rounded-full bg-gradient-to-r from-[#0E546A] to-[#F16D3C] text-white font-medium shadow-md hover:opacity-90 transition duration-300'
        >
          See More
        </motion.button>
      </motion.div>

      {/* Right Image Section */}
      <motion.div
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className='md:w-1/2 p-2'
      >
        <img
          src={leftpic}
          alt='service pic'
          className='w-full md:h-[30rem] lg:h-[40rem] object-cover rounded-md shadow-lg'
        />
      </motion.div>
    </motion.div>
  );
}

export default OurServices;
