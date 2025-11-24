import React from 'react'
import newCollection from '../assets/newCollection'
import Item from './Item'

function Collections() {
  return (
    <div>
      <h1 className='font-bold text-4xl text-center'>NEN COLLECTION</h1>
      <hr className='hr-line w-[200px] mx-auto mt-2 text-indigo-500' />
              <div className="itmes flex-wrap flex justify-between container mx-auto mt-10">
          {newCollection.map((item, i) => (
            <Item key={i} id={item.id} image={item.image} name={item.name} new_price={item.new_price} old_price={item.old_price}/>
          ))}
        </div>
    </div>
  )
}

export default Collections