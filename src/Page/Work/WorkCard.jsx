import React from 'react';
import ProjectCard from './ProjectCard';

const WorkCard = ({ publication }) => {

    const { title, author, image, published_date } = publication;

    return (
        <div className=' flex my-2  justify-center mx-auto gap-2'>
            <div className="card bg-base-100  w-[80%]  ">

                <div className=' flex justify-between pl-6'>
                    <div className='  border-r border-slate-300 pr-2'>
                        <figure className=' w-52 h-52'>
                            <img src={image} alt="" />
                        </figure>
                    </div>
                    <div className="card-body ">
                        <h2 className="card-title">
                            <p>{title}</p>
                        </h2>
                        <p>{author}</p>
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline w-36">{published_date}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WorkCard;