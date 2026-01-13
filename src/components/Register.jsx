import React, { useContext, useState } from 'react';
import { NavLink, Link } from 'react-router';
import { AuthContext } from '../Provider/AuthContext';
import Navbar2 from '../sharedcomponents/Navbar2';
const Register = () => {
    const [user, setUser] = useState(null);
    const [errormessage, setErrormessage] = useState('')
    
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
            
            {/* navbar */}
                <Navbar2></Navbar2>
         
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