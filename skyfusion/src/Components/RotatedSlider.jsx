import React from "react";
import { motion } from "framer-motion";
import digi from "./../assets/Images/Ulistimage.png";

export default function RotatedSlider() {
  return (
    <motion.div
      className="flex items-center justify-center mt-5"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.3 }}
    >
      <div className="group w-full h-80 relative rounded-xl overflow-hidden">
        
        {/* Front Side */}
        <div className="absolute inset-0 flex items-center justify-center transition-all duration-500 group-hover:opacity-0">
          <img 
            src={digi} 
            alt="Front Image"
            className="object-cover w-full h-full"
          />
        </div>

        {/* Back Side (Hover Effect) */}
        <div 
          className="absolute inset-0 flex flex-col items-center justify-center text-black text-xl poppin rounded-xl transition-all duration-500 opacity-0 group-hover:opacity-100 group-hover:scale-105 bg-cover bg-center"
          style={{ backgroundImage: `url(${digi})` }}
        >
          {/* Dark Overlay for better text visibility */}
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>

          <motion.div
            className="relative z-10 p-6 text-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-5 group-hover:translate-y-0"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
          >
            <p className="text-lg text-white px-6">
            Redefining Digital Success
We believe in the power of innovation, creativity, and strategy to drive impactful digital growth.

            </p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
