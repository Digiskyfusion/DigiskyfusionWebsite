import logo from './../assets/Images/background.png';
import ellips from './../assets/Images/Elips.png';
import circle from './../assets/Images/Circle1.png';
import firstlike from './../assets/Images/firstlike.png';
import second from './../assets/Images/second.png';
import third from './../assets/Images/third.png';
import fourth from './../assets/Images/fourth.png';
import fifth from './../assets/Images/fifth.png';
import femalelogo1 from './../assets/Images/femalelogo1.png';
// import WholeCircle from './WholeCircle';



function Homepage() {
  return (
    <>
    <div className='relative z-0'>
      <section
        className='relative bg-cover bg-center px-5 md:px-10 flex items-center md:pt-20'
        style={{ backgroundImage: `url(${logo})` }}
      >
        <div className='container flex flex-col md:flex-row justify-between items-center'>
          {/* {/ Content Section /} */}
          <div className='relative text-center md:text-start md:w-[60%] space-y-5 md:px-10 flex flex-col items-center md:items-start pt-6'>
            <img
              src={circle}
              className='absolute left-[-30px] top-7 h-10 w-10 md:w-28 md:h-36 md:left-[-70px] rotate-y-360'
              alt='Rotating Circle'
            />
            <h1 className='text-3xl md:text-6xl font-poppins leading-tight'>
              Elevate Your Brand with UI/UX Designer & Digital Marketing
            </h1>
            <p className='text-lg md:text-2xl'>
              Digital marketing (sometimes called online marketing) is an area of marketing that uses digital channels to connect with customers.
            </p>
            <div className='hidden md:flex cursor-pointer'>
              <button className='py-2 px-5 bg-gradient-to-r from-[#0E546A] to-[#F16D3C] rounded-full text-white'>
                Get Started
              </button>
            </div>
          </div>

          {/* {/ Image Section /} */}
          <div className='relative mt-10 md:mt-0 flex justify-center mb-20'>
            <div className='relative w-full max-w-sm md:max-w-md'>
              <div className='relative p-3 flex justify-center items-center'>
                <img src={ellips} className='w-full h-auto' alt='Background Ellipse' />
                <img src={ellips} className='absolute w-3/4 h-auto top-1/2 transform -translate-y-1/2 animate-pulse' alt='Overlay Ellipse' />
              </div>
              {/* {/ Floating Icons with Responsive Sizes /} */}
              <img src={firstlike} className='absolute top-[-1rem] left-[1.5rem] w-10 h-10 md:w-16 md:h-16 rounded-full shadow-lg' alt='First Icon' />
              <img src={second} className='absolute  top-[2.5rem] left-[-1rem] md:top-[4rem] md:left-[-2rem] w-10 h-10 md:w-16 md:h-16 rounded-full shadow-lg' alt='Second Icon' />
              <img src={third} className='absolute top-[6.8rem] left-[-1.9rem] md:top-[10rem] md:left-[-4rem] w-10 h-10 md:w-16 md:h-16 rounded-full shadow-lg' alt='Third Icon' />
              <img src={fourth} className='absolute top-[10.8rem] left-[-1.5rem] md:top-[16rem] md:left-[-3rem] w-10 h-10 md:w-16 md:h-16 rounded-full shadow-lg' alt='Fourth Icon' />
              <img src={fifth} className='absolute  top-[14.8rem] left-[-1rem] md:top-[21rem] md:left-[-1rem] w-10 h-10 md:w-16 md:h-16 rounded-full shadow-lg' alt='Fifth Icon' />
              <img src={femalelogo1} className='absolute inset-0 w-[120%] md:w-[90%] pt-15 z-10' alt='Main Graphic' />
            </div>
          </div>
        </div>
      </section>
    </div>
     {/* <WholeCircle />  */}
    
    </>
  );
}

export default Homepage;