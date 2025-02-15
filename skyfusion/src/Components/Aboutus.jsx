import React from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import RotatedSlider from "./RotatedSlider";
import VissionSection from "./VissionSection";
import StoryCards from "./StoryCards";

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
           Redefining Digital Success
We believe in the power of innovation, creativity, and strategy to drive impactful digital growth.

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
            className="mt-6 sm:mt-8 bg-amber-100 rounded-md flex flex-col sm:flex-row flex-wrap justify-center items-center px-4 sm:px-5 py-6 text-black gap-6 sm:gap-8"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            {/* Stats List */}
            <div className="flex flex-wrap justify-center gap-6 sm:gap-8 text-center text-xl sm:text-2xl lg:text-3xl">
              {[
                { end: 2, text: "Years of Experience", color: "text-[#F16D3C]" },
                { end: 20, text: "Project Challenges", color: "text-[#0E546A]" },
                { end: 50, text: "Trusted Clients", color: "text-[#0E546A]" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col items-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 + index * 0.2 }}
                >
                  <div className={`font-bold ${stat.color}`}>
                    <CountUp start={0} end={stat.end} duration={4} />
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
      <StoryCards />
    </>
  );
}

export default AboutUs;
