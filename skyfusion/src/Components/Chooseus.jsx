import React from 'react';
import { motion } from 'framer-motion';
import cartpic from './../assets/Images/cardpic.png';
import image1 from './../assets/Images/Image1.jpg';
import Image2 from './../assets/Images/Image2.jpg';
import Image3 from './../assets/Images/Image3.jpg';
import Image4 from './../assets/Images/Image4.jpg';
import Image5 from './../assets/Images/Image5.jpg';

function Chooseus() {
  const features = [
    { id: "01", title: "Proven Expertise", desc: "Our team of certified digital marketing professionals brings years of experience to craft successful strategies.", img: cartpic },
    { id: "02", title: "Customized Solutions", desc: "We tailor marketing strategies to fit your specific business goals and industry needs.", img: image1 },
    { id: "03", title: "Data-Driven Approach", desc: "We rely on analytics and data insights to optimize campaigns for maximum impact.", img: Image2 },
    { id: "04", title: "Comprehensive Services", desc: "From SEO to paid advertising, we offer full-suite marketing solutions under one roof.", img: Image3 },
    { id: "05", title: "Transparent Communication", desc: "We keep you informed with clear reporting and open communication at every step.", img: Image4 },
    { id: "06", title: "Continuous Optimization", desc: "We analyze and refine strategies to ensure long-term success in your digital marketing efforts.", img: Image5 },
  ];

  return (
    <div className="p-6">
      {/* Title Animation */}
      <motion.h1 
        className="text-3xl font-medium mt-3 Roboto-thin"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Why Choose Us
      </motion.h1>

      <motion.p 
        className="text-2xl font-normal md:w-80 mt-3 poppins-thin"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Choose us to transform your online presence and achieve digital success.
      </motion.p>

      <div className="mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((item, index) => (
            <motion.div 
              key={index}
              className="rounded-lg p-6 shadow-lg bg-gradient-to-b from-[#0E546A] to-[#F16D3C] transition-transform transform hover:scale-105 hover:shadow-xl relative overflow-hidden group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: false, amount: 0.2 }} // Ensures animation triggers on scroll
            >
              {item.img && (
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-100 transition-opacity duration-50 transform scale-105 group-hover:scale-100"
                  style={{ backgroundImage: `url(${item.img})` }}
                />
              )}

              <div className="relative z-10 Roboto-thin">
                <h3 className="text-3xl font-bold text-white text-end">{item.id}</h3>
                <h4 className="text-xl font-semibold mt-2 text-white">{item.title}</h4>
                <p className="text-white mt-2">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Chooseus;
