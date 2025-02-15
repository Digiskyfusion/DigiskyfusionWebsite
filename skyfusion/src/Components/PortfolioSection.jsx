import React from "react";
import { motion } from "framer-motion";
import reddybooking from './../assets/Images/reddybooking.png';
import astrologer from './../assets/Images/astrologer.png';
import vivahsankar from './../assets/Images/vivahsankar.png';
import hindikhabar from './../assets/Images/hindikhabar.png';
import dentalcare from './../assets/Images/dental care.png';
import astrologer2 from './../assets/Images/astrologer2.png';

const portfolioItems = [
  {
    title: "Dental Care Website",
    description: "Angela Tirath is a dental professional committed to providing exceptional oral health care services. Her practice offers a comprehensive range of treatments, including pediatric dentistry, restorative care, orthodontics, and gum health services. ",
    image: dentalcare ,
    link: "https://angelatirath.com/",
  },
 
  {
    title: "ReddyBookings",
    description: "At Reddy Booking, we make reservations seamless and hassle-free. Whether you're looking for hotels, flights, holiday packages, or event tickets, we’ve got you covered.",
    image: reddybooking,
    link: "https://reddybookings.com/",
  },
  {
    title: "Vivah Sans Karnagpur",
    description: "Shri Radha Krishna Mandir Vivah Mandal, located in Nagpur, Maharashtra, is a dedicated marriage center offering comprehensive matrimonial services. ",
    image: vivahsankar,
    link: "https://www.vivahsanskarnagpur.com/",
  },
  {
    title: "HindiKhabra Website",
    description: "Hindikhabra.in is a leading Hindi news website that provides the latest updates and information across various categories, including national news, Punjab, Haryana, lifestyle, business, sports, health, entertainment, and unique stories. ",
    image: hindikhabar,
    link: "#",
  },
  {
    title: "Astrologer",
    description: "At Pt Kamlesh Sharma, we help you unlock the mysteries of the cosmos through personalized astrology readings and insights. Whether you're looking for guidance in love, career, health, or spiritual growth, our expert astrologers provide accurate and in-depth consultations tailored to your unique birth chart.",
    image: astrologer,
    link: "https://astrologerguruj.com/",
  },
  {
    title: "Astrologer Website",
    description: "Astrologer Omnath Shastri Ji is a renowned astrologer in India, celebrated for his accurate predictions and effective remedies. With extensive knowledge in astrology, palmistry, numerology, gemology, and horoscope matching, he offers solutions to various life challenges..",
    image: astrologer2,
    link: "https://astrologeromnath.com/",
  },
];

function PortfolioSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.2 }}
      className="py-8 px-4 "
    >
      <div className=" p-6 rounded-lg shadow-xl">
        <h2 className=" text-3xl font-bold text-center mb-8">
          Our Portfolio
        </h2>

        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
          {portfolioItems.map((item, index) => (
            <motion.a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
                delay: index * 0.2,
              }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 10px 20px rgba(0,0,0,0.2)",
                transition: { duration: 0.3 },
              }}
              className=" backdrop-blur-lg rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition duration-300"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className=" text-xl font-semibold">
                  {item.title}
                </h3>
                <p className=" text-sm mt-2">{item.description}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default PortfolioSection;
