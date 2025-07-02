import React from 'react';
import publication from '../../assets/Data/Publication.json';
import WorkCard from './WorkCard';
import SliderMotion from '../../Components/SliderMotion/SliderMotion';
import { motion } from 'framer-motion';

const Work = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 10
            }
        },
        hover: {
            scale: 1.02,
            boxShadow: "0px 10px 20px rgba(0,0,0,0.1)",
            transition: {
                duration: 0.3
            }
        }
    };

    return (
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
            <SliderMotion />

            <motion.div
                initial="hidden"
                animate="visible"
                variants={containerVariants}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-12"
            >
                {publication.map((publication) => (
                    <motion.div
                        key={publication.id}
                        variants={cardVariants}
                        whileHover="hover"
                        className="bg-white rounded-xl overflow-hidden shadow-md"
                    >
                        <WorkCard publication={publication} />
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

export default Work;