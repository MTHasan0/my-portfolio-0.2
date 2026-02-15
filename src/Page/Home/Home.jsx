import React from 'react';
import SliderMotion from '../../Components/SliderMotion/SliderMotion';
import { motion } from 'framer-motion';

import homeImage from '../../assets/Profile0.1.png';
import { FaGithub, FaJs, FaMdb, FaNode, FaReact } from 'react-icons/fa6';
import { SiExpress, SiFirebase, SiJavascript, SiMongodb, SiNextdotjs, SiReact, SiVite } from 'react-icons/si';
import { Download, ArrowRight, Mail } from "lucide-react";
import { Link } from 'react-router-dom';
import './home.css'
const Home = () => {
    const handleDownload = () => {
        const pdfUrl = "Tanvir_Hasan.pdf";
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = "Tanvir_Hasan.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    return (
        // <div className='text-white text-xl w-full overflow-hidden '>
        //     <SliderMotion />

        //     {/* Content Section */}
        //     <div className='container mx-auto flex flex-col-reverse lg:flex-row   items-center justify-between pt-20 md:pt-20 lg:pt-28 xl:pt-40 px-4 sm:px-6'>

        //         {/* Left Side - Text & Button */}
        //         <div className='w-full lg:w-1/2 text-center lg:text-left space-y-4 sm:space-y-6 mt-8 lg:mt-0'>
        //             <motion.div
        //                 initial={{ y: -100, opacity: 0 }}
        //                 animate={{ y: 0, opacity: 1 }}
        //                 transition={{ duration: 0.5, delay: 1 }}
        //             >
        //                 <p className='text-2xl xs:text-3xl sm:text-4xl lg:text-5xl xl:text-6xl leading-tight'>
        //                     Hey, this is
        //                     <span className='block bg-gradient-to-r from-rose-600 to-black bg-clip-text text-transparent font-bold text-3xl xs:text-4xl sm:text-5xl xl:text-7xl mt-1 sm:mt-2'>TANVIR</span>
        //                     <span className='block text-lg sm:text-xl md:text-2xl mt-2 sm:mt-4'>your friendly neighborhood front-end web developer. </span>
        //                 </p>
        //                 <div className=' flex gap-3 items-center justify-center lg:justify-start '>
        //                     <FaHandPointDown className=' animate-bounce text-2xl' />
        //                     <p className='mt-3 sm:mt-4 text-base sm:text-lg md:text-xl flex gap-3 '>
        //                         Tap the arrow and let's dive in!
        //                     </p>
        //                 </div>

        //             </motion.div>

        //             <motion.div
        //                 className='flex justify-center lg:justify-start mt-4 sm:mt-6'
        //                 initial={{ y: -100, opacity: 0 }}
        //                 animate={{ y: 0, opacity: 1 }}
        //                 transition={{ duration: 0.8, delay: 1.5 }}
        //             >
        //                 <CircleBtn />
        //             </motion.div>
        //         </div>
        //         <div className=' absolute lg:relative'><FaJs className=' text-6xl opacity-20'></FaJs></div>

        //         {/* Right Side - Image */}
        //         <div className='w-full lg:w-1/2 flex justify-center mb-6 sm:mb-10 lg:mb-0'>
        //             <motion.div
        //                 className='avatar bg-transparent rounded-badge shadow-xl '
        //                 initial={{ y: -100, opacity: 0 }}
        //                 animate={{ y: 0, opacity: 1 }}
        //                 transition={{ duration: 0.8, delay: 1.5 }}
        //             >
        //                 <div className=' flex justify-center mx-auto w-[60%] mask-parallelogram border'>
        //                     <img className='w-full ' src={homeImage} alt="Tanvir" />

        //                 </div>
        //                 <div className=' absolute -left-20 -lg:left-10 '><FaReact className=' text-6xl opacity-15 animate-spin-slow'></FaReact></div>
        //             </motion.div>
        //             <div className=" hidden lg:absolute top-48 left-32 lg:top-10 lg:left-96"><FaGithub className=' text-6xl opacity-10 ' /></div>
        //             <div className=' absolute right-10 lg:right-40 top-28'><SiVite className=' text-6xl opacity-20'></SiVite></div>

        //         </div>
        //         <div className=' absolute bottom-48 left-10 lg:bottom-10 animate-pulse '><FaNode className=' text-6xl opacity-20'></FaNode></div>
        //         <div className=' lg:pt-40  absolute bottom-28 right-10'><SiFirebase className=' text-6xl opacity-20 ' /></div>
        //     </div>
        // </div>

        <section className="min-h-screen w-full bg-gradient-to-b from-black via-[#0a001a] to-[#140033] text-white relative overflow-hidden">
            <SliderMotion />
            {/* Glow background */}
            <div className="absolute w-[500px] sm:w-[700px] h-[500px] sm:h-[700px] bg-purple-700/30 blur-[150px] rounded-full top-20 left-1/2 -translate-x-1/2"></div>

            {/* MAIN CONTAINER */}
            <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-16 sm:py-20 flex flex-col md:flex-row lg:flex-row items-center justify-between gap-12 relative z-10">

                {/* LEFT SIDE */}
                <div className="w-full lg:w-1/2 text-center lg:text-left">

                    <motion.p
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 1 }}
                        className="text-gray-400 text-base sm:text-lg">Hey, I'm
                    </motion.p>

                    <motion.h1
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 1.5 }}
                        className="text-4xl sm:text-6xl md:text-7xl font-bold bg-gradient-to-r from-rose-500 to-purple-400 bg-clip-text text-transparent mt-1">
                        TANVIR
                    </motion.h1>

                    <motion.h2
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 2.5 }}
                        className="text-xl sm:text-2xl md:text-3xl mt-3 text-gray-200 font-light">
                        Front-End Developer
                    </motion.h2>

                    <motion.p
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 2.7 }}
                        className="text-gray-400 mt-5 text-base sm:text-lg">
                        Crafting fast & modern web experiences.
                    </motion.p>

                    {/* CTA BUTTONS */}
                    <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 2.7 }}
                        className="flex flex-col sm:flex-row flex-wrap gap-4 mt-8 justify-center lg:justify-start">

                        <Link to={'/project'} className="px-7 py-3 bg-rose-600 hover:bg-rose-700 transition rounded-xl font-medium flex items-center justify-center gap-2 w-full sm:w-auto">
                            View Projects <ArrowRight className=' group-hover:translate-x-2 transition-all' size={18} />
                        </Link>

                        <Link to={'contact'} className="px-7 py-3 border border-gray-500 hover:border-white hover:bg-white/10 transition rounded-xl font-medium w-full sm:w-auto">
                            Hire Me
                        </Link>

                        <button
                            onClick={() => handleDownload()}
                            href="../../../public/Tanvir_Hasan.pdf"
                            className="px-7 py-3 border border-gray-500 hover:border-white hover:bg-white/10 transition rounded-xl font-medium flex items-center justify-center gap-2 w-full sm:w-auto">
                            <Download size={18} /> Download CV
                        </button>

                    </motion.div>

                    {/* DESCRIPTION */}
                    <motion.p
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 2.9 }}
                        className="text-gray-400 mt-8 sm:mt-10 leading-relaxed text-sm sm:text-base max-w-lg mx-auto lg:mx-0">
                        I design and build fast, modern, and user-focused web interfaces
                        using React, Tailwind, and modern JavaScript.
                    </motion.p>

                    <div className="w-full lg:w-1/2 flex justify-center">

                        <motion.div
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 1, delay: 2.7 }}
                            className="relative w-[150px] sm:w-[320px] md:w-[380px] lg:w-[420px]">

                            {/* glow behind image */}
                            <div className="absolute inset-0 bg-purple-600/20 blur-3xl rounded-full"></div>

                            <img
                                src={homeImage}
                                alt="tanvir"
                                className=" bg-image relative z-10  grayscale hover:grayscale-0 transition duration-500 rounded-full w-full md:hidden lg:hidden"
                            />
                        </motion.div>
                    </div>
                    {/* TECH STACK */}
                    <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 2.5 }}
                        className="mt-8 sm:mt-10">
                        {/* <p className="text-gray-300 mb-4 text-sm sm:text-base">Tech I use:</p> */}

                        <div

                            className="flex gap-6 sm:gap-8 items-center justify-center lg:justify-start flex-wrap opacity-90">
                            <SiReact className=" text-4xl text-blue-300 " />
                            <SiJavascript className=" text-4xl text-yellow-200 " />
                            <SiVite className=" text-4xl text-purple-400" />
                            <FaNode className=" text-4xl " />
                            <SiExpress className=" text-4xl text-gray-300" />
                            <SiNextdotjs className=" text-4xl text-gray-300" />
                            <SiMongodb className=" text-4xl text-green-400" />
                            <FaGithub className=" text-4xl " />
                        </div>
                    </motion.div>
                </div>

                {/* RIGHT SIDE IMAGE */}
                <div className="w-full lg:w-1/2 flex justify-center">

                    <motion.div
                        initial={{ x: 400, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1.4, delay: 2.5 }}
                        className="relative sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl w-full">

                        {/* glow behind image */}
                        <div className="absolute inset-0 bg-purple-600/20 blur-3xl rounded-full"></div>


                        <img
                            src={homeImage}
                            alt="tanvir"
                            className=" bg-image relative z-10 grayscale hover:grayscale-0  transition duration-500 rounded-full w-full hidden md:flex lg:flex  "
                        />

                    </motion.div>
                </div>

            </div>

            {/* SCROLL INDICATOR */}
            {/* <div className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 text-gray-400 flex flex-col items-center animate-bounce">
                <span className="text-xs sm:text-sm">Scroll to see my work</span>
                <ArrowRight className="rotate-90 mt-2" size={18} />
            </div> */}

        </section>
    );



};

export default Home;