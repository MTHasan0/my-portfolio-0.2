import React from 'react';
import SliderMotion from '../../Components/SliderMotion/SliderMotion';
import { motion } from 'framer-motion';
import CircleBtn from '../../Components/Buttons/CircleBtn';
import homeImage from '../../assets/ppp.png';

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
                            Hey this is
                            <span className='block text-rose-500 font-bold text-3xl xs:text-4xl sm:text-5xl xl:text-7xl mt-1 sm:mt-2'>TANVIR</span>
                            <span className='block text-lg sm:text-xl md:text-2xl mt-2 sm:mt-4'>a front-end web developer...</span>
                        </p>
                        <p className='mt-3 sm:mt-4 text-base sm:text-lg md:text-xl'>
                            If you want to know about my work, click on the arrow below
                        </p>
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

                {/* Right Side - Image */}
                <div className='w-full lg:w-1/2 flex justify-center mb-6 sm:mb-10 lg:mb-0'>
                    <motion.div
                        className='avatar bg-white/10 rounded-badge shadow-xl shadow-gray-700'
                        initial={{ y: -100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 1.5 }}
                    >
                        <div className='mask mask-hexagon w-40 xs:w-48 sm:w-56 md:w-64 lg:w-72 xl:w-80 2xl:w-96'>
                            <img className='w-full object-cover' src={homeImage} alt="Tanvir" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Home;