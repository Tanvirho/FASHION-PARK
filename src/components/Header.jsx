import React from 'react'
import backGroundImage from '../assets/hero-4.png'


function Header() {
  return (
    <div className=' relative overflow-hidden min-h-screen mb-4 bg-cover bg-center w-full' style={{ backgroundImage: `url(${backGroundImage})` }}>
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="hero absolute top-40 left-15">
        <h5 className='text-2xl font-bold md:font-bold md:text-3xl text-white'>NEW ARRIVALS ONLY</h5>
        <h1 className='font-bold text-5xl md:font-bold md:text-7xl text-white leading-20 md:leading-23 '>New <br /> Collections <br /> For Everyone</h1>
        <a href="#"><button className='cursor-pointer font-bold text-white text-2xl mt-10 border-2 border-indigo-500 bg-indigo-500 rounded-full text-center w-70 h-13 hover:bg-transparent'>Latest Collection {'>>>'}</button></a>
      </div>
    </div>



  )
}

export default Header