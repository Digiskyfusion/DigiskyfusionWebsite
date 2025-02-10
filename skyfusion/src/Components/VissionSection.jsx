import React from "react";
import { Lightbulb, BookOpen } from "lucide-react";

function VisionSection() {
  return (
    <div className="p-2 md:p-4 md:flex md:justify-between gap-6 md:items-center bg-gray-300 ">
      <div className="bg-white rounded-lg shadow-lg p-6 flex-1 transform hover:scale-105 transition duration-300">
        <div className="flex items-center gap-2 text-blue-600">
          <Lightbulb size={24} />
          <h2 className="text-xl font-semibold">Our Vision</h2>
        </div>
        <h3 className="text-2xl font-bold text-gray-800 mt-2">
          Empowering Lives Through Education
        </h3>
        <p className="text-gray-600 mt-3 leading-relaxed">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer 
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6 flex-1 mt-6 md:mt-0 transform hover:scale-105 transition duration-300">
        <div className="flex items-center gap-2 text-blue-600">
          <BookOpen size={24} />
          <h2 className="text-xl font-semibold">Our Mission</h2>
        </div>
        <h3 className="text-2xl font-bold text-gray-800 mt-2">
          Shaping the Future with Knowledge
        </h3>
        <p className="text-gray-600 mt-3 leading-relaxed">
          It has survived not only five centuries, but also the leap into
          electronic typesetting, remaining essentially unchanged. It was
          popularized in the 1960s with the release of Letraset sheets.
        </p>
      </div>
    </div>
  );
}

export default VisionSection;
