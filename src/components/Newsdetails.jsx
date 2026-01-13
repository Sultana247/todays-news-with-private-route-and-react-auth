import React, { useEffect, useState } from 'react';
import Header from '../sharedcomponents/Header';
import Socialmedia from '../sharedcomponents/Socialmedia';
import { useParams } from 'react-router';
import { FaArrowLeft } from "react-icons/fa6";

const Newsdetails = () => {
    const _id = useParams();
    const [news, setNews] = useState([]);

    const id = _id._id;
    

    useEffect(()=>{
        fetch(`https://openapi.programming-hero.com/api/news/${id}`)
        .then(res=>res.json())
        .then(data=>setNews(data.data))
    },[])
    return (
        <div>
           <Header></Header>
           <div className='max-w-6xl mx-auto'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-8 gap-6'>
                    <div className='col-span-3'>
                        <h3 className='font-bold text-xl md:text-2xl mb-5'>Todays News</h3>
                        <div className=" shadow-sm mb-5">
                            {news.map(anews=> <div className='p-10'>
                                <h2 className='mt-5 mb-5 font-bold text-2xl'></h2>
                                <figure>
                                    <img className='mt-5'
                                    src={anews.image_url}
                                    alt="Shoes" />
                                </figure>
                                <div className="">
                                    <h2 className='mt-5 mb-5 font-bold text-2xl'>{anews.title}</h2>
                                    <p className='text-gray-500 text-lg'>{anews.details}</p>
                                    
                                    <button className='px-5 py-3 text-white bg-red-500 flex justify-center items-center mt-5 gap-2'><FaArrowLeft/> All News in this category</button>
                                </div>
                            </div>)}
                        </div>
                    </div>
                    <div>
                        <Socialmedia></Socialmedia>
                    </div>
                </div>
           </div>
        </div>
    );
};

export default Newsdetails;