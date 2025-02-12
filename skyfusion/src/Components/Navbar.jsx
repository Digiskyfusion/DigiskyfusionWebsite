import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import './../App.css';

import back from './../assets/Images/background.png.png';
import logo from './../assets/Images/logosky.png';
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav 
      className={`text-black p-4 sticky top-0 z-10 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-cover"
      }`} 
      style={!isScrolled ? { backgroundImage: `url(${back})` } : {}}
    >
      <div className="container mx-auto flex justify-between items-center px-5 inter">
        {/* Logo */}
        <a href="#" className="text-2xl font-bold">
          <img className="h-10" src={logo} alt="Logo" />
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex md:space-x-6 inter">
          <li><NavLink to="/" className="hover:text-gray-600">Home</NavLink></li>
          <li><NavLink to="/about" className="hover:text-gray-600">About Us</NavLink></li>
          <li><NavLink to="/services" className="hover:text-gray-600">Services</NavLink></li>
          <li><NavLink to="/portfolio" className="hover:text-gray-600">Portfolio</NavLink></li>
          <li><NavLink to="/blog" className="hover:text-gray-600">Blog</NavLink></li>
          <li><NavLink to="/contact" className="hover:text-gray-600">Contact Us</NavLink></li>
        </ul>

        {/* Login Button */}
        <div className="hidden md:block cursor-pointer">
          <button className="inter py-2 px-5 bg-gradient-to-r from-[#0E546A] to-[#F16D3C] rounded-full text-white cursor-pointer">Login</button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-2xl text-black "
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden fixed top-0 left-0 w-[50%] h-full bg-opacity-50 transition-opacity duration-300 ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`} onClick={() => setIsOpen(false)}>
        <ul className="absolute top-0 left-0 w-3/4 h-full bg-white flex flex-col items-start p-6 space-y-4 shadow-lg inter">
          <li><NavLink to="/" className="block px-4 py-2" onClick={() => setIsOpen(false)}>Home</NavLink></li>
          <li><NavLink to="/about" className="block px-4 py-2" onClick={() => setIsOpen(false)}>About</NavLink></li>
          <li><NavLink to="/services" className="block px-4 py-2" onClick={() => setIsOpen(false)}>Services</NavLink></li>
          <li><NavLink to="/contact" className="block px-4 py-2" onClick={() => setIsOpen(false)}>Contact Us</NavLink></li>
          <li>
            <button className="py-2 px-5 bg-gradient-to-r from-[#0E546A] to-[#F16D3C] rounded-full text-white w-full text-center inter" onClick={() => setIsOpen(false)}>Login</button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
