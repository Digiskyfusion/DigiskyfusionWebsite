import React from "react";

function ContactUs() {
  return (
    <div className=" mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4 text-center">Contact Us</h1>

      <form className="space-y-4">
      <div className="md:flex md:justify-between md:gap-5">

   
        <div  className="md:w-[50%]">
          <label htmlFor="fullname" className="block font-medium">
            Full Name
          </label>
          <input
            type="text"
            id="fullname"
            name="Fullname"
            placeholder="Enter your name"
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="md:w-[50%]">
          <label htmlFor="email" className="block font-medium">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="Email"
            placeholder="Enter your email"
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        </div>


        <div>
          <label htmlFor="message" className="block font-medium">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Enter your message"
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="4"
            required
          ></textarea>
        </div>
        
        <button
          type="submit"
          className=" py-2 px-2 md:px-5 bg-gradient-to-r from-[#0E546A] to-[#F16D3C] rounded-full text-white md:text-lg font-semibold transition duration-300 hover:opacity-90"
        >
          Send Message
        </button>
        

       
      </form>
    </div>
  );
}

export default ContactUs;
