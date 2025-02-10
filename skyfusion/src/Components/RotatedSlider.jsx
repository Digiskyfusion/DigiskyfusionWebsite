import React from "react";
import digi from './../assets/Images/Aboutus1.png';


export default function RotatedSlider() {
  return (
    <div className="flex items-center justify-center mt-5">
      <div className="group w-full h-80 relative rounded-xl overflow-hidden">
        {/* {/ Front Side /} */}
        <div className="absolute inset-0 flex items-center justify-center bg-blue-500 text-white text-xl font-bold transition-all duration-500 group-hover:opacity-0">
          <img 
            src={digi} 
            alt="Front Image"
            className="object-fit w-full h-full"
          />
        </div>
        {/* {/ Back Side with Background Image and Text /} */}
        <div 
          className="absolute inset-0 flex flex-col items-center justify-center text-black text-xl poppin rounded-xl bg-cover bg-center transition-all duration-500 opacity-0 group-hover:opacity-70 group-hover:bg-contain"
          style={{ backgroundImage: `url(${digi})` }}
        >
          <div className="relative z-10 p-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-10 transition-all duration-500 flex items-center justify-center">
            <p className="text-lg text-center px-4 ">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five 
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
