import React,{useEffect} from 'react';
import { motion } from 'framer-motion';
import footerlogo from './../assets/Images/logosky.png';
import { Link } from "react-router-dom";
// Icons
import { CiInstagram, CiFacebook } from "react-icons/ci";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <motion.footer 
      className="bg-[#242424] text-white py-10 px-6 md:px-16 poppins-thin"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: false, amount: 0.2 }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* {/ First Section - Logo & Social Links /} */}
        <div className="flex flex-col items-start">
          <img src={footerlogo} alt="Logo" className="w-40 h-auto mb-4" />
          <p className="text-sm md:text-lg max-w-2xl">
            Digital marketing (sometimes called online marketing) is an area of marketing that uses digital channels to connect with customers.
          </p>
          <div className="flex gap-4 mt-4 text-2xl">
            <a href="https://www.instagram.com/digiskyfusion?igsh=d242aTBrNGQzZDR6" target='_blank' className="hover:text-orange-400"><CiInstagram /></a>
            <a href="https://www.facebook.com/share/15AWmqvS2x/" target='_blank' className="hover:text-blue-500"><CiFacebook /></a>
            <a href="https://www.linkedin.com/in/digisky-fusion-01a6002b9?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target='_blank' className="hover:text-blue-600"><FaLinkedinIn /></a>
            <a href="https://x.com/digiskyfusion?t=tLHE_G31tsLiB6QpX_XA8Q&s=09" target='_blank' className="hover:text-blue-400"><FaTwitter /></a>
          </div>
        </div>

        {/* {/ Second Section - Quick Links /} */}
        <div className="flex flex-col items-start md:items-center md:justify-start">
          <h1 className="text-lg font-semibold mb-3 mr-10">Menu</h1>
          <ul className="space-y-2 text-sm text-start">
            <li><Link to="/" className="hover:text-orange-400 md:text-lg">Home</Link></li>
            <li><Link to="/about" className="hover:text-orange-400 md:text-lg">About Us</Link></li>
            <li><Link to="/services" className="hover:text-orange-400 md:text-lg">Services</Link></li>
            <li><Link to="/portfolio" className="hover:text-orange-400 md:text-lg">Portfolio</Link></li>
            <li><Link to="/ContactUs" className="hover:text-orange-400 md:text-lg">Contact Us</Link></li>
          </ul>
        </div>

        {/* {/ Third Section - Contact /} */}
        <div className="flex flex-col items-start">
          <h3 className="text-lg font-semibold mb-3 md:text-lg">Contact Us</h3>
          <div className=" text-sm md:text-lg">
              <p>Email: <a href="#" className="text-gray-400 hover:text-orange-400">digiskyfusion@gmail.com</a></p>
              <p>Phone: <a href="#" className="text-gray-400 hover:text-orange-400">+91 80879 16794</a></p>
            </div>
          <label htmlFor="email" className="block text-sm md:text-lg mt-2">
            Enter Your Email <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="Enter Message"
            className="bg-white text-sm py-2 text-black rounded-md mb-3 px-4 mt-2 w-full max-w-[250px] outline-none"
          />
          <button className="cursor-pointer  bg-gradient-to-r from-[#0E546A] to-[#F16D3C] mt-1 md:px-10 px-5 py-1 rounded-full text-sm font-semibold md:text-lg">
            Send
          </button>
         
        </div>


      </div>
      <div className='flex justify-center mt-2 md:mt-0'>
        <hr className='mt-2 md:mt-20 w-full md:w-[91%] text-white border-2' />
      </div>
      {/* {/ Bottom Footer /} */}
      <div className="text-center md:flex md:justify-between mt-5 text-sm md:px-16">
        <h1 className="font-bold">COPYRIGHT</h1>
        <p>© 2025 High Street Delta 9 Spirits. All Rights Reserved. Site by FDM.</p>
      </div>
    </motion.footer>
  );
}

export default Footer;
