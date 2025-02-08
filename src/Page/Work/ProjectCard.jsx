import React from "react";

const ProjectCard = ({ project }) => {
    if (!project) {
        return <div className=" text-white">No data available.</div>;
    }

    const { name, photo, language, framework, tools, github, live } = project;
    return (
        <div className='flex my-2 justify-center mx-auto gap-2'>
            <div className="card bg-base-100 w-[40%]">
                <div className='flex justify-between pl-6'>
                    <div className='border-r border-slate-300 pr-2'>
                        <figure className='w-52 h-52'>
                            <img src={photo} alt={name} />
                        </figure>
                    </div>
                    <div className="card-body">
                        <h2 className="card-title">{name}</h2>
                        <p>{language}</p>
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline w-36">{framework}</div>
                        </div>
                        <div className="card-actions justify-end">
                            <a href={github} target="_blank" rel="noopener noreferrer" className="badge badge-outline w-36">
                                GitHub
                            </a>
                        </div>
                        <div className="card-actions justify-end">
                            <a href={live} target="_blank" rel="noopener noreferrer" className="badge badge-outline w-36">
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