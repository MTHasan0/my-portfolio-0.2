

import React from 'react';
import { motion } from "framer-motion";
import SliderMotion from '../../Components/SliderMotion/SliderMotion';
import profile from '../../assets/ppp.png'

import { FaFacebook, FaGithub, FaLinkedin, FaResearchgate } from 'react-icons/fa6';

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
                            <motion.p
                                className=' text-md text-gray-400'
                                variants={itemVariants}>
                                Personal: tanvirhasan177@gmail.com <br />
                                Academic: tanvir35-209@diu.edu.bd
                                <div className=' flex justify-center space-x-5 mt-3'>
                                    <motion.div
                                        initial={{ opacity: 0, y: -50 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.4, duration: 0.8 }}
                                        className="mt-12 flex justify-center space-x-6"
                                    >
                                        <motion.a
                                            whileHover={{ scale: 1.2 }}
                                            whileTap={{ scale: 0.9 }}
                                            href="https://www.linkedin.com/in/md-tanvir-hasan/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-white hover:text-rose-500 hover:bg-white"
                                        >
                                            <FaLinkedin className=" text-3xl"></FaLinkedin>
                                        </motion.a>
                                        <motion.a
                                            whileHover={{ scale: 1.2 }}
                                            whileTap={{ scale: 0.9 }}
                                            href="https://github.com/MTHasan0"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-white hover:text-rose-500 hover:bg-white"
                                        >
                                            <FaGithub className=" text-3xl"></FaGithub>
                                        </motion.a>
                                        <motion.a
                                            whileHover={{ scale: 1.2 }}
                                            whileTap={{ scale: 0.9 }}
                                            href="https://www.researchgate.net/profile/Md-Hasan-196/"
                                            className="text-white hover:text-rose-500 hover:bg-white"
                                        >
                                            <FaResearchgate className=" text-3xl"></FaResearchgate>
                                        </motion.a>
                                        <motion.a
                                            whileHover={{ scale: 1.2 }}
                                            whileTap={{ scale: 0.9 }}
                                            href="https://www.facebook.com/tanvir.niil/"
                                            className="text-white hover:text-rose-500 hover:bg-white"
                                        >
                                            <FaFacebook className=" text-3xl"></FaFacebook>
                                        </motion.a>
                                    </motion.div>
                                </div>
                            </motion.p>



                        </motion.div>
                    </div>

                    {/* Personal and academic details section */}
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
                                    <p className="">House keeping and Foreign guests support</p>
                                    <p className=' text-gray-500'>2023</p>
                                    <h4 className=' text-gray-500'>Hotel Heirloom (Student Job), Belgium</h4>
                                </div>
                                <div className=' border-dotted border-2 my-2 border-gray-400'></div>
                                <div>
                                    <p className="">Research Assistant <span className=' text-gray-500'>( 2020 - 2022 )</span></p>
                                    <h4 className=' text-gray-500'>Daffodil International University (Dhaka, Bangladesh)</h4>
                                </div>

                            </motion.div>
                        </div>
                    </motion.div>


                </motion.div>
            </div >
        </div >
    );
};

export default About;