import React from 'react'
import logo from '../assets/logo-2.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons'

function Footer() {
    let currentYear = new Date().getFullYear();
    return (
        <div className='mb-20'>
            <img className='w-50 mx-auto' src={logo} alt="" />
            <ul className='flex-wrap flex justify-center space-x-6 mt-2'>
                <a href="#"><li className='hover:text-indigo-500'>Company</li></a>
                <a href="#"><li className='hover:text-indigo-500'>Products</li></a>
                <a href="#"><li className='hover:text-indigo-500'>Offices</li></a>
                <a href="#"><li className='hover:text-indigo-500'>About</li></a>
                <a href="#"><li className='hover:text-indigo-500'>Contact</li></a>
            </ul>
            <ul className='flex justify-center space-x-6 mt-7'>
                <a href="#"><li><FontAwesomeIcon className='text-3xl mt-1 hover:text-indigo-700' icon={faFacebook}/></li></a>
                <a href="#"><li><FontAwesomeIcon className='text-3xl mt-1 hover:text-indigo-700' icon={faInstagram}/></li></a>
                <a href="#"><li><FontAwesomeIcon className='text-3xl mt-1 hover:text-indigo-700' icon={faWhatsapp}/></li></a>
            </ul>
            <hr className='w-[80%] mt-10 text-gray-400 mx-auto' style={{ borderTopWidth: '2px'}} />
            <p className='text-center mt-8 text-gray-800'>Copyright © {currentYear} - All right Reserved</p>
            
        </div>
    )
}

export default Footer