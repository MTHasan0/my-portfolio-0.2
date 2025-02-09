import React from 'react';
import { motion } from "framer-motion";
import SliderMotion from '../../Components/SliderMotion/SliderMotion';
import services from '../../assets/Data/Service.json'

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
                        My Services
                    </motion.h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {services.map((service, index) => (
                            <motion.div
                                key={service.id}
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.2, duration: 0.8 }}
                                whileHover={{ scale: 1.05 }}
                                className=" bg-white bg-opacity-20 rounded-2xl shadow-lg p-6 flex flex-col items-center text-center"
                            >
                                <motion.div
                                    whileHover={{ scale: 1.2 }}
                                    whileTap={{ scale: 0.9 }}
                                    className="text-6xl mb-6"
                                >
                                    {service.icon}
                                </motion.div>
                                <h3 className="text-xl font-semibold text-white mb-4">
                                    {service.title}
                                </h3>
                                <p className="text-white">{service.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>

        </div>
    );
};

export default Service;