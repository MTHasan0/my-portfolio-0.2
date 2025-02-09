
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
        <div className='mx-auto mb-24 lg:mb-0'>
            <SliderMotion />

            <motion.div
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 1 }}
            >
                {
                    project.map((project, index) => (
                        <motion.div
                            className=''
                            key={project.id}
                            variants={cardVariants}
                            initial="hidden"
                            animate="visible"
                            transition={{ type: "spring", stiffness: 300, delay: index * 0.2 }}
                        >
                            <ProjectCard project={project}></ProjectCard>
                        </motion.div>
                    ))


                }
            </motion.div>

        </div>
    );

};

export default Project;