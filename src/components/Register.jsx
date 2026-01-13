import React, { useContext, useState } from 'react';
import { NavLink, Link } from 'react-router';
import { AuthContext } from '../Provider/AuthContext';
const Register = () => {
    const [user, setUser] = useState(null);
    const [errormessage, setErrormessage] = useState('')
    const navbarItems =<>
    <li><NavLink to='/'>Home</NavLink></li>
    <li><NavLink to='/about'>About</NavLink></li>
    <li><NavLink to='/career'>Career</NavLink></li>
    </>
    const {createUser} = useContext(AuthContext);
    const handleRegister =e=>{
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const photo = e.target.photo.value;
        const checkbox=e.target.check.checked;
        setErrormessage('')
        console.log(name, email, password, photo, checkbox)
        if(!checkbox){
            setErrormessage('please accept all terms and conditions')
            return ;
        }
        createUser(email, password)
        .then(result=>{
            setUser(result.user)
    })
        .catch(error=>setErrormessage(error.message))
    }
    return (
        <div className='bg-gray-200'>
            <div className='max-w-6xl mx-auto'>
            {/* navbar */}
                <div className='  '>
                    <div className="navbar bg-gray-200 ">
                        <div className="navbar-start mt-5 ">
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
                        <div className="navbar-center hidden lg:flex bg-gray-200">
                            <ul className="menu menu-horizontal px-1 text-gray-400 text-xl font-bold">
                            {navbarItems}
                            </ul>
                        </div>
                        <div className="navbar-end bg-gray-200">
                            <img className='mr-5' src="https://i.ibb.co.com/KckPb7BT/user.png" alt="user profile picture" />
                            <NavLink to='/login'><a className="bg-gray-900 px-6 py-3 text-white">Login</a></NavLink>
                        </div>
                    </div>
                </div>
            </div>
         
         {/* login form  */}
            <div className='flex justify-center items-center mt-25 bg-gray-200 '>
                
                <form onSubmit={handleRegister} className="fieldset bg-base-200 border-base-300 rounded-box p-15 border w-1/3 mb-55 ">
                    <legend className=" text-2xl text-center font-bold ">Register your account</legend>
                    <div className='border border-gray-300 mt-8 mb-8'></div>

                    <div className='flex flex-col '>
                        <label className="label">Your Name</label>
                        <input name='name' type="text" className="input " placeholder="Enter your name" required />
                        <label className="label mt-5">Photo url</label>
                        <input name='photo' type="text" className="input " placeholder="Enter your photo" />

                        <label className="label mt-5">Email Address</label>
                        <input name='email' type="email" className="input " placeholder="Enter your email address" required/>

                        <label className="label mt-5">Password</label>
                        <input name='password' type="password" className="input " placeholder="Enter your Password" required/>
                        <div className='flex gap-4 mt-3'>
                            <input name='check' type="checkbox" />
                        <p> Accept terms & conditions</p>
                        </div>
                    </div>
                    
                    <button type='submit' className="btn btn-neutral mt-4">Register</button>
                    {errormessage && <p className='text-red-700 mt-4'>{errormessage}</p>}
                    {user && <p className='text-green-700 mt-4'>{user.email} registered successfully <Link to='/login' className='text-blue-700'>Login now</Link> </p>}
                </form>
            </div>
        </div>
    );
};

export default Register;