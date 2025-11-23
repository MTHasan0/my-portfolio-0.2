import React from 'react';
import SliderMotion from '../../Components/SliderMotion/SliderMotion';
import { motion } from 'framer-motion';
import CircleBtn from '../../Components/Buttons/CircleBtn';
import homeImage from '../../assets/Profile0.1.png';
import { FaGithub, FaJs, FaMdb, FaNode, FaReact } from 'react-icons/fa6';
import { SiFirebase, SiVite } from 'react-icons/si';
import { FaHandPointDown } from 'react-icons/fa';

const Home = () => {
    return (
        <div className='text-white text-xl w-full overflow-hidden'>
            <SliderMotion />

            {/* Content Section */}
            <div className='container mx-auto flex flex-col-reverse lg:flex-row items-center justify-between pt-10 md:pt-20 lg:pt-28 xl:pt-40 px-4 sm:px-6'>

                {/* Left Side - Text & Button */}
                <div className='w-full lg:w-1/2 text-center lg:text-left space-y-4 sm:space-y-6 mt-8 lg:mt-0'>
                    <motion.div
                        initial={{ y: -100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 1 }}
                    >
                        <p className='text-2xl xs:text-3xl sm:text-4xl lg:text-5xl xl:text-6xl leading-tight'>
                            Hey, this is
                            <span className='block bg-gradient-to-r from-rose-600 to-black bg-clip-text text-transparent font-bold text-3xl xs:text-4xl sm:text-5xl xl:text-7xl mt-1 sm:mt-2'>TANVIR</span>
                            <span className='block text-lg sm:text-xl md:text-2xl mt-2 sm:mt-4'>your friendly neighborhood front-end web developer. </span>
                        </p>
                        <div className=' flex gap-3 items-center justify-center lg:justify-start '>
                            <FaHandPointDown className=' animate-bounce text-2xl' />
                            <p className='mt-3 sm:mt-4 text-base sm:text-lg md:text-xl flex gap-3 '>
                                Tap the arrow and let's dive in!
                            </p>
                        </div>

                    </motion.div>

                    <motion.div
                        className='flex justify-center lg:justify-start mt-4 sm:mt-6'
                        initial={{ y: -100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 1.5 }}
                    >
                        <CircleBtn />
                    </motion.div>
                </div>
                <div className=' absolute lg:relative'><FaJs className=' text-6xl opacity-20'></FaJs></div>

                {/* Right Side - Image */}
                <div className='w-full lg:w-1/2 flex justify-center mb-6 sm:mb-10 lg:mb-0'>
                    <motion.div
                        className='avatar bg-transparent rounded-badge shadow-xl '
                        initial={{ y: -100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 1.5 }}
                    >
                        <div className=' shadow-inner w-40 xs:w-48 sm:w-56 rounded-full md:w-64 lg:w-96 xl:w-96 h-40 xs:h-48 sm:h-56 md:h-64 lg:h-96 xl:h-96'>
                            <img className='w-full scale-90 ' src={homeImage} alt="Tanvir" />

                        </div>
                        <div className=' absolute -left-20 -lg:left-10 '><FaReact className=' text-6xl opacity-15 animate-spin-slow'></FaReact></div>
                    </motion.div>
                    <div className=" hidden lg:absolute top-48 left-32 lg:top-10 lg:left-96"><FaGithub className=' text-6xl opacity-10 ' /></div>
                    <div className=' absolute right-10 lg:right-40 top-28'><SiVite className=' text-6xl opacity-20'></SiVite></div>

                </div>
                <div className=' absolute bottom-48 left-10 lg:bottom-10 animate-pulse '><FaNode className=' text-6xl opacity-20'></FaNode></div>
                <div className=' lg:pt-40  absolute bottom-28 right-10'><SiFirebase className=' text-6xl opacity-20 ' /></div>
            </div>
        </div>
    );
};

export default Home;