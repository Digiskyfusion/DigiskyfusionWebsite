import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

function ContactUs() {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

  const Defaultbehaviour = (e) => {
    e.preventDefault();
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, staggerChildren: 0.2 } },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
      className="mx-auto p-6 bg-white rounded-lg shadow-md"
    >
      {/* Title Animation */}
      <motion.h1 
        className="text-2xl font-bold mb-4 md:mb-10"
        variants={containerVariants}
      >
        Contact Us
      </motion.h1>

      <form className="space-y-5" onSubmit={Defaultbehaviour}>
        {/* Name & Email Fields */}
        <motion.div
          variants={containerVariants}
          className="md:flex md:justify-between md:gap-5"
        >
          <motion.div className="md:w-[50%]" variants={containerVariants}>
            <label htmlFor="fullname" className="block font-medium">
              Full Name <span className="text-red-500">*</span>
            </label>
            <motion.input
              type="text"
              id="fullname"
              name="Fullname"
              className="w-full md:w-[90%] p-2 border text-black rounded-lg outline-none"
              required
              variants={containerVariants}
            />
          </motion.div>

          <motion.div className="md:w-[50%] mt-3 md:mt-0" variants={containerVariants}>
            <label htmlFor="email" className="block font-medium">
              Email <span className="text-red-500">*</span>
            </label>
            <motion.input
              type="email"
              id="email"
              name="Email"
              className="w-full md:w-[90%] p-2 border rounded-lg text-black outline-none"
              required
              variants={containerVariants}
            />
          </motion.div>
        </motion.div>

        {/* Message Field */}
        <motion.div variants={containerVariants}>
          <label htmlFor="message" className="block font-medium">
            Message
          </label>
          <motion.textarea
            id="message"
            name="message"
            className="w-full md:w-[95%] p-2 border rounded-lg text-black outline-none resize-none"
            rows="4"
            variants={containerVariants}
          ></motion.textarea>
        </motion.div>

        {/* Submit Button Animation */}
        <motion.button
          type="submit"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="py-2 px-6 md:px-8 bg-gradient-to-r from-[#0E546A] to-[#F16D3C] rounded-full text-white md:text-lg font-semibold transition duration-300 hover:opacity-90 cursor-pointer"
          variants={containerVariants}
        >
          Send Message
        </motion.button>
      </form>
    </motion.div>
  );
}

export default ContactUs;
