import React from 'react';
import SliderMotion from '../../Components/SliderMotion/SliderMotion';
import { motion } from 'framer-motion';
import CircleBtn from '../../Components/Buttons/CircleBtn';
// import homeImage from '../../assets/profile_3.png'
// import homeImage from '../../assets/pro2.jpg'
import homeImage from '../../assets/ppp.png'


const Home = () => {
    return (
        <div className=' text-white text-xl w-full'>

            <SliderMotion></SliderMotion>
            <div>
                <div className=' w-full h-full '>
                    {/* Banner text */}
                    <div className=' flex text-center flex-col justify-center  pt-40 xl:pt-40 xl:text-left md:text-left lg:text-left h-full container mx-auto '>
                        <motion.div initial={{ y: -100, opacity: 0 }}
                            animate={{ y: 0, opacity: 100 }}
                            transition={{ duration: 0.5, delay: 1 }}>
                            <p className=' text-3xl xl:text-5xl'>Hey this is
                                <span className=' text-4xl xl:text-7xl font-bold text-rose-500'> "TANVIR"</span> <br /> a front-end web developer...
                            </p><br />
                            <p className=' mb-10 hidden md:flex lg:flex xl:flex'>If you want to know about my work, click on arrow bellow</p>
                        </motion.div>

                        {/* btn */}
                        <div className=' hidden lg:flex xl:flex md:flex flex-1 '>
                            <motion.div
                                initial={{ y: -100, opacity: 0 }}
                                animate={{ y: 0, opacity: 100 }}
                                transition={{ duration: 0.8, delay: 1.5 }}>

                                <CircleBtn></CircleBtn>

                            </motion.div>

                        </div>

                    </div>

                </div>
            </div>

            {/* Bg Image */}

            <div className=' w-[50%] mx-auto h-full xl:absolute items-center lg:right-0 xl:right-[8%] bottom-0'>

                <div className=' bg-none flex   xl:bg-cover xl:bg-explosion xl:bg-right  xl:bg-no-repeat w-full h-full translate-z-0 '>
                    <div className=' mx-auto xl:absolute md:absolute md:right-[10%] xl:right-[10%] xl:top-1/4 md:top-1/4 '>

                        <div >
                            <motion.div
                                className=' avatar bg-white/10 rounded-badge bg-opacity-10 mx-auto my-auto shadow-xl shadow-gray-700'

                                initial={{ y: -100, opacity: 0 }}
                                animate={{ y: 0, opacity: 100 }}
                                transition={{ duration: 0.8, delay: 1.5 }}>

                                <div class="mask mask-hexagon w-64 md:w-72 lg:w-80 xl:w-96 m-auto ">
                                    <img className=' w-fit' src={homeImage}></img>
                                </div>

                            </motion.div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default Home;