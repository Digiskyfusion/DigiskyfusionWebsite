import logo from './../assets/Images/background.png.png';
import ellips from './../assets/Images/Elips.png';
import circle from './../assets/Images/Circle1.png';
import port from './../assets/Images/portfoliofemale.png';
import bigstar from './../assets/Images/bigstar.png';
import reviewstar from './../assets/Images/review.png';
import like from './../assets/Images/like 1.png';
import comment1 from './../assets/Images/commment 1.png';
import comment2 from './../assets/Images/comment-2 1.png';
import { Link } from 'react-router-dom';
function NavPortfolio() {
  return (
    <>
      <div className="relative z-0">
        <section
          className="relative bg-cover bg-center px-4 sm:px-6 md:px-10 flex items-center md:pt-20 py-5"
          style={{ backgroundImage: `url(${logo})` }}
        >
          <div className="container flex flex-col md:flex-row justify-between items-center">
            {/* Content Section */}
            <div className="relative text-center md:text-start md:w-[60%] space-y-5 md:px-10 flex flex-col items-center md:items-start">
              <img
                src={circle}
                className="absolute left-[-15px] top-5 h-8 w-8 sm:h-12 sm:w-12 md:w-28 md:h-36 md:left-[-50px] rotate-360 rotate-y-360 "
                alt="Rotating Circle"
              />
              <h1 className="text-3xl sm:text-4xl md:text-6xl font-poppins leading-tight mukta-extrabold-b">
                Portfolio
              </h1>
              <p className="text-base sm:text-lg md:text-xl mukta-extrabold-thin">
                Imagine a world where your brand doesn’t just sit in the crowd—it owns the stage. That’s what we do at <span className="text-orange-400 font-semibold">DigiSkyFusion</span>. We blend creativity, strategy, and technology to turn brands into digital powerhouses.
              </p>

              <Link to="/contactUs">
              <div className=" mt-4">
                <button className="py-2 px-5 cursor-pointer sm:py-3 sm:px-6 bg-gradient-to-r from-[#0E546A] to-[#F16D3C] rounded-full text-white poppins-thin transition duration-300 transform hover:scale-105 hover:shadow-lg">
                  Get Started
                </button>
              </div>
              </Link>
            </div>
            {/* Image Section */}
            <div className="relative mt-10 md:mt-0 flex justify-center w-full max-w-xs sm:max-w-sm md:max-w-md">
              <div className="relative w-full">
                <div className="relative p-3 flex justify-center items-center">
                  <img src={ellips} className="w-full h-auto opacity-90" alt="Background Ellipse" />
                  <img
                    src={ellips}
                    className="absolute w-3/4 h-auto top-1/2 transform -translate-y-1/2 animate-pulse opacity-80"
                    alt="Overlay Ellipse"
                  />
                </div>

                {/* Floating Elements */}
                <div>
                  <div className="flex absolute top-2 md:left-[-50px] items-center">
                    <img src={bigstar} alt="Big Star" className="h-10 w-10 animate-bounce" />
                    <div className="text-sm lg:text-xl text-white ml-2">
                      <img src={reviewstar} alt="Stars" />
                      <p>15k Client <br /> Reviews</p>
                    </div>
                  </div>

                  <div className="flex absolute md:left-[-70px] md:bottom-1 items-center">
                    <img src={like} alt="Like Icon" className="h-10 w-10 animate-bounce" />
                    <div className="text-sm lg:text-xl text-white ml-2">
                      <img src={reviewstar} alt="Stars" />
                      <p>15k Client <br /> Reviews</p>
                    </div>
                  </div>

                  <div className="flex justify-between">
                    <img src={comment1} alt="Comment 1" className="h-10 w-10 absolute top-40  md:h-22 md:w-30 xl:left-[-6rem] xl:h-34 xl:w-46 animate-float" />
                    <img src={comment2} alt="Comment 2" className="h-10 w-10 absolute top-40 md:left-[18rem] md:h-22 md:w-30 left-[13rem] xl:left-[18rem] z-10 xl:h-36 xl:w-48 animate-float" />
                  </div>
                </div>

                <img src={port} className="absolute inset-0 md:left-10 w-[75%] sm:w-[90%] md:w-[75%] lg:w-[63.5%] pt-10" alt="Main Graphic" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default NavPortfolio;
