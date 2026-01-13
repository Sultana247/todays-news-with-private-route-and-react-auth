import React, { useContext } from 'react';
import { NavLink } from 'react-router';
import { AuthContext } from '../Provider/AuthContext';

const Navbar = () => {
    const {user, logout} = useContext(AuthContext);
    const navbarItems =<>
    <li><NavLink to='/'>Home</NavLink></li>
    <li><NavLink to='/about'>About</NavLink></li>
    <li><NavLink to='/career'>Career</NavLink></li>
    </>
    const handlelogout =()=>{
        logout()
        .then(res=>console.log(res))
        .catch(error=>console.log(error))
    }
    return (
        <div className='max-w-6xl mx-auto mt-5 mb-5'>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow font-bold text-gray-400 text-xl">
                        {navbarItems}
                    </ul>
                    </div>
                    
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-gray-400 text-xl font-bold">
                    {navbarItems}
                    </ul>
                </div>
                <div className="navbar-end ">
                    {user ? 
                    <>
                    {user.displayName? user.displayName : user.reloadUserInfo?.providerUserInfo[0]?.screenName ? user.reloadUserInfo.providerUserInfo[0].screenName : user.email }
                    <button onClick={handlelogout}><a className="bg-gray-900 px-6 py-3 text-white">Logout</a></button>
                    </>
                    :
                    <>
                    <img className='mr-5' src="https://i.ibb.co.com/KckPb7BT/user.png" alt="user profile picture" />
                    <NavLink to='/login'><a className="bg-gray-900 px-6 py-3 text-white">Login</a></NavLink>
                    </>
                    }
                    
                </div>
            </div>
        </div>
    );
};

export default Navbar;