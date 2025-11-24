import React from 'react'
import backgroundImage from '../assets/hero-3.png'

function Offer() {
    return (
        <div className='relative container my-40 mx-auto bg-cover bg-center w-full h-[550px]' style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className="absolute inset-0 bg-black opacity-40"></div>
            <div className="hero absolute top-35 left-15">
                <h1 className='font-medium text-6xl text-white leading-18'>Exclusive <br /> Offers For You</h1>
                <h2 className='font-bold text-[20px] text-white mt-4'>ONLY ON BEST SELLERS PRODUCTS</h2>
                <a href="#"><button className='cursor-pointer font-medium text-white text-2xl mt-8 border-2 border-indigo-500 bg-indigo-500 rounded-full text-center w-60 h-13 hover:bg-transparent'>Check Now</button></a>
            </div>
        </div>
    )
}

export default Offer