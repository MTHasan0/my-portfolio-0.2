import React from 'react';

import publication from '../../assets/Data/Publication.json';
import WorkCard from './WorkCard';
import SliderMotion from '../../Components/SliderMotion/SliderMotion';
import { motion } from 'framer-motion';

const Work = () => {
    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
    };



    return (
        <div className='mx-auto'>
            <SliderMotion />

            <motion.div
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 1 }}
            >
                <div>
                    {
                        publication.map((publication) => (
                            <motion.div
                                key={publication.id}
                                variants={cardVariants}
                                transition={{ type: "spring", stiffness: 300 }} // Spring animation
                            >
                                <WorkCard publication={publication} />
                            </motion.div>
                        ))
                    }
                </div>
            </motion.div>
        </div>
    );
};

export default Work;
