// import React from 'react';
// import { motion } from "framer-motion";
// import SliderMotion from '../../Components/SliderMotion/SliderMotion';
// import { FaReact } from 'react-icons/fa6';
// import { SiC, SiCss3, SiFirebase, SiGithub, SiHtml5, SiJavascript, SiMongodb, SiNextdotjs, SiPython, SiR, SiTailwindcss, SiVite } from 'react-icons/si';


// const Service = () => {
//     return (
//         <div>
//             <SliderMotion></SliderMotion>
//             <div className="min-h-screen flex items-center justify-center p-6 mb-20 lg:mb-0">
//                 <motion.div
//                     initial={{ opacity: 0, y: 50 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.8 }}
//                     className="max-w-6xl w-full bg-white bg-opacity-15 rounded-2xl shadow-2xl p-8 md:p-12 lg:p-16"
//                 >
//                     <motion.h1
//                         initial={{ opacity: 0, x: -50 }}
//                         animate={{ opacity: 1, x: 0 }}
//                         transition={{ delay: 0.2, duration: 0.8 }}
//                         className="text-4xl md:text-5xl font-bold text-white text-center mb-12"
//                     >
//                         My Expertise
//                     </motion.h1>
//                     <h1 className=' text-4xl text-white md:pb-10 lg:pb-10 xl:pb-10 text-center'>Framework and tools</h1>
//                     <div className="md:grid-cols-2 lg:grid-cols-4 gap-8">

//                         {/* For large device */}

//                         <div className=' hidden md:flex lg:flex xl:flex justify-between gap-4'>


//                             <motion.div
//                                 animate={{ y: ['20%', '-20%'] }}
//                                 transition={{
//                                     delay: 0.2,
//                                     duration: 1.4,
//                                     repeat: Infinity,
//                                     repeatType: "reverse",
//                                     ease: "easeOut"
//                                 }}
//                                 className=""
//                             >
//                                 <div className="mask mask-hexagon w-24 h-24 bg-rose-500  text-white flex items-center">
//                                     <FaReact className="text-5xl mx-auto my-auto animate-pulse" />
//                                 </div>
//                                 <p className=' text-white text-center text-xl'>React</p>
//                             </motion.div>
//                             <motion.div
//                                 animate={{ y: ['20%', '-20%'] }}
//                                 transition={{
//                                     delay: 0.4,
//                                     duration: 1.4,
//                                     repeat: Infinity,
//                                     repeatType: "reverse",
//                                     ease: "easeOut"
//                                 }}
//                                 className="">
//                                 <div className="mask mask-hexagon w-24 h-24 bg-rose-500 text-white flex items-center ">
//                                     <SiVite className="text-5xl mx-auto my-auto animate-pulse" />

//                                 </div>
//                                 <p className=' text-white text-center text-xl'>Vite</p>
//                             </motion.div>
//                             <motion.div
//                                 animate={{ y: ['20%', '-20%'] }}
//                                 transition={{
//                                     delay: 0.6,
//                                     duration: 1.4,
//                                     repeat: Infinity,
//                                     repeatType: "reverse",
//                                     ease: "easeOut"
//                                 }}
//                                 className="">
//                                 <div className="mask mask-hexagon w-24 h-24 bg-rose-500 text-white flex items-center ">
//                                     <SiTailwindcss className="text-5xl mx-auto my-auto animate-pulse" />

//                                 </div>
//                                 <p className=' text-white text-center text-xl'>TailwindCSS</p>
//                             </motion.div>
//                             <motion.div
//                                 animate={{ y: ['30%', '-30%'] }}
//                                 transition={{
//                                     delay: 0.8,
//                                     duration: 1.4,
//                                     repeat: Infinity,
//                                     repeatType: "reverse",
//                                     ease: "easeOut"
//                                 }} className="">
//                                 <div className="mask mask-hexagon w-24 h-24 bg-rose-500 text-white flex items-center ">
//                                     <SiNextdotjs className="text-5xl mx-auto my-auto animate-pulse" />

