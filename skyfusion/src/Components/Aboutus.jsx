import React from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import RotatedSlider from "./RotatedSlider";
import VissionSection from "./VissionSection";
import CLientSection from "./CLientSection";

function AboutUs() {
  return (
    <>
      <motion.div
        className="p-4 sm:p-6 md:p-8 lg:p-8 flex flex-col md:flex-row justify-between bg-gradient-to-r from-[#0E546A] to-[#F16D3C] text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* First Section */}
        <motion.div
          className="w-full md:w-[45%] px-3 sm:px-5 rounded-md"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <motion.h1
            className="text-orange-400 font-semibold text-lg sm:text-xl mt-14"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            How It Started
          </motion.h1>
          <motion.h1
            className="text-2xl sm:text-3xl lg:text-5xl font-bold leading-snug"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            Our Dream is Global Learning Transformation
          </motion.h1>
          <motion.p
            className="mt-3 sm:mt-4 md:mt-6 lg:mt-8 text-base sm:text-lg leading-relaxed"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.
          </motion.p>
        </motion.div>

        {/* Second Section */}
        <motion.div
          className="w-full md:w-[50%] mt-6 sm:mt-8"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <RotatedSlider />

          {/* Stats Section */}
          <motion.div
            className="mt-6 sm:mt-8 bg-amber-100 rounded-md flex flex-col sm:flex-row flex-wrap justify-between items-center px-4 sm:px-8 py-6 text-black gap-6 sm:gap-8"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            {/* First Column */}
            <div className="grid grid-cols-2 gap-6 sm:flex justify-center text-center text-xl sm:text-2xl lg:text-3xl">
              {[
                { end: 10, text: "Years of Experience", color: "#F16D3C" },
                { end: 50, text: "Project Challenges", color: "#0E546A" },
                { end: 500, text: "Positive Reviews", color: "#F16D3C" },
                { end: 1000, text: "Trusted Students", color: "#0E546A" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col items-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 + index * 0.2 }}
                >
                  <div>
                    <CountUp start={0} end={stat.end} duration={3} className={`font-bold text-[${stat.color}]`} />
                    <span>+</span>
                  </div>
                  <h1 className="text-center font-medium text-sm sm:text-base">{stat.text}</h1>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
      
      <VissionSection />
      <CLientSection />
    </>
  );
}

export default AboutUs;
