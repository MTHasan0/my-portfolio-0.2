

import React from 'react';
import { motion } from "framer-motion";
import SliderMotion from '../../Components/SliderMotion/SliderMotion';
import profile from '../../assets/pro2.jpg'

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

                            <motion.p
                                className="text-lg sm:text-xl mb-4 leading-relaxed"
                                variants={itemVariants}
                            >
                                <div className="avatar">
                                    <div className="mask mask-hexagon w-24 bg-slate-50 bg-opacity-10 ">
                                        <img className=' max-w-xs ' src={profile} />
                                    </div>
                                </div>
                            </motion.p>
                            <motion.h1
                                className="text-xl font-bold "
                                variants={itemVariants}
                            >
                                Md Tanvir Hasan
                            </motion.h1>
                            <motion.p
                                className=' text-md text-gray-400'
                                variants={itemVariants}>
                                Front-end Developer
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
                                <h2 className="text-2xl  font-semibold mb-4">Education</h2>
                                <h3>Master: Business Engineering (Data Mining)</h3>
                                <h3>Preparatory Course</h3>
                                <h4 className=' text-gray-500'>Ghent University (Ghent, Belgium)</h4>
                                <div className=' border-dotted border-2 my-2 border-gray-400'></div>
                                <h3>Bachelor: Software Engineering</h3>
                                <h4 className=' text-gray-500'>Daffodil International University (Dhaka, Bangladesh)</h4>

                            </motion.div>
                        </div>

                        <div className="">
                            <motion.div
                                className="bg-white/10 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                                variants={itemVariants}
                                whileHover={{ scale: 1.05 }}
                            >
                                <h2 className="text-2xl font-semibold mb-4">Experience</h2>

                                <div>
                                    <p className="text-gray-300">It Support and International Customer support</p>
                                    <p className=' text-gray-500'>2023 - 2024</p>
                                    <h4 className=' text-gray-500'>Hotel Heirloom (Student Job)</h4>
                                </div>
                                <div className=' border-dotted border-2 my-2 border-gray-400'></div>
                                <div>
                                    <p className="text-gray-300">Research Assistant <span className=' text-gray-500'>( 2020 - 2022 )</span></p>
                                    <h4 className=' text-gray-500'>Daffodil International University (Dhaka, Bangladesh)</h4>
                                </div>

                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Meet the Team Section */}
                    <div className="">
                        <motion.div
                            className="bg-white/10 p-6 rounded-lg mt-12"
                            variants={itemVariants}
                        >
                            <h2 className="text-3xl font-bold mb-6">Skill</h2>
                            <div className=' flex gap-2 items-center'>
                                <p className="text-gray-300 w-1/4">HTML</p>
                                <progress class="progress progress-error border border-gray-800 h-5" value="90" max="100"></progress>
                            </div>
                            <div className=' flex gap-2 items-center '>
                                <p className="text-gray-300 w-1/4">CSS</p>
                                <progress class="progress progress-error border border-gray-800 h-5" value="80" max="100"></progress>
                            </div>
                            <div className=' flex gap-2 items-center'>
                                <p className="text-gray-300 w-1/4">JavaScript</p>
                                <progress class="progress progress-error border border-gray-800 h-5" value="70" max="100"></progress>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div >
        </div >
    );
};

export default About;