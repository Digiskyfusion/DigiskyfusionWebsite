import React from "react";
import { motion } from "framer-motion";
import { CiLocationOn } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

function MapSecondSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-[#0E546A] py-6 flex justify-center items-center w-full merriweather-regular"
    >
      <div className="container mx-auto px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-white text-2xl font-semibold mb-6"
        >
          Book Appointment
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8">
            <div className="flex items-center space-x-2">
              <CiLocationOn className="text-white text-xl" />
              <p className="text-white">F-268 Mohali 8B</p>
            </div>

            <div className="flex items-center space-x-2">
              <FaPhoneAlt className="text-white text-sm" />
              <p className="text-white">+91 12345 67890</p>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 mt-6">
            <div className="flex items-center space-x-2">
              <IoIosMail className="text-white text-lg" />
              <p className="text-white">info@example.com</p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default MapSecondSection;
