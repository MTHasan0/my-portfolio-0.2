import React from 'react';
import { FaProjectDiagram } from 'react-icons/fa';
import { FaHouse } from "react-icons/fa6";
import { FaPerson } from "react-icons/fa6";
import { FaBorderAll } from "react-icons/fa6";
import { HiChatBubbleBottomCenter, HiEnvelope } from 'react-icons/hi2';
import { Link, useLocation } from 'react-router-dom';



export const navData = [
    { name: 'home', path: '/', icon: <FaHouse /> },
    { name: 'about', path: '/about', icon: <FaPerson /> },
    { name: 'expertise', path: '/service', icon: <FaBorderAll /> },
    { name: 'projects', path: '/project', icon: <FaProjectDiagram /> },
    { name: 'contact', path: '/contact', icon: <HiEnvelope /> }
]

const Navbar = () => {
    const pathName = useLocation().pathname;
    return (
        <nav className='flex flex-col items-center xl:justify-center gap-y-4 fixed h-max bottom-0 mt-auto xl:right-[2%] z-50 top-0 w-full xl:w-16 xl:max-w-md xl:h-screen'>
            <div className=' flex w-full text-white text-xl xl:flex-col py-6 items-center justify-between xl:justify-center md:gap-y-10 px-6 md:px-40 xl:px-0 h-6 xl:h-max bg-gradient-to-r from-black to-blue-800 lg:bg-none lg:bg-white/20 backdrop-blur-lg xl:text-2xl xl:rounded-full'>
                {navData.map((link, index) => {
                    return <Link className={`${link.path === pathName && ' text-rose-500'} relative flex items-center group hover:text-rose-500 transition-all duration-300`} to={link.path} key={index}>
                        <div className=' absolute pr-14 right-0 hidden xl:group-hover:flex '>
                            <div className=' bg-white relative flex text-primary items-center p-2 '>
                                <div className=' text-lg leading-none font-semibold capitalize'>{link.name}</div>
                                <div className=' border-solid border-l-white border-l-8 border-y-transparent border-y-[6px] border-r-0 absolute -right-2'></div>
                            </div>
                        </div>
                        <div>{link.icon}</div>

                    </Link>
                })}

            </div>
        </nav>
    );
};

export default Navbar;