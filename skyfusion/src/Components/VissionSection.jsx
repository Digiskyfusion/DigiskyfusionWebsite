import React from "react";
import { motion } from "framer-motion";
import { Lightbulb, BookOpen } from "lucide-react";

function VisionSection() {
  return (
    <div className="p-2 md:p-4 md:flex md:justify-between gap-6 md:items-center bg-gray-300">
      
      {/* Vision Section */}
      <motion.div
        className="bg-white rounded-lg shadow-lg p-6 flex-1 transform hover:scale-105 transition duration-300"
        initial={{ opacity: 0, y: 50 }} // Starts from below
        whileInView={{ opacity: 1, y: 0 }} // Moves up into view
        viewport={{ once: false, amount: 0.3 }} // Triggers when 30% visible
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="flex items-center gap-2 text-blue-600">
          <Lightbulb size={24} />
          <h2 className="text-xl font-semibold">Our Vision</h2>
        </div>
        <h3 className="text-2xl font-bold text-gray-800 mt-2">
        Turning Clicks into Conversions, Ideas into Impact
        </h3>
        <p className="text-gray-600 mt-3 leading-relaxed">
        We don’t just market brands—we build digital legacies. Our vision is to create strategies that don’t just exist but dominate.
        </p>
      </motion.div>

      {/* Mission Section */}
      <motion.div
        className="bg-white rounded-lg shadow-lg p-6 flex-1 mt-6 md:mt-0 transform hover:scale-105 transition duration-300"
        initial={{ opacity: 0, y: -50 }} // Starts from above
        whileInView={{ opacity: 1, y: 0 }} // Moves down into view
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }} // Delayed slightly for a staggered effect
      >
        <div className="flex items-center gap-2 text-blue-600">
          <BookOpen size={24} />
          <h2 className="text-xl font-semibold">Our Mission</h2>
        </div>
        <h3 className="text-2xl font-bold text-gray-800 mt-2">
        Innovate. Elevate. Dominate.

        </h3>
        <p className="text-gray-600 mt-3 leading-relaxed">
        The digital world moves fast, and so do we. With a mix of creativity, strategy, and tech, we craft campaigns that turn brands into powerhouses.

        </p>
      </motion.div>
    </div>
  );
}

export default VisionSection;
