import React from 'react';
import { easeOut, inView, motion } from "framer-motion";
import SliderMotion from '../../Components/SliderMotion/SliderMotion';
import services from '../../assets/Data/Service.json'
import { FaFacebook, FaReact } from 'react-icons/fa6';
import { SiFirebase, SiMongodb, SiNextdotjs, SiTailwindcss, SiVite } from 'react-icons/si';


const Service = () => {
    return (
        <div>
            <SliderMotion></SliderMotion>
            <div className="min-h-screen flex items-center justify-center p-6 mb-20 lg:mb-0">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-6xl w-full bg-white bg-opacity-15 rounded-2xl shadow-2xl p-8 md:p-12 lg:p-16"
                >
                    <motion.h1
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="text-4xl md:text-5xl font-bold text-white text-center mb-12"
                    >
                        My Expertise
                    </motion.h1>
                    <h1 className=' text-4xl text-white'>Framework and tools</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className=' flex gap-4'>


                            <motion.div
                                initial={{ opacity: 0, y: 0 }}
                                animate={{ opacity: 1, y: ['100%', '-100%'] }}
                                transition={{ delay: 0.2, duration: 0.8, repeatType: Infinity }}
                              
                                className="">
                                <div className="mask mask-hexagon w-24 h-24 bg-rose-500 text-white flex items-center ">
                                    <FaReact className="text-5xl mx-auto my-auto" />

                                </div>
                            </motion.div>
                            <div className="">
                                <div className="mask mask-hexagon w-24 h-24 bg-rose-500 text-white flex items-center ">
                                    <SiVite className="text-5xl mx-auto my-auto animate-pulse" />

                                </div>
                            </div>
                            <div className="">
                                <div className="mask mask-hexagon w-24 h-24 bg-rose-500 text-white flex items-center ">
                                    <SiTailwindcss className="text-5xl mx-auto my-auto animate-pulse" />

                                </div>
                            </div>
                            <div className="">
                                <div className="mask mask-hexagon w-24 h-24 bg-rose-500 text-white flex items-center ">
                                    <SiNextdotjs className="text-5xl mx-auto my-auto animate-pulse" />

                                </div>
                            </div>
                            <div className="">
                                <div className="mask mask-hexagon w-24 h-24 bg-rose-500 text-white flex items-center ">
                                    <SiFirebase className="text-5xl mx-auto my-auto animate-pulse" />

                                </div>
                            </div>
                            <div className="">
                                <div className="mask mask-hexagon w-24 h-24 bg-rose-500 text-white flex items-center ">
                                    <SiMongodb className="text-5xl mx-auto my-auto animate-pulse" />


                                </div>

                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>

        </div>
    );
};

export default Service;