import React, { useEffect, useState } from 'react';
import Header from '../sharedcomponents/Header';
import Navbar from '../sharedcomponents/Navbar';
import { useLoaderData } from 'react-router';
import Marquee from 'react-fast-marquee';
import News from './News';
import './category.css'
import Socialmedia from '../sharedcomponents/Socialmedia';
const Home = () => {
    const data = useLoaderData();
    const [news, setNews] = useState([]);

    const categories = data.data.news_category;
    const handleCategory =(Id)=>{
        const categoryId= Id;
       
        if(categoryId){
            fetch(`https://openapi.programming-hero.com/api/news/category/${categoryId}`)
            .then(result=>result.json())
            .then(catnews=>setNews(catnews.data))
        }
    }
    useEffect(()=>{
        fetch('https://openapi.programming-hero.com/api/news/category/01')
        .then(result => result.json())
        .then(readnews=>setNews(readnews.data))
    },[])
    return (
        <div>
            <Header></Header>
            <div className='bg-gray-300 max-w-6xl mx-auto mt-8 p-5 flex gap-6'>
                <button className='bg-red-500 px-5 py-3 text-xl text-white font-bold'>Latest</button>
                <Marquee speed={100} pauseOnHover>
                    <p>Iran warns it will retaliate if US attacks, as hundreds killed in protests...</p>
                    <p>Thousands march and dozens arrested in Minneapolis protests against ICE... </p>
                </Marquee>
            </div>
            <Navbar></Navbar>
            {/* home layouts */}
            <div className='max-w-6xl mx-auto'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full'>
                <div className='col-span-1'>
                    <h3 className='font-bold text-xl md:text-2xl mb-5'>All Category</h3>
                    {
                        categories.map(category=><div className='text-left '>
                                                    <div className=''>
                                                        <button onClick={()=>handleCategory(category.category_id)}><p className='category className="w-2/3 py-2 px-8'>{category.category_name}</p></button>
                                                    </div>
                                                </div>)
                    }
                </div>
                <div className='col-span-2'>
                    <h3 className='font-bold text-xl md:text-2xl'>Todays News Home</h3>
                    <div className='mt-5'>
                        {

                        news.map(anews=><News anews={anews} key={anews._id}></News>)
                        }
                    </div>
                </div>
                <div>
                    <Socialmedia></Socialmedia>
                    <div className='p-5'>
                        <img src="https://i.ibb.co.com/SXBkHxmr/bg.png" alt="" />
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Home;