import React,{useEffect} from 'react';
import footerlogo from './../assets/Images/logosky.png';
import  "aos/dist/aos.css";
import Aos from "aos"

// Icons
import { CiInstagram, CiFacebook } from "react-icons/ci";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";


function Footer() {
  useEffect(()=>{
        Aos.init({duration:2000})
        Aos.refresh();
      })
  return (
    <footer className="bg-[#242424] text-white py-10 px-6 md:px-16 poppins-thin">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left" data-aos="zoom-in">
        
        {/* {/ First Section - Logo & Social Links /} */}
        <div className="flex flex-col items-start">
          <img src={footerlogo} alt="Logo" className="w-40 h-auto mb-4" />
          <p className="text-sm max-w-xs ">
            Digital marketing (sometimes called online marketing) is an area of marketing that uses digital channels to connect with customers.
          </p>
          <div className="flex gap-4 mt-4 text-2xl">
            <a href="#" className="hover:text-orange-400"><CiInstagram /></a>
            <a href="#" className="hover:text-blue-500"><CiFacebook /></a>
            <a href="#" className="hover:text-blue-600"><FaLinkedinIn /></a>
            <a href="#" className="hover:text-blue-400"><FaTwitter /></a>
          </div>
        </div>

            {/* {/ Second Section - Quick Links /} */}
      <div className="flex flex-col items-start md:items-center md:justify-start">
        <h1 className="text-lg font-semibold mb-3 mr-5">Menu</h1>
        <ul className="space-y-2 text-sm text-start">
          <li><a href="#" className="hover:text-orange-400">About Us</a></li>
          <li><a href="#" className="hover:text-orange-400">Services</a></li>
          <li><a href="#" className="hover:text-orange-400">Portfolio</a></li>
          <li><a href="#" className="hover:text-orange-400">Blog</a></li>
          <li><a href="#" className="hover:text-orange-400">Contact Us</a></li>
        </ul>
      </div>


        {/* {/ Third Section - Contact /} */}
        <div className="flex flex-col items-start">
          <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
          <label htmlFor="email" className="block text-sm">
            Enter Your Email <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="Enter Message"
            className="bg-white text-black rounded-md py-2 px-4 mt-2 w-full max-w-[250px] outline-none"
          />
          <button className="cursor-pointer bg-gradient-to-r hidden md:block from-[#0E546A] to-[#F16D3C] mt-3 md:px-8 md:py-2 rounded-full text-sm font-semibold">
            Send
          </button>
          <button className="cursor-pointer bg-gradient-to-r block md:hidden from-[#8E24AA] to-[#FF69B4] mt-3 px-8  py-2 rounded-full text-sm font-semibold">
            Send
          </button>
        </div>
      </div>
      <div className='flex justify-center mt-2 md:mt-0  '>
      <hr className='mt-2 md:mt-4 w-full md:w-[91%] text-white border-2 '/>
      </div>
      
      {/* {/ Bottom Footer /} */}
      <div className="text-center md:flex md:justify-between mt-2 text-sm md:px-16  ">
        <h1 className="font-bold">COPYRIGHT</h1>
        <p>© 2025 High Street Delta 9 Spirits. All Rights Reserved. Site by FDM.</p>
      </div>
    </footer>
  );
}

export default Footer;