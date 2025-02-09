

import React from 'react';
import { motion } from "framer-motion";
import SliderMotion from '../../Components/SliderMotion/SliderMotion';

const About = () => {
    // Animation variants for Framer Motion
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2, delayChildren: 0.3 },
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1 },
    };

    return (
        <div>
            <SliderMotion />
            <div className="min-h-screen text-white py-12 px-4 sm:px-6 lg:px-8 mb-16 lg:mb-0">
                <motion.div
                    className="max-w-4xl mx-auto text-center"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 1 }}
                >
                    {/* About Section */}
                    <div className=" z-10">
                        <motion.div
                            className="bg-white/10 p-6 rounded-lg mb-8"
                            variants={itemVariants}
                        >
                            <motion.h1
                                className="text-3xl sm:text-6xl font-bold mb-8"
                                variants={itemVariants}
                            >
                                About
                            </motion.h1>
                            <motion.p
                                className="text-lg sm:text-xl mb-8 leading-relaxed"
                                variants={itemVariants}
                            >
                                Welcome to our world of creativity and innovation! We are a team of
                                passionate individuals dedicated to building amazing experiences.
                            </motion.p>
                        </motion.div>
                    </div>

                    {/* Mission and Vision Section */}
                    <motion.div
                        className="grid grid-cols-1 sm:grid-cols-2 gap-8"
                        variants={containerVariants}
                    >
                        <div className="">
                            <motion.div
                                className="bg-white/10 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                                variants={itemVariants}
                                whileHover={{ scale: 1.05 }}
                            >
                                <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
                                <p className="text-gray-300">
                                    To empower businesses and individuals with cutting-edge solutions
                                    that drive growth and success.
                                </p>
                            </motion.div>
                        </div>

                        <div className="">
                            <motion.div
                                className="bg-white/10 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                                variants={itemVariants}
                                whileHover={{ scale: 1.05 }}
                            >
                                <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
                                <p className="text-gray-300">
                                    A world where technology and creativity come together to solve
                                    real-world problems.
                                </p>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Meet the Team Section */}
                    <div className="">
                        <motion.div
                            className="bg-white/10 p-6 rounded-lg mt-12"
                            variants={itemVariants}
                        >
                            <h2 className="text-3xl font-bold mb-6">Meet the Team</h2>
                            <div className="mx-auto">
                                {[
                                    { name: "Tanvir Hasan", role: "Frontend Developer", image: "https://i.postimg.cc/x84c6bZb/image.png" },
                                ].map((member, index) => (
                                    <motion.div
                                        key={index}
                                        className="bg-white/10 p-6 rounded-lg text-center"
                                        variants={itemVariants}
                                        whileHover={{ scale: 1.05 }}
                                    >
                                        <img
                                            src={member.image}
                                            alt={member.name}
                                            className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-pink-400"
                                        />
                                        <h3 className="text-xl font-semibold">{member.name}</h3>
                                        <p className="text-gray-300">{member.role}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default About;