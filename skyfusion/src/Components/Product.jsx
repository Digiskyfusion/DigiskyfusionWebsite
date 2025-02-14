import React from "react";
import { motion } from "framer-motion";
import Productimg1 from "./../assets/Images/Productimg1.png";
import icon from "./../assets/Images/icon.png";
import ReverseCrousel from "./ReverseCrousel";
import background from './../assets/Images/background.png.png';
import Content from './../assets/Images/Content.png';
import Add from './../assets/Images/Add.png';

const products = [
  { id: 1, title: "Social Media Marketing", img: Productimg1 },
  { id: 2, title: "SEO Optimization", img: Content },
  { id: 3, title: "Content Marketing", img: Productimg1 },
  { id: 4, title: "Email Marketing", img: Add },
  { id: 5, title: "Affiliate Marketing", img: Productimg1 },
];

function Product() {
  return (
    <motion.div
      className="p-5 overflow-hidden w-full bg-cover bg-center"
      style={{ backgroundImage: `url(${background})` }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: false }}
    >
      {/* Title Section */}
      <motion.div 
        className="mb-5 poppins-thin"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false, amount: 0.2 }}
      >
        <h1 className="text-4xl font-bold">Our Product Service</h1>
        <p className="md:w-96 mt-3 mb-10">
          Grow your business with our comprehensive digital marketing.
        </p>
      </motion.div>

      {/* Moving Carousel */}
      <motion.div
        className="flex space-x-8 mb-20"
        initial={{ x: "0%" }}
        animate={{ x: "-100%" }}
        transition={{
          repeat: Infinity,
          duration: 15,
          ease: "linear",
        }}
      >
        {products.concat(products).map((product, index) => (
          <motion.div
            key={index}
            className="flex-shrink-0 flex items-center gap-2"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: false, amount: 0.2 }}
          >
            {/* Product Image */}
            <img src={product.img} alt="product" className="w-24 h-24 md:w-52 md:h-52" />

            {/* Icon Image */}
            <img src={icon} alt="icon" className="h-6 w-6 md:w-10 md:h-10" />

            {/* Product Title */}
            <h1 className="text-lg poppins-thin">{product.title}</h1>
          </motion.div>
        ))}
      </motion.div>

      {/* Reverse Carousel */}
      <ReverseCrousel />

      {/* "See More" Button */}
      <motion.div
        className="flex justify-center items-center mt-6 mb-6"
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: false }}
      >
        <button className="bg-gradient-to-r from-[#F16D3C] to-[#0E546A] px-5 py-2 text-white rounded-full cursor-pointer">
          See More
        </button>
      </motion.div>
    </motion.div>
  );
}

export default Product;
