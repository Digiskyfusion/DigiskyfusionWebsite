import React from "react";
import { motion } from "framer-motion";
import cartpic from "./../assets/Images/cardpic.png";
import image1 from "./../assets/Images/Image1.jpg";
import Image2 from "./../assets/Images/Image2.jpg";
import Image3 from "./../assets/Images/Image3.jpg";
import Image4 from "./../assets/Images/Image4.jpg";
import Image5 from "./../assets/Images/Image5.jpg";

function Chooseus() {
  const features = [
    {
      id: "01",
      title: "Proven Expertise",
      desc: "Our squad of certified marketing ninjas crafts battle-tested strategies to put your brand ahead of the game.",
      img: cartpic,
    },
    {
      id: "02",
      title: "Customized Solutions",
      desc: "One-size-fits-all? Not here! We tailor strategies that align perfectly with your goals & industry trends.",
      img: image1,
    },
    {
      id: "03",
      title: "Data-Driven Power",
      desc: "We let numbers do the talking—analyzing insights to fine-tune campaigns for maximum impact.",
      img: Image2,
    },
    {
      id: "04",
      title: "All-in-One Digital Arsenal",
      desc: "From SEO domination to high-converting ads, we handle everything under one roof.",
      img: Image3,
    },
    {
      id: "05",
      title: "Transparent Communication",
      desc: "No smoke and mirrors—just clear, open, and honest reporting so you're always in the loop.",
      img: Image4,
    },
    {
      id: "06",
      title: "Continuous Growth Optimization",
      desc: "We don’t stop at success; we scale it! Our strategies evolve to keep you winning.",
      img: Image5,
    },
  ];

  return (
    <div className="p-6  ">
      {/* Title Animation */}
      <motion.h1
        className="text-5xl font-extrabold mt-3 text-center "
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Why Choose Us
      </motion.h1>

      <motion.p
        className="text-xl font-light md:w-3/5 mt-3 text-center mx-auto  leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        We don’t just market your brand; we engineer its success. Here’s why businesses trust us to supercharge their digital presence:
      </motion.p>

      <div className="mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((item, index) => (
            <motion.div
              key={index}
              className="rounded-lg p-6 shadow-lg bg-gradient-to-t from-[#F16D3C] to-[#0E546A] transition-transform transform hover:scale-105 hover:shadow-xl relative overflow-hidden group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: false, amount: 0.2 }} // Ensures animation triggers on scroll
            >
              {item.img && (
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform scale-105 group-hover:scale-100"
                  style={{ backgroundImage: `url(${item.img})` }}
                />
              )}

              <div className="relative z-10">
                <h3 className="text-3xl font-bold text-white text-end">{item.id}</h3>
                <h4 className="text-xl font-semibold mt-2 text-white">{item.title}</h4>
                <p className="text-white mt-2">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Chooseus;
