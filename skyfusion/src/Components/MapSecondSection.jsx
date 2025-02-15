import React from "react";
import { motion } from "framer-motion";
import { CiLocationOn } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

const contactDetails = [
  {
    icon: <CiLocationOn className="text-white text-xl" aria-label="Location" />,
    text: "Phase 8B, Industrial Area, Sector 74, Sahibzada Ajit Singh Nagar, Chandigarh, Punjab 160055",
    href: "https://maps.google.com/?q=Phase+8B,+Industrial+Area,+Sector+74,+Chandigarh"
  },
  {
    icon: <FaPhoneAlt className="text-white text-sm" aria-label="Phone" />,
    text: "+91 8087916794",
    href: "tel:+918087916794"
  },
  {
    icon: <IoIosMail className="text-white text-lg" aria-label="Email" />,
    text: "digiskyfusion@gmail.com",
    href: "mailto:digiskyfusion@gmail.com"
  }
];

const ContactItem = ({ icon, text, href }) => (
  <div className="flex items-center space-x-2">
    {icon}
    <a className="text-white hover:underline" href={href} target="_blank" rel="noopener noreferrer">
      {text}
    </a>
  </div>
);

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
            {contactDetails.map((item, index) => (
              <ContactItem key={index} {...item} />
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default MapSecondSection;
