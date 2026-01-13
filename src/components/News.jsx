import React from 'react';
import { CiBookmark, CiShare2 } from "react-icons/ci";
import { Link } from 'react-router';

const News = ({anews}) => {
    console.log(anews);
    const {image_url, author, title, details, _id} = anews;
    return (
        <div>
            <div className=" shadow-sm mb-5">
                <div className='flex gap-3 items-center p-5 bg-slate-200'>
                    <div className='navbar-start flex gap-2'>
                        <img className='size-8 ' src={author.img} alt="user who posted" />
                        <div className='flex flex-col '>
                            <p>{author.name}</p>
                            <p>{author.published_date}</p>
                        </div>
                    </div>
                    <div className='navbar-end flex gap-3 text-2xl'>
                        {/* icons */}
                        <CiBookmark />
                        <CiShare2 />
                    </div>
                </div>
                <div className='p-5'>
                    <h2 className='mt-5 mb-5 font-bold text-2xl'>{title}</h2>
                    <figure>
                        <img className='mt-5'
                        src={image_url}
                        alt="Shoes" />
                    </figure>
                    <div className="">
                        
                        <p className='text-gray-500 text-lg'>{details.slice(0,200)}...</p>
                        <Link to={`/news/${_id}`} className='text-amber-600 text-xl'>Read More</Link>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default News;