import React,{ useEffect } from 'react'
// import logo from "../assets/Images/backgroundImage.png"
import logo from './../assets/Images/background.png.png';
import Navbar from './Navbar';
import ellips from './../assets/Images/Elips.png';
import frontLogo from './../assets/Images/femaleLogo.png';
import sound from './../assets/Images/sound.jpg';
import circle from './../assets/Images/haflcircle.png';
import  "aos/dist/aos.css";
import Aos from "aos"
// import "../App.css"


function Home() {
  useEffect(()=>{
      Aos.init({duration:2000})
      Aos.refresh();
    })
  return (
   


<div className='sticky z-0' >
<section
  className='relative bg-cover bg-center z-0 px-5 md:px-10 flex items-center md:pt-20'
  style={{ backgroundImage: `url(${logo})` }}
>
  <div className='container flex flex-col md:flex-row justify-between items-center' data-aos="zoom-in">
    {/* Content */}
    <div className='relative text-center md:text-start md:w-[60%] space-y-5 md:px-10 flex flex-col items-center md:items-start pt-6'>
      {/* <img src={circle} className='absolute left-[-30px]  transform -translate-y-1/2 top-7 h-10 w-10 md:block md:w-20 md:h-36' alt='Circle' /> */}
      {/* <img src={circle} className='absolute left-[-30px] transform -translate-y-1/2 top-7 h-10 w-10 md:block md:w-20 md:h-36 animate-spin' alt='Circle' /> */}
      <img 
  src={circle} 
  className="absolute left-[-30px] transform -translate-y-1/2 top-7 h-10 w-10 md:block md:w-20 md:h-36 " 
  alt="Circle" 
/>


      <h1 className='text-3xl md:text-6xl  font-poppins leading-tight Roboto-thin'>
        Elevate Your Brand with UI/UX Designer & Digital Marketing
      </h1>
      <p className='text-lg md:text-2xl poppins-thin'>
        Digital marketing (sometimes called online marketing) is an area of marketing that uses digital channels to connect with customers.
      </p>
      <div className="hidden md:block cursor-pointer">
        <button className="py-2 px-5 bg-gradient-to-r from-[#0E546A] to-[#F16D3C] rounded-full text-white cursor-pointer poppins-thin">
          Get Started
        </button>
      </div>
    </div>

    {/* Image Section */}
    <div className='relative mt-10 md:mt-0 flex justify-center'>
            <div className='relative w-full max-w-sm md:max-w-md'>
              <div className='relative p-3 flex justify-center items-center'>
                <img src={ellips} className='w-full h-auto' alt='Background' />
                <img src={ellips} className='absolute w-3/4 h-auto top-1/2 transform -translate-y-1/2' alt='Ellips Under' />
              </div>
              <img src={sound} className='absolute top-8 left-5 w-16 h-16 rounded-full shadow-lg' alt='Sound' />
              <img src={frontLogo} className='absolute inset-0 w-full  pt-15 z-10' alt='Female Logo' />
            </div>
          </div>
  </div>
</section>
</div>
  )
}

export default Home
