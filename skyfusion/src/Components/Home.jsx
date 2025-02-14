import React from 'react';
import { motion } from 'framer-motion';

import logo from './../assets/Images/background.png.png';
import ellips from './../assets/Images/Elips.png';
import frontLogo from './../assets/Images/femaleLogo.png';
import sound from './../assets/Images/sound.jpg';
import circle from './../assets/Images/Circle1.png';

function Home() {
  return (
    <>
      <div className='sticky z-0'>
        {/* Static Background Section (No Animation) */}
        <section
          className='relative bg-cover bg-center z-0 px-5 md:px-10 flex items-center md:pt-20'
          style={{ backgroundImage: `url(${logo})` }}
        >
          <div className='container flex flex-col md:flex-row justify-between items-center'>
            
            {/* Content with Scroll Animation */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false }}
              className='relative text-center md:text-start md:w-[60%] space-y-5 md:px-10 flex flex-col items-center md:items-start pt-6'
            >
              {/* Rotating Circle */}
              <motion.img
                src={circle}
                initial={{ opacity: 0, rotate: -180 }}
                whileInView={{ opacity: 1, rotate: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: false }}
                className="absolute left-[-30px] top-7 h-10 w-10 md:w-28 md:h-36 md:left-[-70px] rotate-y-360"
                alt="Rotating Circle"
              />
              
              <h1 className='text-3xl md:text-6xl font-poppins leading-tight Roboto-thin'>
                Elevate Your Brand with UI/UX Designer & Digital Marketing
              </h1>
              <p className='text-lg md:text-2xl poppins-thin'>
                Digital marketing (sometimes called online marketing) is an area of marketing that uses digital channels to connect with customers.
              </p>

              <motion.div
                className="hidden md:block cursor-pointer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <button className="py-2 px-5 bg-gradient-to-r from-[#0E546A] to-[#F16D3C] rounded-full text-white cursor-pointer poppins-thin">
                  Get Started
                </button>
              </motion.div>
            </motion.div>

            {/* Image Section with Scroll Animations */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false }}
              className='relative mt-10 md:mt-0 flex justify-center'
            >
              <div className='relative w-full max-w-sm md:max-w-md'>
                
                {/* Ellips Image */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: false }}
                  className='relative p-3 flex justify-center items-center'
                >
                  <img src={ellips} className='w-full h-auto' alt='Background' />
                  <img src={ellips} className='absolute w-3/4 h-auto top-1/2 transform -translate-y-1/2 spin-animation' alt='Ellips Under' />
                </motion.div>

                {/* Sound Image */}
                <motion.img
                  src={sound}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: false }}
                  className='absolute top-8 left-5 w-16 h-16 rounded-full shadow-lg'
                  alt='Sound'
                />

                {/* Front Logo */}
                <motion.img
                  src={frontLogo}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: false }}
                  className='absolute inset-0 w-full pt-15 z-10'
                  alt='Female Logo'
                />
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;
