import { motion } from "framer-motion";

export default function PortfolioShowcase() {
  return (
    <section className="bg-white text-gray-800 px-6 py-12 md:px-20">
      {/* Hero Section */}
      <div className="max-w-5xl mx-auto text-center space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          We don’t just build brands — <br />
          <span className="text-gradient-to-r from-[#0E546A] to-[#F16D3C] italic">
            we make them unforgettable.
          </span>
        </h1>
        <p className="text-lg text-gray-600">
          Over the years, we’ve partnered with startups, creators, and businesses
          to turn bold ideas into powerful digital experiences. Here’s a glimpse
          of what we’ve created (and proudly still manage):
        </p>
      </div>

      {/* Section Header */}
      <div className="text-center mt-16">
        <h2 className="text-3xl font-semibold italic">
          Our Work Speaks for Itself
        </h2>
      </div>

      {/* Projects */}
      <div className="mt-10 grid gap-10 md:grid-cols-2">
        {portfolioItems.map((proj, i) => (
          <motion.a
            key={i}
            href={proj.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="border rounded-2xl shadow-md hover:shadow-xl p-6 space-y-4 bg-white block"
          >
            <h3 className="text-xl font-bold text-[#0E546A] hover:underline">
              {proj.title}
            </h3>
            <p className="text-gray-600">{proj.description}</p>
          </motion.a>
        ))}
      </div>

      {/* Call To Action */}
      <div className="text-center mt-20">
        <h3 className="text-2xl font-semibold mb-4">Want results like these?</h3>
        <p className="text-gray-600 mb-6">Let’s build something awesome together.</p>
        <a href="tel:+917888386878">
          <button className="bg-gradient-to-r from-[#0E546A] to-[#F16D3C] cursor-pointer text-white px-6 py-3 rounded-full hover:opacity-90 transition-all">
            Contact Us Today
          </button>
        </a>
      </div>
    </section>
  );
}

// Portfolio websites list (no image required)
const portfolioItems = [
  {
    title: "ShaadiSankar Website",
    description:
      "ShaadiSankar is a matrimonial platform dedicated to helping individuals find their ideal life partners based on shared values, traditions, and preferences.",
    link: "https://www.shaadisanskar.com/",
  },
  {
  title: "DIGISKY.ai – Freelancing & Online Jobs Platform",
  description:
    "DIGISKY.ai empowers India's gig economy with a modern platform for freelancers. From creating profiles and bidding on projects to managing work seamlessly — it bridges clients and professionals with a clean, efficient user interface.",
  link: "https://digisky.ai/",
},
  {
    title: "ReddyBookings",
    description:
      "At Reddy Booking, we make reservations seamless and hassle-free. Whether you're looking for hotels, flights, holiday packages, or event tickets, we’ve got you covered.",
    link: "https://reddybookings.com/",
  },
  {
    title: "Vivah SansKar Nagpur",
    description:
      "Shri Radha Krishna Mandir Vivah Mandal, located in Nagpur, Maharashtra, is a dedicated marriage center offering comprehensive matrimonial services.",
    link: "https://www.vivahsanskarnagpur.com/",
  },
  {
    title: "AstroAghoriBaba Website",
    description:
      "AstroAghoriBaba.com is a spiritual and astrological platform offering personalized guidance through Vedic astrology, tantra rituals, and spiritual solutions.",
    link: "https://astroaghoribaba.com/",
  },
  {
    title: "Astrologer",
    description:
      "At Pt Kamlesh Sharma, we help you unlock the mysteries of the cosmos through personalized astrology readings and insights.",
    link: "https://astrologerguruj.com/",
  },
  {
    title: "Astrologer Website",
    description:
      "Astrologer Omnath Shastri Ji is a renowned astrologer in India, celebrated for his accurate predictions and effective remedies.",
    link: "https://astrologeromnath.com/",
  },
  {
    title: "Tanishenterpriss Website",
    description:
      "Tanishenterpriss.com is a professional business platform offering high-quality products and services across various sectors.",
    link: "https://tanishenterpriss.com/",
  },
];
