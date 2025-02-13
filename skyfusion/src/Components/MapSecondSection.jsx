import React from 'react';
import { CiLocationOn } from "react-icons/ci";

function MapSecondSection() {
  return (
    <div className="bg-[#0E546A] py-6 flex justify-center items-center w-full">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-white text-2xl font-semibold mb-6">Book Appointment</h1>

        <div>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8">
            <div className="flex items-center space-x-2">
              <CiLocationOn className="text-white" />
              <p className="text-white">F-268 Mohali 8B</p>
            </div>

            <div className="flex items-center space-x-2">
              <CiLocationOn className="text-white" />
              <p className="text-white">F-268 Mohali 8B</p>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 mt-6">
            <div className="flex items-center space-x-2">
              <CiLocationOn className="text-white" />
              <p className="text-white">F-268 Mohali 8B</p>
            </div>

            <div className="flex items-center space-x-2">
              <CiLocationOn className="text-white" />
              <p className="text-white">F-268 Mohali 8B</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MapSecondSection;
