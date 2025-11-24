import React from 'react'

function Newletter() {
  return (
    <div className='newletter container mx-auto w-screen mt-30 h-90 text-center'>
      <h1 className='pt-20 text-4xl font-medium'>Get Exclusive Offers on Your Email</h1>
      <p className=' mt-6 font-medium'>Subscribe to our newletter and stay updated</p>
      <div className='border-1 mt-7 w-[80%] md:w-[50%] h-auto rounded-full mx-auto flex justify-between overflow-hidden'>
        <input type="email" className='ml-3 outline-none  w-[60%]' placeholder='Your Email Id' />
        <button className='cursor-pointer bg-black text-white rounded-full w-40 h-13'>Subscribe</button>
      </div>
    </div>
  )
}

export default Newletter