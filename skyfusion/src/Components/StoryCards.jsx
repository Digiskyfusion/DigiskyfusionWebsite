import { motion, useScroll } from "framer-motion";
import { useEffect, useState } from "react";
import { BookOpen, Users, History, TrendingUp } from "lucide-react";

const cards = [
  {
    title: "Our Story",
    description:
      "Every great brand starts with a story—ours is about passion, innovation, and the relentless pursuit of excellence. We thrive on fresh ideas, bold strategies, and results that speak for themselves.",
    icon: <BookOpen className="w-12 h-12 mb-3 text-[#8e44ad] group-hover:text-[#9b59b6] transition-all duration-300" />,
  },
  {
    title: "Our Team",
    description:
      "A squad of creative minds, data geeks, and growth hackers who eat algorithms for breakfast and turn challenges into opportunities.",
    icon: <Users className="w-12 h-12 mb-3 text-[#2980b9] group-hover:text-[#3498db] transition-all duration-300" />,
  },
  {
    title: "Our History",
    description:
      "Founded years ago, our company has evolved through challenges and successes, shaping who we are today.",
    icon: <History className="w-12 h-12 mb-3 text-[#f39c12] group-hover:text-[#f1c40f] transition-all duration-300" />,
  },
  {
    title: "Our Future",
    description:
      "The future is digital, and we’re here to lead the way. New trends, new strategies, new success stories—let’s create the next big thing together.",
    icon: <TrendingUp className="w-12 h-12 mb-3 text-[#27ae60] group-hover:text-[#2ecc71] transition-all duration-300" />,
  },
];

export default function StoryCards() {
  const { scrollY } = useScroll();
  const [scrollingUp, setScrollingUp] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    return scrollY.onChange((current) => {
      setScrollingUp(current < lastScrollY);
      setLastScrollY(current);
    });
  }, [scrollY, lastScrollY]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative flex items-center justify-center  py-10 text-white overflow-hidden"
    >
      <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 w-full px-10">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: scrollingUp ? -50 : 50 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{ scale: 1.05, rotateX: 5 }}
            className="relative p-6 rounded-md shadow-xl backdrop-blur-lg transition-all duration-300 
                      hover:shadow-[0px_0px_20px_rgba(255,255,255,0.3)] hover:ring-2 hover:ring-gray-400 overflow-hidden text-center border border-gray-400/20 
                      bg-gradient-to-br from-[#bdc3c7] to-[#2c3e50] group"
          >
            {/* Subtle Inner Glow */}
            <div className="absolute inset-0 bg-white/5 rounded-2xl opacity-10"></div>

            {/* Card Content */}
            <div className="relative flex flex-col items-center">
              {card.icon}
              <h2 className="text-2xl font-bold text-white mb-3 transition-all duration-500 group-hover:text-gray-300">
                {card.title}
              </h2>
              <p className="text-gray-200">{card.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