//                                 </div>
//                                 <p className=' text-white text-center text-xl'>NextJS</p>
//                             </motion.div>
//                             <motion.div
//                                 animate={{ y: ['30%', '-30%'] }}
//                                 transition={{
//                                     delay: 1,
//                                     duration: 1.4,
//                                     repeat: Infinity,
//                                     repeatType: "reverse",
//                                     ease: "easeOut"
//                                 }}
//                                 className="">
//                                 <div className="mask mask-hexagon w-24 h-24 bg-rose-500 text-white flex items-center ">
//                                     <SiFirebase className="text-5xl mx-auto my-auto animate-pulse" />

//                                 </div>
//                                 <p className=' text-white text-center text-xl'>Firebase</p>
//                             </motion.div>
//                             <motion.div
//                                 animate={{ y: ['30%', '-30%'] }}
//                                 transition={{
//                                     delay: 1.2,
//                                     duration: 1.4,
//                                     repeat: Infinity,
//                                     repeatType: "reverse",
//                                     ease: "easeOut"
//                                 }}
//                                 className="">
//                                 <div className="mask mask-hexagon w-24 h-24 bg-rose-500 text-white flex items-center ">
//                                     <SiMongodb className="text-5xl mx-auto my-auto animate-pulse" />
//                                 </div>
//                                 <p className=' text-white text-center text-xl'>MongoDB</p>

//                             </motion.div>
//                             <motion.div
//                                 animate={{ y: ['30%', '-30%'] }}
//                                 transition={{
//                                     delay: 1.2,
//                                     duration: 1.4,
//                                     repeat: Infinity,
//                                     repeatType: "reverse",
//                                     ease: "easeOut"
//                                 }}
//                                 className="">
//                                 <div className="mask mask-hexagon w-24 h-24 bg-rose-500 text-white flex items-center ">
//                                     <SiGithub className="text-5xl mx-auto my-auto animate-pulse" />
//                                 </div>
//                                 <p className=' text-white text-center text-xl'>GitHub</p>

//                             </motion.div>
//                         </div>

//                         {/* For small device */}
//                         <div className=' grid grid-cols-2 md:hidden lg:hidden xl:hidden'>


//                             <motion.div
//                                 className=""
//                             >
//                                 <div className="mask mask-hexagon w-24 h-24 bg-rose-500  text-white flex items-center">
//                                     <FaReact className="text-5xl mx-auto my-auto animate-pulse" />
//                                 </div>
//                                 <p className=' text-white text-center text-xl'>React</p>
//                             </motion.div>
//                             <motion.div
//                                 className="">
//                                 <div className="mask mask-hexagon w-24 h-24 bg-rose-500 text-white flex items-center ">
//                                     <SiVite className="text-5xl mx-auto my-auto animate-pulse" />

//                                 </div>
//                                 <p className=' text-white text-center text-xl'>Vite</p>
//                             </motion.div>
//                             <motion.div
//                                 className="">
//                                 <div className="mask mask-hexagon w-24 h-24 bg-rose-500 text-white flex items-center ">
//                                     <SiTailwindcss className="text-5xl mx-auto my-auto animate-pulse" />

//                                 </div>
//                                 <p className=' text-white text-center text-xl'>TailwindCSS</p>
//                             </motion.div>
//                             <motion.div className="">
//                                 <div className="mask mask-hexagon w-24 h-24 bg-rose-500 text-white flex items-center ">
//                                     <SiNextdotjs className="text-5xl mx-auto my-auto animate-pulse" />

//                                 </div>
//                                 <p className=' text-white text-center text-xl'>NextJS</p>
//                             </motion.div>
//                             <motion.div
//                                 className="">
//                                 <div className="mask mask-hexagon w-24 h-24 bg-rose-500 text-white flex items-center ">
//                                     <SiFirebase className="text-5xl mx-auto my-auto animate-pulse" />

//                                 </div>
//                                 <p className=' text-white text-center text-xl'>Firebase</p>
//                             </motion.div>
//                             <motion.div className="">
//                                 <div className="mask mask-hexagon w-24 h-24 bg-rose-500 text-white flex items-center ">
//                                     <SiMongodb className="text-5xl mx-auto my-auto animate-pulse" />
//                                 </div>
//                                 <p className=' text-white text-center text-xl'>MongoDB</p>

