import React from 'react';
import { motion } from "framer-motion";
import SliderMotion from '../../Components/SliderMotion/SliderMotion';
import testimonials from '../../../public/Data/Testimonial.json'

import proPic from '../../../public/Image/5b11c33d-f6a8-4e25-b639-036814bd6b11.png'

const Testimonial = () => {



    return (
        <div>
            <SliderMotion></SliderMotion>
            <div className="min-h-screen flex items-center justify-center p-6 text-white">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-6xl w-full  rounded-2xl shadow-2xl bg-white bg-opacity-10 p-8 md:p-12 lg:p-16"
                >
                    <motion.h1
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="text-4xl md:text-5xl font-bold text-center mb-12"
                    >
                        What People Say About Me
                    </motion.h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <motion.div
                                key={testimonial.id}
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.2, duration: 0.8 }}
                                whileHover={{ scale: 1.05 }}
                                className="bg-white bg-opacity-15 rounded-2xl shadow-lg p-6 flex flex-col items-center text-center"
                            >
                                <motion.div
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="w-24 h-24 rounded-full overflow-hidden border-4 border-pink-500 mb-6"
                                >
                                    <img
                                        src={proPic}
                                        alt={testimonial.name}
                                        className="w-full h-full object-cover"
                                    />
                                </motion.div>
                                <h3 className="text-xl font-semibold t mb-2">
                                    {testimonial.name}
                                </h3>
                                <p className="text-sm  mb-4">{testimonial.role}</p>
                                <p className="">{testimonial.comment}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Testimonial;