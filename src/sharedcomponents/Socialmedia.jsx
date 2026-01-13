import React from 'react';
import { FcGoogle } from "react-icons/fc";
import { FaGithub, FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
const Socialmedia = () => {
    return (
        <div>
            <h3 className='font-bold text-xl md:text-2xl mb-5'>Login With</h3>
            <div>
                <div className='flex gap-2 border border-gray-400 p-1 rounded-sm justify-center items-center'>
                    <FcGoogle/>
                    <p>Login with Google</p>
                </div>
                <div className='flex gap-2 border border-gray-400 p-1 rounded-sm justify-center items-center mt-5'>
                    <FaGithub />
                    <p>Login with GitHub</p>
                </div>
            </div>
            <h3 className='font-bold text-xl md:text-2xl mb-5 mt-8'>Find Us On</h3>
            <div>
                {/* facebook */}
                    <div className='border border-gray-200 flex gap-4 items-center p-4'>
                    <div className='rounded-full size-6 bg-gray-300 flex justify-center items-center text-blue-500 text-lg p-2'><FaFacebookF/></div>
                    <p className='text-xl text-gray-400'>Facebook</p>
                </div>
                {/* twitter */}
                    <div className='border border-gray-200 flex gap-4 items-center p-4'>
                    <div className='rounded-full size-6 bg-gray-300 flex justify-center items-center text-blue-400 text-lg p-2'><FaTwitter/></div>
                    <p className='text-xl text-gray-400'>Twitter</p>
                </div>
                {/* instagram */}
                    <div className='border border-gray-200 flex gap-4 items-center p-4'>
                    <div className='rounded-full size-6 bg-gray-300 flex justify-center items-center text-amber-700 text-lg p-2'><FaInstagram/></div>
                    <p className='text-xl text-gray-400'>Instagram</p>
                </div>
            </div>
            <div className='bg-gray-300 mt-5'>
                <div className='p-5'>
                    <h3 className='font-bold text-xl md:text-2xl mb-5'>Q-Zone</h3>
                    <div className='flex flex-col gap-6'>
                        <img src="https://i.ibb.co.com/ZpK18ZDY/playground.png" alt="" />
                        <img src="https://i.ibb.co.com/LzGnNcCp/class.png" alt="" />
                        <img src="https://i.ibb.co.com/r2V1TTnM/swimming.png" alt="" />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Socialmedia;