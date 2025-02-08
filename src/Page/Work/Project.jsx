import React, { useEffect, useState } from 'react';
import SliderMotion from '../../Components/SliderMotion/SliderMotion';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';

const Project = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('/Data/ProjectData.json') // Fetch from the public folder
            .then((response) => response.json())
            .then((data) => {
                setProjects(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching project data:', error);
                setLoading(false);
            });
    }, []);

    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className='mx-auto'>
            <SliderMotion />

            <motion.div
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 1 }}
            >
                <div>
                    {projects && projects.length > 0 ? (
                        projects.map((project, index) => (
                            <motion.div
                                key={project.id || index}
                                variants={cardVariants}
                                initial="hidden"
                                animate="visible"
                                transition={{ type: "spring", stiffness: 300, delay: index * 0.2 }}
                            >
                                <ProjectCard project={project}></ProjectCard>
                            </motion.div>
                        ))
                    ) : (
                        <div>No project data available.</div>
                    )}
                </div>
            </motion.div>
        </div>
    );
};

export default Project;