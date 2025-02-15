import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import leftpic from './../assets/Images/leftpi.png';

function OurServices() {
  // Controls for text section
  const textControls = useAnimation();
  const textRef = useRef(null);
  const textInView = useInView(textRef, { triggerOnce: false, margin: "-100px" });

  // Controls for image section
  const imageControls = useAnimation();
  const imageRef = useRef(null);
  const imageInView = useInView(imageRef, { triggerOnce: false, margin: "-100px" });

  useEffect(() => {
    if (textInView) {
      textControls.start("visible");
    } else {
      textControls.start("hidden");
    }
  }, [textInView, textControls]);

  useEffect(() => {
    if (imageInView) {
      imageControls.start("visible");
    } else {
      imageControls.start("hidden");
    }
  }, [imageInView, imageControls]);

  return (
    <div className='px-4 py-6 md:p-10 lg:p-5 flex flex-col-reverse md:flex-row justify-center gap-8'>
      
      {/* Left Content */}
      <motion.div
        ref={textRef}
        initial="hidden"
        animate={textControls}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
        }}
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
            { title: 'Branding & Identity', desc: 'Because your brand deserves to be unforgettable!' },
            { title: 'Website Development', desc: 'We build websites that don’t just sit there; they talk,engage, and convert!' },
            { title: 'Social Media Marketing', desc: 'Likes, shares, and viral trends? We make them happen.' },
            { title: 'SEO & Content Strategy', desc: 'Because a business without Google rankings is like pizza without cheese (heartbreaking, right?).' },
            { title: 'Graphic & Video Creations', desc: '– Let’s make your brand visually stunning! We don’t just "work"—we create stories, connections, and success for our clients.' },
          ].map((service, index) => (
            <motion.details
              key={index}
              initial="hidden"
              animate={textControls}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: index * 0.2 } },
              }}
              className='border-b-2 border-black pb-2 rounded-md p-3 transition-all md:mb-5 duration-300 hover:bg-gray-100 focus:outline-none'
            >
              <summary className='font-medium pb-3 cursor-pointer'>
                {service.title}
              </summary>
              <p className='text-gray-500'>
                {service.desc}
              </p>
            </motion.details>
          ))}
        </div>


        {/* CTA Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className='poppin md:poppins-thin cursor-pointer mt-6 md:mt-8 px-6 py-2 rounded-full bg-gradient-to-r from-[#0E546A] to-[#F16D3C] text-white font-medium shadow-md hover:opacity-90 transition duration-300'
        >
          See More
        </motion.button>
      </motion.div>

      {/* Right Image Section */}
      <motion.div
        ref={imageRef}
        initial="hidden"
        animate={imageControls}
        variants={{
          hidden: { opacity: 0, x: 50 },
          visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
        }}
        className='md:w-1/2 p-2'
      >
        <img
          src={leftpic}
          alt='service pic'
          className='w-full md:h-[30rem] lg:h-[40rem] object-cover rounded-md shadow-lg'
        />
      </motion.div>
    </div>
  );
}

export default OurServices;
