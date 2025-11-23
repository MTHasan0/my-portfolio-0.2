// import React from "react";
// import { FaArrowRight, FaGithub, FaExternalLinkAlt } from "react-icons/fa";
// import { motion } from "framer-motion";

// const ProjectCard = ({ project, index }) => {
//     const { name, photo, language, framework, github, live } = project;

//     const cardVariants = {
//         hidden: {
//             opacity: 0,
//             x: -50,
//             scale: 0.95
//         },
//         visible: {
//             opacity: 1,
//             x: 0,
//             scale: 1,
//             transition: {
//                 type: "spring",
//                 stiffness: 120,
//                 damping: 12,
//                 delay: index * 0.15
//             }
//         },
//         hover: {
//             y: -5,
//             boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
//             transition: {
//                 duration: 0.3,
//                 ease: "easeOut"
//             }
//         }
//     };

//     return (
//         <motion.div
//             variants={cardVariants}
//             initial="hidden"
//             animate="visible"
//             whileHover="hover"
//             className="flex justify-center my-4 mx-4"
//         >
//             {/* Card Container with glow effect */}
//             <div className="relative">
//                 {/* Glow effect on hover */}
//                 <motion.div
//                     className="absolute inset-0 bg-gradient-to-br from-rose-400/20 to-rose-800/20 rounded-xl opacity-0 group-hover:opacity-60 blur-md -z-10"
//                     initial={{ opacity: 0 }}
//                     whileHover={{
//                         opacity: 0.6,
//                         transition: { duration: 0.4 }
//                     }}
//                 />

//                 {/* Main Card */}
//                 <div className="card w-full max-w-4xl shadow-lg bg-white bg-opacity-10 text-white border border-white/10 hover:border-rose-500/30 transition-all duration-300">
//                     <div className="flex flex-col md:flex-row p-4 gap-4">
//                         {/* Image Section with parallax effect */}
//                         <motion.div
//                             className="flex justify-center md:justify-start border-r-0 md:border-r border-slate-300 pr-0 md:pr-4"
//                             whileHover={{
//                                 scale: 1.03,
//                                 transition: { duration: 0.5 }
//                             }}
//                         >
//                             <figure className="lg:w-48 lg:h-48 overflow-hidden rounded-lg">
//                                 <motion.img
//                                     src={photo}
//                                     alt={name}
//                                     className="w-full h-full object-cover"
//                                     initial={{ scale: 1.1 }}
//                                     animate={{ scale: 1 }}
//                                     transition={{
//                                         duration: 0.8,
//                                         ease: [0.22, 1, 0.36, 1]
//                                     }}
//                                 />
//                             </figure>
//                         </motion.div>

//                         {/* Content Section */}
//                         <div className="card-body p-0 md:p-4">
//                             <motion.h2
//                                 className="card-title text-xl md:text-2xl mb-2"
//                                 whileHover={{
//                                     color: "#ec4899",
//                                     transition: { duration: 0.2 }
//                                 }}
//                             >
//                                 {name}
//                             </motion.h2>
//                             <motion.p
//                                 className="text-sm md:text-base text-gray-300 mb-4"
//                                 initial={{ opacity: 0 }}
//                                 animate={{ opacity: 1 }}
//                                 transition={{ delay: 0.2 + index * 0.15 }}
//                             >
//                                 {language}
//                             </motion.p>

