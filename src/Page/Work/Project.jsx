
import SliderMotion from '../../Components/SliderMotion/SliderMotion';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import project from '../../assets/Data/ProjectData.json'
import { Link } from 'react-router-dom';
import { FaArrowRight, FaCircleNotch } from 'react-icons/fa6';

const Project = () => {

    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
    };


    return (
        // 1st design
        // <div className='mx-auto mb-24 lg:mb-0'>
        //     <SliderMotion />

        //     <motion.div
        //         initial={{ y: -100, opacity: 0 }}
        //         animate={{ y: 0, opacity: 1 }}
        //         transition={{ duration: 0.5, delay: 1 }}
        //     >
        //         {
        //             project.map((project, index) => (
        //                 <motion.div
        //                     className=''
        //                     key={project.id}
        //                     variants={cardVariants}
        //                     initial="hidden"
        //                     animate="visible"
        //                     transition={{ type: "spring", stiffness: 300, delay: index * 0.2 }}
        //                 >


        //                     <ProjectCard project={project}></ProjectCard>

        //                 </motion.div>
        //             ))


        //         }
        //     </motion.div>

        // </div>
        // 2nd design
        // <section className="w-full px-4 py-12 max-w-7xl mx-auto">
        //     <h2 className="text-3xl font-bold text-white mb-8 text-center">Projects</h2>
        //     <motion.div
        //         className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
        //         initial="hidden"
        //         animate="visible"
        //         variants={{
        //             visible: {
        //                 transition: {
        //                     staggerChildren: 0.1
        //                 }
        //             }
        //         }}
        //     >
        //         {project.map((project, index) => (
        //             <ProjectCard key={project.name} project={project} index={index} />
        //         ))}
        //     </motion.div>
        // </section>
        // 3rd design
        // <section className="w-full px-4 py-12 max-w-7xl mx-auto">
        //     <h2 className="text-3xl font-bold text-white mb-10 text-center">Projects</h2>
        //     <motion.div
        //         className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[1fr]"
        //         initial="hidden"
        //         animate="visible"
        //         variants={{
        //             visible: {
        //                 transition: { staggerChildren: 0.1 }
        //             }
        //         }}
        //     >
        //         {project.map((project, index) => (
        //             <motion.div
        //                 key={project.name}
        //                 className={`${index % 5 === 0 || index % 5 === 3 ? "row-span-2" : "row-span-1"
        //                     }`}
        //                 variants={{
        //                     hidden: { opacity: 0, y: 20 },
        //                     visible: {
        //                         opacity: 1,
        //                         y: 0,
        //                         transition: {
        //                             type: "spring",
        //                             stiffness: 100,
        //                             damping: 14,
        //                             delay: index * 0.05
        //                         }
        //                     }
        //                 }}
        //             >
        //                 <ProjectCard project={project} index={index} />
        //             </motion.div>
        //         ))}
        //     </motion.div>
        // </section>
        <section className="max-w-7xl mx-auto px-4 py-16">
            <SliderMotion />
            <h2 className="text-3xl font-bold text-white mb-10 text-center">Projects</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
                {project.map((project, index) => (
                    <ProjectCard key={project.name} project={project} index={index} />
                ))}
            </div>
        </section>
    );

};

export default Project;

