import React,{useEffect} from "react";
import  "aos/dist/aos.css";
import Aos from "aos"
import Contactuspage from "../Pages/Contactuspage";
function ContactUs() {

useEffect(()=>{
    Aos.init({duration:2000})
    Aos.refresh();
  })

  
  const Defaultbehaviour=(e)=>
  {
    e.preventDefault()
  }
  return (
    <div className="mx-auto p-6 bg-white rounded-lg shadow-md" data-aos="zoom-in">
      <h1 className="text-2xl font-bold mb-4  md:mb-10 Roboto-thin">Contact Us</h1>

      <form className="space-y-5" onClick={Defaultbehaviour}>
        <div className="md:flex md:justify-between md:gap-5 Roboto-thin">
          <div className="md:w-[50%]">
            <label htmlFor="fullname" className="block font-medium">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="fullname"
              name="Fullname"
              // placeholder="Enter your name"
              className=" w-full md:w-[90%] p-2 border  text-black rounded-lg outline-none"
              required
            />
          </div>

          <div className="md:w-[50%] mt-3 md:mt-0">
            <label htmlFor="email" className="block font-medium">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="Email"
              // placeholder="Enter your email"
              className=" w-full md:w-[90%] p-2 border rounded-lg  text-black outline-none"
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
            // placeholder="Enter your message"
            className=" w-full md:w-[95%] p-2 border rounded-lg  text-black outline-none resize-none"
            rows="4"
            
          ></textarea>
        </div>

        <button
          type="submit"
          className=" poppin poppins-thin py-2 px-6  md:px-8 bg-gradient-to-r from-[#0E546A] to-[#F16D3C] rounded-full text-white md:text-lg font-semibold transition duration-300 hover:opacity-90 cursor-pointer"
          >
          Send to
        </button>
      </form>
    </div>
  );
}


export default ContactUs;

