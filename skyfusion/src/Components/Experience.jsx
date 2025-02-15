import React from "react";
import { motion } from "framer-motion";
import arrow from "./../assets/Images/arrow.png";
import maleprofile from "./../assets/Images/malepic.png";
import Ellipse1 from "./../assets/Images/Ellipse1.png";
import Ellipse2 from "./../assets/Images/Ellipse2.png";
import circle from "./../assets/Images/circle.png";

const cards = [
  {
    id: 1,
    title: "Stand Out",
    description:
      "Don't just fit in—shine bright! We help your brand grab attention and be different from the rest. With creative ideas, bold designs, and smart strategies, we make sure you leave a lasting impression.",
    name: "Allan Collins",
    position: "Managing Director",
    bgColor: "bg-white text-[#0E546A]",
    image: maleprofile,
  },
  {
    id: 2,
    title: " Connect",
    description:
      "Make your audience feel something. We create stories and designs that build trust and strong bonds. Whether it’s through powerful words, engaging visuals, or interactive experiences, we help you form real connections that matter.",
    name: "Sophia Miller",
    position: "Marketing Head",
    bgColor: "bg-white text-[#0E546A]",
    image: Ellipse1,
  },
  {
    id: 3,
    title: " Grow",
    description:
      "Take your brand to the next level. With smart ideas and the right moves, we help you reach new heights. From expert strategies to result-driven actions, we ensure steady growth, stronger engagement, and long-term success.",
    name: "Michael Smith",
    position: "Operations Lead",
    bgColor: "bg-white text-[#0E546A]",
    image: Ellipse2,
  },
];

function Experience() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 sm:px-6 md:px-12 lg:px-24 py-12">
      {cards.map((card, index) => (
        <motion.div
          key={card.id}
          className={`rounded-md border-2 border-gray-400 relative p-6 ${card.bgColor} 
            transition-all duration-300 hover:bg-[#0E546A] hover:text-white hover:shadow-2xl shadow-blue-300`}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
          viewport={{ once: false, amount: 0.2 }} // Re-triggers when scrolling up and down
        >
          <div className="relative flex justify-center">
            <img
              src={circle}
              alt="circle"
              className="relative right-[2.9rem] bottom-[1.6rem] sm:right-[2.4rem] sm:bottom-[1.6rem] md:right-[4rem] md:bottom-[1.6rem] lg:right-[7.1rem] lg:bottom-[1.6rem]"
            />
            <img
              src={arrow}
              alt="arrow"
              className="absolute left-[0.5rem] sm:left-[1rem] top-6"
            />
          </div>
          <div className="text-center px-4 sm:px-6">
            <h1 className="font-bold text-lg">{card.title}</h1>
            <p className="mt-2">{card.description}</p>
          </div>
          <div className="flex justify-center items-center relative mt-5">
            <div className="h-32 w-32 sm:h-36 sm:w-36 md:h-40 md:w-40 rounded-full bg-gradient-to-t from-[#0E546A] to-[#F16D3C]"></div>
            <img src={card.image} alt="profile" className="absolute w-28 sm:w-32 md:w-36" />
          </div>
          <div className="text-center mt-4">
            <h1 className="font-semibold text-lg">{card.name}</h1>
            <p className="opacity-80">{card.position}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export default Experience;
