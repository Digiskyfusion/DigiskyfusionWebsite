import { motion } from "framer-motion";

export default function PortfolioShowcase() {
  return (
    <section className="bg-white text-gray-800 px-6 py-12 md:px-20">
      {/* Hero Section */}
      <div className="max-w-5xl mx-auto text-center space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          We don’t just build brands — <br />
          <span className=" text-gradient-to-r from-[#0E546A] to-[#F16D3C] italic">we make them unforgettable.</span>
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
        {projects.map((proj, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="border rounded-2xl shadow-md hover:shadow-xl p-6 space-y-4 bg-white"
          >
            <h3 className="text-xl font-bold">{proj.title}</h3>
            <p className="text-gray-600">{proj.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Services Section */}
      <div className="mt-20 space-y-14">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="bg-gray-50 p-6 md:p-10 rounded-2xl shadow-md"
          >
            <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
            <p className="text-gray-700">{service.desc}</p>
            <ul className="mt-4 list-disc list-inside text-gray-600">
              {service.points.map((pt, i) => (
                <li key={i} className="mb-1">{pt}</li>
              ))}
            </ul>
          </div>
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

const projects = [
  {
    title: "ShadiSanskar – Indian Matrimonial Platform",
    desc: "A tech-forward matrimonial platform rooted in Indian culture. Secure, form-based, and ritual-compliant for community matchmaking centers.",
  },
  {
    title: "DIGISKY.ai – Freelancing & Online Jobs Platform",
    desc: "For India’s gig economy: profile creation, bidding, and a sleek UI. Connecting professionals with projects seamlessly.",
  },
  {
    title: "Premier Dental Care Website – Angela Tirath",
    desc: "A clean, professional clinic site with booking, CTAs, and a trust-building design for higher conversions.",
  },
  {
    title: "ReddyBookings – Travel & Event Booking Portal",
    desc: "Book hotels, flights, events, and more — all in one dynamic platform with real-time features and vibrant UI.",
  },
  {
    title: "Vivah Sanskar, Nagpur – Marriage Registration Center",
    desc: "Marriage info + legal documentation made simple. Traditional + digital touch for couples in Maharashtra.",
  },
  {
    title: "HindiKhabra.in – Hindi News & Media Platform",
    desc: "Fast, responsive Hindi news site — optimized for mobile and SEO. Serving northern India with fresh headlines.",
  },
  {
    title: "Astrologer – Shri Radha Krishna Mandir Website",
    desc: "Spiritual astrology site for temple followers — cosmic design and clean service listings from Pt. Kamlesh Sharma.",
  },
  {
    title: "Omnath Shastri Ji – Astrology Services Website",
    desc: "Bold, emotional design for quick conversion. Direct contact CTAs for astrology and love problem solutions.",
  },
];

const services = [
  {
    title: "📱 Social Media Management & Growth",
    desc: "From 0 to 10K+ organically — with a sharp eye on trends and engagement.",
    points: [
      "Handled 25+ Instagram accounts",
      "Monthly content calendars & Reels",
      "Community engagement & analytics",
      "Ad creatives & promo campaigns",
    ],
  },
  {
    title: "🎨 Graphic Design & Branding",
    desc: "Impactful visuals that communicate instantly across mediums.",
    points: [
      "500+ creatives across industries",
      "Logos, posters, pitch decks & motion graphics",
      "Canva, Figma, Illustrator expertise",
      "Brand kits & print-ready designs",
    ],
  },
  {
    title: "📈 Digital Marketing Services",
    desc: "We bring measurable results through data-backed strategies.",
    points: [
      "Google Ads, Meta (FB & Insta), LinkedIn campaigns",
      "Funnel-based marketing for product launches",
      "SEO & performance-based ad management",
    ],
  },
];
