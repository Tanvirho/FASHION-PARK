import React from 'react'
import productsData from '../assets/data'
import Item from './Item'


function Popular() {

  return (
    <div className='mt-40 mb-5'>
      <h2 className='font-bold text-4xl text-center'>POPULAR IN WOMEN</h2>
      <hr className='hr-line w-[200px] mx-auto mt-2 text-indigo-500' />
        <div className="items flex-wrap flex justify-between container mx-auto mt-10">
          {productsData.map((item, i) => (
            <Item key={i} id={item.id} image={item.image} name={item.name} new_price={item.new_price} old_price={item.old_price}/>
          ))}
        </div>
    </div>
  )
}

export default Popular