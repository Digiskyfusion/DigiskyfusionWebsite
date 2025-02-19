import React from 'react';
import { motion } from 'framer-motion';

function WholeCircle() {
    let obj = [
        { name: "UI/UX Alchemy", nickname: "Designs so smooth, your users won’t want to leave." },
        { name: "Digital Sorcery", nickname: "Ads, content, and campaigns that make people stop, stare, and act." },
        { name: "SEO Wizardry", nickname: "Because being unseen in search results is not an option." },
        { name: "Social Media Fireworks", nickname: "Scroll-stopping, engagement-driving magic." },
    ];

    return (
        <motion.div
            className="px-5 relative mt-20 md:mt-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }}
        >
            <div className="bg-gradient-to-r from-[#F16D3C] to-[#0E546A] rounded-2xl md:rounded-full p-6 md:px-15 flex flex-col md:flex-row items-center justify-center gap-6 shadow-lg">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 w-full">
                    {obj.map((current, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.2 }}
                            whileHover={{ scale: 1.05, boxShadow: "0px 4px 15px rgba(255, 255, 255, 0.3)" }}
                            className="flex flex-col items-center text-white text-center p-4 bg-white/10 backdrop-blur-lg rounded-lg shadow-md hover:bg-white/20 transition duration-300"
                        >
                            <h1 className="text-lg font-bold">{current.name}</h1>
                            <p className="text-sm mt-2">{current.nickname}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}

export default WholeCircle;
