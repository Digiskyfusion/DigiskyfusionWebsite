import React, { useState } from "react";
import { motion } from "framer-motion";
import Productimg1 from "./../assets/Images/Productimg1.png";
import icon from "./../assets/Images/icon.png";
import imageone from './../assets/Images/imageone.png';
import imagethree from './../assets/Images/imagethree.png';
import imagetwo from './../assets/Images/imagetwo.png';
import add from './../assets/Images/Add.png';
import imagefive from './../assets/Images/imagefive.png';
import imagefour from './../assets/Images/imagefour.png';
import imagesix from './../assets/Images/imagesix.png';
import imageseven from './../assets/Images/imageseven.png';
import imageeight from './../assets/Images/imageeight.png';







function ReverseCarousel() {
  const [reverse, setReverse] = useState(false);

  const products = [
    { id: 1, title: "Website development", img: imagefour },
    { id: 2, title: "Graphics & video editing ", img: imagefive},
    { id: 3, title: "Branding", img: imagesix },
    { id: 4, title: " Search Surge ", img: imageseven },
    { id: 5, title: "BrandCraft", img: imageeight },
  ];

  return (
    <>
    <div
      className="p-5 overflow-hidden w-full relative mb-3"
      onMouseEnter={() => setReverse(true)}
      onMouseLeave={() => setReverse(false)}
    >
      <motion.div
        className="flex space-x-8"
        initial={{ x: "-100%" }}
        animate={{ x: "0%" }}
        transition={{
          repeat: Infinity,
          duration: 15,
          ease: "linear",
          repeatType: "loop",
          direction: reverse ? "reverse" : "normal",
        }}
      >
        {products.concat(products).map((product, index) => (
          <div key={index} className="flex-shrink-0 flex items-center gap-2">
            {/* Product Image */}
            <img src={product.img} alt="product" className=" h-24 w-24 md:w-52 md:h-52" />

            {/* Icon Image */}
            <img src={icon} alt="icon" className=" h-6 w-6 md:w-10 md:h-10" />

            {/* Product Title */}
            <h1 className="text-lg poppins-thin">{product.title}</h1>
          </div>
        ))}
      </motion.div>
    </div>

    
    </>
  );
}

export default ReverseCarousel;