//                             </motion.div>
//                             <motion.div className="">
//                                 <div className="mask mask-hexagon w-24 h-24 bg-rose-500 text-white flex items-center ">
//                                     <SiGithub className="text-5xl mx-auto my-auto animate-pulse" />
//                                 </div>
//                                 <p className=' text-white text-center text-xl'>GitHub</p>

//                             </motion.div>
//                         </div>
//                     </div>


//                     {/* Programming language section */}
//                     <div>
//                         <h1 className=' text-white text-3xl pt-10 pb-10 text-center'>Programming Language</h1>
//                         <div className=' flex justify-between'>
//                             <motion.div
//                                 animate={{ y: ['20%', '-20%'] }}
//                                 transition={{
//                                     delay: 0.4,
//                                     duration: 1.4,
//                                     repeat: Infinity,
//                                     repeatType: "reverse",
//                                     ease: "easeOut"
//                                 }}
//                                 className="">
//                                 <div className="mask mask-hexagon w-24 h-24 bg-rose-500 text-white flex items-center ">
//                                     <SiHtml5 className="text-5xl mx-auto my-auto animate-pulse" />

//                                 </div>
//                                 <p className=' text-white text-center text-xl'>HTML</p>
//                             </motion.div>
//                             <motion.div
//                                 animate={{ y: ['20%', '-20%'] }}
//                                 transition={{
//                                     delay: 0.4,
//                                     duration: 1.4,
//                                     repeat: Infinity,
//                                     repeatType: "reverse",
//                                     ease: "easeOut"
//                                 }}
//                                 className="">
//                                 <div className="mask mask-hexagon w-24 h-24 bg-rose-500 text-white flex items-center ">
//                                     <SiCss3 className="text-5xl mx-auto my-auto animate-pulse" />

//                                 </div>
//                                 <p className=' text-white text-center text-xl'>CSS</p>
//                             </motion.div>
//                             <motion.div
//                                 animate={{ y: ['20%', '-20%'] }}
//                                 transition={{
//                                     delay: 0.4,
//                                     duration: 1.4,
//                                     repeat: Infinity,
//                                     repeatType: "reverse",
//                                     ease: "easeOut"
//                                 }}
//                                 className="">
//                                 <div className="mask mask-hexagon w-24 h-24 bg-rose-500 text-white flex items-center ">
//                                     <SiJavascript className="text-5xl mx-auto my-auto animate-pulse" />

//                                 </div>
//                                 <p className=' text-white text-center text-xl'>JavaScript</p>
//                             </motion.div>
//                             <motion.div
//                                 animate={{ y: ['20%', '-20%'] }}
//                                 transition={{
//                                     delay: 0.4,
//                                     duration: 1.4,
//                                     repeat: Infinity,
//                                     repeatType: "reverse",
//                                     ease: "easeOut"
//                                 }}
//                                 className="">
//                                 <div className="mask mask-hexagon w-24 h-24 bg-rose-500 text-white flex items-center ">
//                                     <SiC className="text-5xl mx-auto my-auto animate-pulse" />

//                                 </div>
//                                 <p className=' text-white text-center text-xl'>C</p>
//                             </motion.div>
//                             <motion.div
//                                 animate={{ y: ['20%', '-20%'] }}
//                                 transition={{
//                                     delay: 0.4,
//                                     duration: 1.4,
//                                     repeat: Infinity,
//                                     repeatType: "reverse",
//                                     ease: "easeOut"
//                                 }}
//                                 className="">
//                                 <div className="mask mask-hexagon w-24 h-24 bg-rose-500 text-white flex items-center ">
//                                     <SiPython className="text-5xl mx-auto my-auto animate-pulse" />

