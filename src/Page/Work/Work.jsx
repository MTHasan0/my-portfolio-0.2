import React from 'react';

import data from '../../../public/Data/Project.json'
import WorkCard from './WorkCard';
import SliderMotion from '../../Components/SliderMotion/SliderMotion';
import { motion } from 'framer-motion';

const Work = () => {
    return (
        <div className=' mx-auto'>
            <SliderMotion></SliderMotion>



            <motion.div initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 100 }}
                transition={{ duration: 0.5, delay: 1 }}>
                <div className=' '>
                    {
                        data.map(data => <WorkCard
                            data={data}
                        ></WorkCard>)
                    }
                </div>
            </motion.div>




        </div>
    );
};

export default Work;