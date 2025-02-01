import React from 'react';

import data from '../../../public/Data/Project.json'
import WorkCard from './WorkCard';
import SliderMotion from '../../Components/SliderMotion/SliderMotion';

const Work = () => {
    return (
        <div className=' mx-auto'>
            <SliderMotion></SliderMotion>

            <motion.div initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 100 }}
                transition={{ duration: 0.5, delay: 1 }}>
                <p className=' text-3xl xl:text-5xl'>Hey this is
                    <span className=' text-4xl xl:text-7xl font-bold text-rose-500'> TANVIR</span> <br /> an web developer...
                </p><br />
                <p className=' max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16'>If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.</p>
            </motion.div>

            <div className=' '>
                {
                    data.map(data => <WorkCard
                        data={data}
                    ></WorkCard>)
                }
            </div>


        </div>
    );
};

export default Work;