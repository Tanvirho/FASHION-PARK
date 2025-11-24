import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Login = () => {

    const [passwordShow, passwordHiden] = useState(false);
    const togglePassword = () => {
        passwordHiden(!passwordShow);
    }

    return (
        <div className='bg-indigo-400 h-screen flex items-center p-4 md:p-0'>
            <div className="container mx-auto bg-white h-auto mt-15 w-140 p-10 rounded-bl-[50px] rounded-tr-[50px]">
                <h1 className='text-3xl font-medium'>Login</h1>
                <form className='mt-3' action="">
                    <input className='login-singup-input' type="email" name="" id="" placeholder='Email Address' required="required" />
                    <div className='relative'>
                        <input className='relative login-singup-input' type={passwordShow ? 'text' : 'password'} name="" id="" placeholder='Password' required="required" />
                        <FontAwesomeIcon className='absolute top-9 right-3 text-[21px] text-gray-600 cursor-pointer' icon={passwordShow ? faEyeSlash : faEye} onClick={togglePassword} />
                    </div>
                    <button className='w-full bg-indigo-500 mt-5 h-14 font-medium text-white text-[18px] cursor-pointer hover:text-indigo-500 hover:border-indigo-500 border-2 hover:bg-white transition-all'>Login</button>
                    <p className='text-gray-500 text-[15px] mt-5'>I have no an account? <span className='text-indigo-900 font-medium cursor-pointer'><Link to="/Signup">Sign Up</Link></span></p>
                    <div className='flex'>
                        <input className='cursor-pointer mr-2 mt-4' type="checkbox" required="required" />
                        <p className='text-[14px] text-gray-500 mt-4'>Keep me Logged in</p>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default Login