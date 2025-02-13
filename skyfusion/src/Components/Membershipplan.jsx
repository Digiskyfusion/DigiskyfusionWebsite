import React from "react";
import { motion } from "framer-motion";

function MembershipPlan() {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    hover: { scale: 1.05, transition: { duration: 0.3 } },
  };

  return (
    <div className="flex flex-col items-center p-8 bg-gray-100 ">
      <motion.h1
        className="text-3xl font-bold mb-8 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Explore Our Membership Plans
      </motion.h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
        {/* Standard Plan */}
        <motion.div
          className="bg-white p-6 rounded-2xl shadow-lg text-center border group hover:bg-[#094051] hover:text-white flex flex-col items-center relative transition duration-300"
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
        >
          <motion.button
            className="bg-red-500 text-white px-4 py-1 text-sm font-semibold rounded-3xl absolute top-[-10px] right-3"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 100 }}
          >
            Most Powerful
          </motion.button>
          <h2 className="text-xl font-semibold mb-2">Standard</h2>
          <p className="group-hover:text-white">One active request at a time.</p>
          <h3 className="text-2xl font-bold mt-4">$2,450/month</h3>
          <p className="group-hover:text-white text-sm">* Pause or cancel anytime</p>
          <h4 className="font-semibold mt-4">What's included:</h4>
          <ul className="group-hover:text-white text-start list-disc pl-5">
            <li>Unlimited users</li>
            <li>One request at a time</li>
            <li>Email support</li>
            <li>Basic analytics</li>
          </ul>
          <motion.button
            className="mt-4 py-2 px-5 bg-[#0E546A] text-white rounded-full cursor-pointer transition duration-300 group-hover:bg-white group-hover:text-[#094051]"
            whileHover={{ scale: 1.1 }}
          >
            See more
          </motion.button>
          <button className="mt-3 group-hover:text-white font-semibold border-b-2 border-[#0E546A]">
            Book a call
          </button>
        </motion.div>

        {/* Premium Plan */}
        <motion.div
          className="bg-white p-6 rounded-2xl shadow-lg text-center group hover:bg-[#094051] hover:text-white flex flex-col items-center transition duration-300"
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
        >
          <h2 className="text-xl font-semibold mb-2">Premium</h2>
          <p className="group-hover:text-white">Two active requests at a time.</p>
          <h3 className="text-2xl font-bold mt-4">$4,500/month</h3>
          <p className="group-hover:text-white text-sm">* Pause or cancel anytime</p>
          <h4 className="font-semibold mt-4">What's included:</h4>
          <ul className="group-hover:text-white text-start list-disc pl-5">
            <li>Unlimited users</li>
            <li>Two requests at a time</li>
            <li>Priority email support</li>
            <li>Advanced analytics</li>
          </ul>
          <motion.button
            className="mt-4 py-2 px-5 bg-[#0E546A] text-white rounded-full cursor-pointer transition duration-300 group-hover:bg-white group-hover:text-[#094051]"
            whileHover={{ scale: 1.1 }}
          >
            See more
          </motion.button>
          <button className="mt-3 group-hover:text-white font-semibold border-b-2 border-[#0E546A]">
            Book a call
          </button>
        </motion.div>

        {/* Enterprise Plan */}
        <motion.div
          className="bg-white p-6 rounded-2xl shadow-lg text-center group hover:bg-[#094051] hover:text-white flex flex-col items-center relative transition duration-300"
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
        >
          <h2 className="text-xl font-semibold mb-2">Enterprise</h2>
          <p className="group-hover:text-white">Unlimited active requests.</p>
          <h3 className="text-2xl font-bold mt-4">$10,000/month</h3>
          <p className="group-hover:text-white text-sm">* Pause or cancel anytime</p>
          <h4 className="font-semibold mt-4">What's included:</h4>
          <ul className="group-hover:text-white text-start list-disc pl-5">
            <li>Unlimited users</li>
            <li>Unlimited requests</li>
            <li>Dedicated account manager</li>
            <li>24/7 support</li>
          </ul>
          <motion.button
            className="mt-4 py-2 px-5 bg-[#0E546A] text-white rounded-full cursor-pointer transition duration-300 group-hover:bg-white group-hover:text-[#094051]"
            whileHover={{ scale: 1.1 }}
          >
            See more
          </motion.button>
          <button className="mt-3 group-hover:text-white font-semibold border-b-2 border-[#0E546A]">
            Book a call
          </button>
        </motion.div>
      </div>
    </div>
  );
}

export default MembershipPlan;
