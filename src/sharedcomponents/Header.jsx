import React from 'react';
import Marquee from 'react-fast-marquee';
import { TypeAnimation } from 'react-type-animation';

const Header = () => {
    const today = new Date();
    const day=['Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
    const month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    return (
        <div>
            <div className='flex flex-col gap-12 justify-center items-center'>
                <img className='mt-12' src="https://i.ibb.co.com/xtWNVGfx/logo.png" alt="todays news logo"  />
                <h3 className='text-xl text-gray-400 '>Journalism Without Fear of Favour</h3>
                <p className='text-2xl'><span>{day[today.getDay()]}</span>, <span className='text-gray-600'>{month[today.getMonth()]} {today.getDate()},  {today.getFullYear()}</span> </p>
            </div>
            <div className='bg-gray-300 max-w-6xl mx-auto mt-8 p-5 flex gap-6'>
                <button className='bg-red-500 px-5 py-3 text-xl text-white font-bold'>Latest</button>
                <Marquee speed={100} pauseOnHover>As Founder of Secure Your Load, Robin Abel wishes to share a personal message this year.  This year marks 20 years since my daughter Maria was critically injured by an unsecured load, driving home from work.  That event changed our lives forever.</Marquee>
            </div>
        </div>
    );
};

export default Header;