import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
// import logo from "../assets/Images/logo.png"
import './../App.css';
import logo from './../assets/logo.png';
import back from './../assets/Images/background.png.png';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="text-black p-4  sticky top-0 z-10 bg-cover" style={{ backgroundImage: `url(${back})` }}>
    <div className="container mx-auto flex justify-between items-center px-5">
      {/* Logo */}
      <a href="#" className="text-2xl font-bold">
        <img className="h-16" src={logo} alt="Logo" />
      </a>

      {/* Desktop Menu */}
      <ul className="hidden md:flex md:space-x-6">
        <li><a href="#" className="hover:text-gray-600">About Us</a></li>
        <li><a href="#" className="hover:text-gray-600">Started</a></li>
        <li><a href="#" className="hover:text-gray-600">Portfolio</a></li>
        <li><a href="#" className="hover:text-gray-600">Blog</a></li>
        <li><a href="#" className="hover:text-gray-600">Contact Us</a></li>
      </ul>

      {/* Login Button */}
      <div className="hidden md:block cursor-pointer">
        <button className="py-2 px-5 bg-gradient-to-r from-[#0E546A] to-[#F16D3C] rounded-full text-white cursor-pointer">Login</button>
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden text-2xl text-black"
      >
        {isOpen ? <FiX /> : <FiMenu />}
      </button>
    </div>

    {/* Mobile Menu */}
    <div className={`md:hidden fixed top-0 left-0 w-full h-full  bg-opacity-50 transition-opacity duration-300 ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`} onClick={() => setIsOpen(false)}>
      <ul className="absolute top-0 left-0 w-3/4 h-full bg-white  flex flex-col items-start p-6 space-y-4 shadow-lg">
        <li><a href="#" className="block px-4 py-2" onClick={() => setIsOpen(false)}>Home</a></li>
        <li><a href="#" className="block px-4 py-2" onClick={() => setIsOpen(false)}>About</a></li>
        <li><a href="#" className="block px-4 py-2" onClick={() => setIsOpen(false)}>Services</a></li>
        <li><a href="#" className="block px-4 py-2" onClick={() => setIsOpen(false)}>Contact</a></li>
        <li>
          <button className="py-2 px-5 bg-gradient-to-r from-[#0E546A] to-[#F16D3C] rounded-full text-white w-full text-center" onClick={() => setIsOpen(false)}>Login</button>
        </li>
      </ul>
    </div>
  </nav>
  );
};

export default Navbar;