//                                 </div>
//                                 <p className=' text-white text-center text-xl'>Python</p>
//                             </motion.div>
//                             <motion.div
//                                 animate={{ y: ['20%', '-20%'] }}
//                                 transition={{
//                                     delay: 0.4,
//                                     duration: 1.4,
//                                     repeat: Infinity,
//                                     repeatType: "reverse",
//                                     ease: "easeOut"
//                                 }}
//                                 className="">
//                                 <div className="mask mask-hexagon w-24 h-24 bg-rose-500 text-white flex items-center ">
//                                     <SiR className="text-5xl mx-auto my-auto animate-pulse" />

//                                 </div>
//                                 <p className=' text-white text-center text-xl'>R</p>
//                             </motion.div>
//                         </div>
//                     </div>
//                 </motion.div>
//             </div>

//         </div>
//     );
// };

// export default Service;



import React, { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import SliderMotion from '../../Components/SliderMotion/SliderMotion';
import { FaReact } from 'react-icons/fa6';
import { SiC, SiCss3, SiFirebase, SiGithub, SiHtml5, SiJavascript, SiMongodb, SiNextdotjs, SiNodedotjs, SiPython, SiR, SiTailwindcss, SiVite, SiVscodium } from 'react-icons/si';
import { DiVisualstudio } from 'react-icons/di';

const Service = () => {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [hoveredSkill, setHoveredSkill] = useState(null);

    const skills = {
        frontend: [
            { icon: <FaReact className="text-4xl" />, name: "React", color: "text-cyan-400" },
            { icon: <SiNextdotjs className="text-4xl" />, name: "Next.js", color: "text-white" },
            { icon: <SiTailwindcss className="text-4xl" />, name: "Tailwind", color: "text-sky-400" },
            { icon: <SiVite className="text-4xl" />, name: "Vite", color: "text-purple-400" },
        ],
        backend: [
            { icon: <SiFirebase className="text-4xl" />, name: "Firebase", color: "text-amber-400" },
            { icon: <SiMongodb className="text-4xl" />, name: "MongoDB", color: "text-green-400" },
            { icon: <SiNodedotjs className="text-4xl" />, name: "NodeJS", color: "text-green-400" },
        ],
        languages: [
            { icon: <SiJavascript className="text-4xl" />, name: "JavaScript", color: "text-yellow-300" },
            { icon: <SiHtml5 className="text-4xl" />, name: "HTML5", color: "text-orange-500" },
            { icon: <SiCss3 className="text-4xl" />, name: "CSS3", color: "text-blue-500" },
            { icon: <SiPython className="text-4xl" />, name: "Python", color: "text-blue-300" },
            { icon: <SiC className="text-4xl" />, name: "C", color: "text-blue-600" },
        ],
        tools: [
            { icon: <SiGithub className="text-4xl" />, name: "GitHub", color: "text-gray-300" },
            { icon: <DiVisualstudio className="text-4xl text-blue-500" />, name: "Visual Studio", color: "text-gray-300" },
        ]
    };

    const allSkills = [...skills.frontend, ...skills.backend, ...skills.languages, ...skills.tools];

    const filteredSkills = selectedCategory === 'all'
        ? allSkills
        : skills[selectedCategory];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.05,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: 40, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 10
            }
        }
    };

    const hoverVariants = {
        hover: {
            y: -15,
            scale: 1.05,
            boxShadow: "0 20px 25px -5px rgba(236, 72, 153, 0.3)",
            transition: { duration: 0.3 }
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-black-900 via-purple-900 to-violet-900 text-white overflow-hidden">
            {/* Animated background elements */}
            <div className="fixed inset-0 overflow-hidden opacity-10">
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute rounded-full bg-pink-500"
                        style={{
                            width: Math.random() * 10 + 5,
                            height: Math.random() * 10 + 5,
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`
                        }}
                        animate={{
                            y: [0, (Math.random() - 0.5) * 100],
                            x: [0, (Math.random() - 0.5) * 100],
                            opacity: [0.2, 0.8, 0.2]
                        }}
                        transition={{
                            duration: Math.random() * 10 + 10,
                            repeat: Infinity,
                            repeatType: "reverse"
                        }}
                    />
                ))}
            </div>

            <div className="relative z-10">
                <SliderMotion />

                <div className="container mx-auto px-4 py-16">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <h1 className="text-5xl md:text-6xl font-bold mb-4 text-white">
                            Tech Stack
                        </h1>
                        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                            Explore my digital toolbox - technologies I use to build exceptional experiences
                        </p>
                    </motion.div>

                    {/* Category selector */}
                    <motion.div
                        className="flex flex-wrap justify-center gap-3 mb-12"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                    >
                        {['all', 'frontend', 'backend', 'languages', 'tools'].map((category) => (
                            <motion.button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className={`px-6 py-2 rounded-full text-sm font-medium capitalize transition-all ${selectedCategory === category
                                    ? 'bg-rose-500 text-white shadow-lg shadow-pink-500/30'
                                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                                    }`}
                            >
                                {category}
                            </motion.button>
                        ))}
                    </motion.div>

                    {/* Skills grid */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
                    >
                        <AnimatePresence>
                            {filteredSkills.map((skill, index) => (
                                <motion.div
                                    key={`${selectedCategory}-${skill.name}`}
                                    variants={itemVariants}
                                    whileHover="hover"
                                    onHoverStart={() => setHoveredSkill(skill)}
                                    // onHoverEnd={() => setHoveredSkill(null)}
                                    className="relative"
                                >
                                    <motion.div
                                        variants={hoverVariants}
                                        className={`h-32 rounded-md bg-gray-800/50 backdrop-blur-md border border-gray-700 flex flex-col items-center justify-center p-4 cursor-pointer transition-all ${hoveredSkill === skill ? 'ring-2 ring-rose-400 ' : ''
                                            }`}
                                        style={{
                                            transformStyle: 'preserve-3d',
                                            transform: hoveredSkill === skill
                                                ? 'perspective(1000px) rotateX(5deg) rotateY(5deg)'
                                                : 'perspective(1000px) rotateX(0) rotateY(0)'
                                        }}
                                    >
                                        <div className={`mb-3 ${skill.color}`}>
                                            {skill.icon}
                                        </div>
                                        <h3 className="text-lg font-medium">{skill.name}</h3>
                                        <div className="absolute inset-0 rounded-2xl overflow-hidden">
                                            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-pink-500/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                                        </div>
                                    </motion.div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>

                    {/* Skill spotlight */}
                    <AnimatePresence>
                        {hoveredSkill && (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 20 }}
                                className="mt-12 p-6 bg-gray-800/50 backdrop-blur-md rounded-md border border-gray-700 max-w-2xl mx-auto"
                            >
                                <div className="flex items-center gap-4 mb-4">
                                    <div className={`p-3  bg-gray-700 ${hoveredSkill.color}`}>
                                        {React.cloneElement(hoveredSkill.icon, { className: "text-3xl" })}
                                    </div>
                                    <h3 className="text-2xl font-bold">{hoveredSkill.name}</h3>
                                </div>
                                <p className="text-gray-300">
                                    {getSkillDescription(hoveredSkill.name)}
                                </p>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
};

// Helper function for skill descriptions
function getSkillDescription(skillName) {
    const descriptions = {
        'React': 'A JavaScript library for building user interfaces with reusable components and virtual DOM.',
        'Next.js': 'The React framework for production - enables server-side rendering and static site generation.',
        'Tailwind': 'A utility-first CSS framework for rapidly building custom designs without leaving your HTML.',
        'Vite': 'Next generation frontend tooling with instant server start and lightning fast HMR.',
        'Firebase': 'Google\'s mobile and web application development platform with realtime database and authentication.',
        'MongoDB': 'A NoSQL document database that provides high performance and scalability.',
        'JavaScript': 'The programming language of the web, enabling interactive and dynamic content.',
        'HTML5': 'The latest evolution of the standard markup language for creating web pages.',
        'CSS3': 'The language for styling web pages with advanced layout and animation capabilities.',
        'Python': 'A high-level programming language known for its readability and versatility.',
        'C': 'A general-purpose programming language that provides low-level access to memory.',
        'R': 'A language and environment for statistical computing and graphics.',
        'GitHub': 'A platform for version control and collaboration using Git repositories.'
    };

    return descriptions[skillName] || `Expertise in ${skillName} for modern web development.`;
}

export default Service;