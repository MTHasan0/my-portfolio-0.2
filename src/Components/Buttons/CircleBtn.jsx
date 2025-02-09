import React from 'react';
import { FaArrowRight, FaCircleNotch } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const CircleBtn = () => {
    return (
        <div className='mx-auto xl:mx-0'>
            <Link
                to={'/project'}
                className='relative w-[120px] h-[120px] mx-auto xl:mx-0 flex justify-center items-center group'
                style={{ touchAction: 'manipulation' }} // Ensure touch events are handled properly
            >
                <FaCircleNotch className='text-9xl animate-spin-slow text-rose-500  group-hover:text-white'></FaCircleNotch>
                <FaArrowRight className='absolute text-3xl group-hover:translate-x-2 transition-all duration-500 group-hover:text-rose-500' />
            </Link>
        </div>
    );
};

export default CircleBtn;