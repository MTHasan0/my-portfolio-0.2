import React from 'react';
import { FaArrowRight, FaCircleNotch, FaDownload, FaInbox, FaMessage } from 'react-icons/fa6';
import { HiEnvelope } from 'react-icons/hi2';
import { Link } from 'react-router-dom';

const CircleBtn = () => {
    return (
        <div className='mx-auto xl:mx-0'>
            <Link
                to={'/project'}
                className=' relative w-20 h-20 mx-auto xl:mx-0 flex justify-center items-center group '
                style={{ touchAction: 'manipulation' }}
            >


                <div className=' w-16 h-16 lg:w-20 lg:h-20 rounded-full items-center justify-center mx-auto flex hover:bg-gray-200/10 border border-gray-700 hover:border-none transition-all duration-500'>
                    <FaArrowRight className=' text-4xl group-hover:translate-x-2 transition-all duration-500 group-hover:text-rose-500 ' />
                </div>



            </Link>

            <div className=' flex gap-5 mt-5'>
                <div>
                    <a
                        href="../../../public/Tanvir_Hasan.pdf"
                        download
                        className="inline-flex items-center gap-2 px-4 py-2 border border-gray-700 hover:border-transparent transition-all duration-500 bg-transparent text-white rounded hover:bg-gray-200/10"
                    >
                        <FaDownload />
                        Download CV
                    </a>
                </div>
                <div className=''>
                    <Link to={'/contact'} className="inline-flex items-center gap-2 px-4 py-2 border border-gray-700 hover:border-transparent transition-all duration-500 bg-transparent text-white rounded hover:bg-gray-200/10"
                    > <HiEnvelope /> Contact Me</Link>
                </div>
            </div>

        </div>
    );
};

export default CircleBtn;