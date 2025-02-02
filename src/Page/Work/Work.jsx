import React from 'react';

import data from '../../../public/Data/Project.json'
import WorkCard from './WorkCard';
import SliderMotion from '../../Components/SliderMotion/SliderMotion';
import { motion } from 'framer-motion';

const Work = () => {
    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
    };
    return (
        <div className=' mx-auto'>
            <SliderMotion></SliderMotion>

            <motion.div initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 100 }}
                transition={{ duration: 0.5, delay: 1 }}>
                <div className=' '>
                    {
                        data.map(data => (<motion.div
                            key={data.id}
                            variants={cardVariants}
                            transition={{ type: "spring", stiffness: 300 }} // Spring animation
                        >
                            <WorkCard data={data} />
                        </motion.div>))
                    }
                </div>
            </motion.div>




        </div>
    );
};

export default Work;