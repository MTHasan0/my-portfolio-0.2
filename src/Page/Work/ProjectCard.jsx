import React from "react";
import { FaArrowRight, FaCircleNotch } from "react-icons/fa6";
import { Link } from "react-router-dom";

const ProjectCard = ({ project }) => {
    const { name, photo, language, framework, github, live } = project;

    return (
        <div className="flex justify-center my-4  mx-4">
            {/* Card Container */}
            <div className="card w-full max-w-4xl shadow-lg bg-white bg-opacity-10 text-white">
                <div className="flex flex-col md:flex-row p-4 gap-4 ">
                    {/* Image Section */}
                    <div className="flex justify-center md:justify-start border-r-0 md:border-r border-slate-300 pr-0 md:pr-4">
                        <figure className="lg:w-48 lg:h-48">
                            <img src={photo} alt={name} className="rounded-lg" />
                        </figure>
                    </div>

                    {/* Content Section */}
                    <div className="card-body p-0 md:p-4">
                        <h2 className="card-title text-xl md:text-2xl">{name}</h2>
                        <p className="text-sm md:text-base">{language}</p>

                        {/* Buttons Section */}
                        <div className="flex flex-col md:flex-row gap-2 mt-4">
                            <div className="badge badge-outline h-8 w-full md:w-36 hover:bg-gradient-to-r from-rose-400 to-rose-800 font-bold hover:border-0">
                                {framework}
                            </div>
                            <a
                                href={github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="badge badge-outline h-8 w-full md:w-36 font-bold hover:bg-gradient-to-r from-rose-400 to-rose-800 hover:border-0 hover:text-white text-center"
                            >
                                GitHub
                            </a>
                            <a
                                href={live}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="badge badge-outline h-8 w-full md:w-36 font-bold hover:bg-gradient-to-r from-rose-400 to-rose-800 hover:border-0 hover:text-white text-center"
                            >
                                Live Demo
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;