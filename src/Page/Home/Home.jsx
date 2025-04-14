import React from 'react';
import SliderMotion from '../../Components/SliderMotion/SliderMotion';
import { motion } from 'framer-motion';
import CircleBtn from '../../Components/Buttons/CircleBtn';
import homeImage from '../../assets/profile_3.png'


const Home = () => {
    return (
        <div className=' text-white text-xl'>

            <SliderMotion></SliderMotion>
            <div>
                <div className=' w-full h-full '>
                    {/* Banner text */}
                    <div className=' flex text-center flex-col justify-center  pt-40 xl:pt-40 xl:text-left h-full container mx-auto '>
                        <motion.div initial={{ y: -100, opacity: 0 }}
                            animate={{ y: 0, opacity: 100 }}
                            transition={{ duration: 0.5, delay: 1 }}>
                            <p className=' text-3xl xl:text-5xl'>Hey this is
                                <span className=' text-4xl xl:text-7xl font-bold text-rose-500'> TANVIR</span> <br /> an web developer...
                            </p><br />
                            <p className=' max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16'>If you want to know about my work, click on arrow bellow</p>
                        </motion.div>

                        {/* btn */}
                        <div className=' text-white'>
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

            <div className=' w-[1200px] h-full absolute right-0 bottom-0  hidden xl:flex  '>

                <div className=' bg-none xl:flex  xl:bg-cover xl:bg-explosion xl:bg-right  xl:bg-no-repeat  w-full h-full translate-z-0'>
                    <div className='  max-w-md absolute right-32 top-1/4'>

                        <div >
                            <motion.div
                                className=' w-96 h-96 bg-white bg-opacity-10 rounded-full overflow-hidden'

                                initial={{ y: -100, opacity: 0 }}
                                animate={{ y: 0, opacity: 100 }}
                                transition={{ duration: 0.8, delay: 1.5 }}>
                                <div className='max-w-sm'><img className=' ' src={homeImage}></img></div>

                            </motion.div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default Home;