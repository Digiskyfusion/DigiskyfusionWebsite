import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import cart from './../assets/Images/Aboutus1.png';
import { FaLinkedin } from 'react-icons/fa';

const clients = [
    { id: 1, name: "John Doe", role: "CEO", linkedin: "https://linkedin.com/in/johndoe" },
    { id: 2, name: "Jane Smith", role: "CTO", linkedin: "https://linkedin.com/in/janesmith" },
    { id: 3, name: "Emily Johnson", role: "Designer", linkedin: "https://linkedin.com/in/emilyjohnson" },
    { id: 4, name: "Michael Brown", role: "Developer", linkedin: "https://linkedin.com/in/michaelbrown" },
    { id: 5, name: "Sarah Wilson", role: "Manager", linkedin: "https://linkedin.com/in/sarahwilson" },
    { id: 6, name: "David Lee", role: "Marketer", linkedin: "https://linkedin.com/in/davidlee" }
];

function ClientSection() {
    const [scrollY, setScrollY] = useState(0);

    // Detect scroll position
    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <AnimatePresence>
            <motion.div 
                className='p-1 mb-4 bg-gray-100'
                initial={{ opacity: 0, y: -50 }} 
                animate={{ opacity: 1, y: 0 }} 
                exit={{ opacity: 0, y: 50 }} 
                transition={{ duration: 1 }}
            >
                {/* Page Scroll Indicator */}
                <motion.div 
                    className="fixed top-0 left-0 w-full h-2 bg-[#0E546A] z-50 origin-left"
                    style={{ scaleX: scrollY / (document.documentElement.scrollHeight - window.innerHeight) }}
                    transition={{ ease: "linear", duration: 0.2 }}
                />

                <div className='text-center mt-5 mb-8'>
                    <h1 className='text-3xl font-bold'>Meet Our Clients</h1>
                    <h2 className='text-lg text-gray-600'>Meet Our Dedicated Team of Educators and Innovators</h2>
                </div>
                
                {/* Grid with staggered animation */}
                <motion.div 
                    className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4'
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.3 }}
                    variants={{
                        visible: { transition: { staggerChildren: 0.2 } },
                        hidden: {}
                    }}
                >
                    {clients.map(client => (
                        <motion.div 
                            key={client.id} 
                            className='relative bg-white shadow-lg p-5 rounded-xl hover:shadow-2xl hover:shadow-[#0E546A] transition-all duration-300'
                            whileHover={{ scale: 1.05 }}
                            variants={{
                                hidden: { opacity: 0, y: 50 },
                                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                            }}
                        >
                            <motion.img 
                                src={cart} 
                                alt={client.name} 
                                className='w-full h-40 object-cover rounded-lg mb-4'
                                whileHover={{ opacity: 0.5 }}
                            />
                            <h3 className='text-xl font-semibold'>{client.name}</h3>
                            <p className='text-gray-500'>{client.role}</p>
                            
                            <motion.div 
                                className='absolute inset-0 flex items-center justify-center bg-opacity-70 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-xl'
                                whileHover={{ opacity: 1 }}
                            >
                                <a 
                                    href={client.linkedin} 
                                    target='_blank' 
                                    rel='noopener noreferrer' 
                                    className='text-white text-lg flex items-center gap-2'
                                >
                                    <FaLinkedin className='text-blue-800 text-3xl' /> View Profile
                                </a>
                            </motion.div>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
}

export default ClientSection;
