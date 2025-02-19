import React from 'react';
import { motion } from 'framer-motion';

function Portfolio() {
  return (
    <motion.div 
      className="container mx-auto p-6"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: false, amount: 0.2 }}
    >
      {/* Title */}
      <motion.h1 
        className="text-5xl font-extrabold mt-3 text-center Roboto-thin"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false, amount: 0.2 }}
      >
        Portfolio
      </motion.h1>

      {/* Description */}
      <motion.p 
        className="text-xl font-light md:w-3/5 mt-3 text-center mx-auto  leading-relaxed poppins-thin"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: false, amount: 0.2 }}
      >
        Explore our success stories and discover how we’ve helped businesses achieve their digital goals.
      </motion.p>

      {/* Portfolio Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
        <div>
          <PortfolioItem title="Digital Strategies" progress={94} />
          <PortfolioItem title="SEO Dominance" progress={98} />
          <PortfolioItem title="Social Buzz" progress={95} />
        </div>
        <div>
          <PortfolioItem title="Content Impact" progress={93} />
          <PortfolioItem title="Email Wins" progress={97} />
        </div>
      </div>
    </motion.div>
  );
}

function PortfolioItem({ title, progress }) {
  return (
    <motion.div 
      className="mb-6"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: progress * 0.002 }}
      viewport={{ once: false, amount: 0.2 }}
    >
      <h2 className="text-lg font-semibold mb-2 roboto-thin">{title}</h2>

      {/* Progress Bar */}
      <div className="bg-gray-300 rounded-2xl h-1 md:h-3 w-full">
        <motion.div
          className="bg-gradient-to-r from-[#0E546A] to-[#F16D3C] rounded-2xl h-1 md:h-3"
          initial={{ width: "0%" }}
          whileInView={{ width: `${progress}%` }}
          transition={{ duration: 1 }}
          viewport={{ once: false }}
        />
      </div>
    </motion.div>
  );
}

export default Portfolio;
