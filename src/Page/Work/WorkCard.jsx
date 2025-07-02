import React from 'react';
import { motion } from 'framer-motion';

const WorkCard = ({ publication }) => {
    const { title, author, image, published_date } = publication;

    return (
        <div className="h-full flex flex-col">
            <div className="relative h-48 overflow-hidden">
                <motion.img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <motion.div
                        className="badge badge-accent"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.3 }}
                    >
                        {published_date}
                    </motion.div>
                </div>
            </div>

            <div className="p-6 flex-grow">
                <motion.h3
                    className="text-xl font-bold mb-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                >
                    {title}
                </motion.h3>
                <motion.p
                    className="text-gray-600 mb-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.25 }}
                >
                    {author}
                </motion.p>

                <motion.div
                    className="mt-auto"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                >
                    <button className="btn btn-primary w-full">
                        View Details
                    </button>
                </motion.div>
            </div>
        </div>
    );
};

export default WorkCard;