//                             {/* Buttons Section */}
//                             <motion.div
//                                 className="flex flex-col md:flex-row gap-2 mt-4"
//                                 initial={{ opacity: 0, y: 10 }}
//                                 animate={{ opacity: 1, y: 0 }}
//                                 transition={{ delay: 0.3 + index * 0.15 }}
//                             >
//                                 <div className="badge badge-outline h-8 w-full md:w-36 hover:bg-gradient-to-r from-rose-400 to-rose-800 font-bold hover:border-0 transition-all duration-300">
//                                     {framework}
//                                 </div>
//                                 <a
//                                     href={github}
//                                     target="_blank"
//                                     rel="noopener noreferrer"
//                                     className="badge badge-outline h-8 w-full md:w-36 font-bold hover:bg-gradient-to-r from-rose-400 to-rose-800 hover:border-0 hover:text-white text-center transition-all duration-300 flex items-center justify-center gap-2"
//                                 >
//                                     <FaGithub /> Code
//                                 </a>
//                                 <a
//                                     href={live}
//                                     target="_blank"
//                                     rel="noopener noreferrer"
//                                     className="badge badge-outline h-8 w-full md:w-36 font-bold hover:bg-gradient-to-r from-rose-400 to-rose-800 hover:border-0 hover:text-white text-center transition-all duration-300 flex items-center justify-center gap-2"
//                                 >
//                                     <FaExternalLinkAlt /> Live
//                                 </a>
//                             </motion.div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </motion.div>
//     );
// };

// export default ProjectCard;


import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const ProjectCard = ({ project, index }) => {
    const { name, photo, language, framework, github, live } = project;

    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 120,
                damping: 12,
                delay: index * 0.1,
            }
        }
    };

    return (
        // <motion.div
        //     variants={cardVariants}
        //     whileHover={{ y: -5 }}
        //     className="group bg-white bg-opacity-10 border border-white/10 hover:border-rose-500/30 text-white rounded-xl overflow-hidden shadow-md transition-all duration-300 flex flex-col"
        // >
        //     <div className="h-48 overflow-hidden">
        //         <img
        //             src={photo}
        //             alt={name}
        //             className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        //         />
        //     </div>

        //     <div className="p-4 flex flex-col justify-between flex-grow">
        //         <div className="mb-4">
        //             <h3 className="text-xl font-semibold mb-1">{name}</h3>
        //             <p className="text-sm text-gray-300 mb-2">{language}</p>
        //             <span className="inline-block border border-white/30 px-3 py-1 text-xs rounded-full">
        //                 {framework}
        //             </span>
        //         </div>

        //         <div className="flex flex-wrap gap-2 mt-auto">
        //             <a
        //                 href={github}
        //                 target="_blank"
        //                 rel="noopener noreferrer"
        //                 className="flex items-center gap-2 px-4 py-1.5 border border-white/20 text-sm rounded hover:border-rose-500/30 hover:bg-gradient-to-r from-rose-400 to-rose-800 transition"
        //             >
        //                 <FaGithub />
        //                 Code
        //             </a>
        //             <a
        //                 href={live}
        //                 target="_blank"
        //                 rel="noopener noreferrer"
        //                 className="flex items-center gap-2 px-4 py-1.5 border border-white/20 text-sm rounded hover:border-rose-500/30 hover:bg-gradient-to-r from-rose-400 to-rose-800 transition"
        //             >
        //                 <FaExternalLinkAlt />
        //                 Live
        //             </a>
        //         </div>
        //     </div>
        // </motion.div>


        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            className="relative group"
        >
            {/* Image Container */}
            <div className="relative h-72 rounded-xl overflow-hidden">
                <img
                    src={photo}
                    alt={name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-30  transition-all group-hover:bg-opacity-50" />

                {/* Title Layered */}
                <div className="absolute bottom-4 p-4 z-10 bg-gray-700 bg-opacity-40 w-full">
                    <h3 className="text-2xl font-bold text-white">{name}</h3>
                    <p className="text-sm text-gray-300">{language}</p>
                </div>
            </div>

            {/* Footer Info */}
            <div className="mt-4 flex justify-between items-center">
                <span className="text-sm border border-white/30 px-3 py-1 rounded-full text-white">
                    {framework}
                </span>
                <div className="flex gap-2">
                    <a
                        href={github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-sm border border-white/20 px-3 py-1 text-white rounded hover:border-rose-500/30 hover:bg-gradient-to-r from-rose-400 to-rose-800 transition"
                    >
                        <FaGithub /> Code
                    </a>
                    <a
                        href={live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-sm border border-white/20 px-3 py-1 rounded text-white hover:border-rose-500/30 hover:bg-gradient-to-r from-rose-400 to-rose-800 transition"
                    >
                        <FaExternalLinkAlt /> Live
                    </a>
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectCard;


