import React from 'react'
import Item from './Item';
import Data from '../assets/data'


export default function RelatedProduct(props) {


    return (
        <div className='mt-40 mb-5'>
            <h2 className='font-bold text-4xl text-center'>Related Products</h2>
            <hr className='hr-line w-[200px] mx-auto mt-2 text-indigo-500' />
            <div className="products flex-wrap flex justify-between container mx-auto mt-10">
                {Data.map((item, i) => (
                    <Item key={i} id={item.id} image={item.image} name={item.name} new_price={item.new_price} old_price={item.old_price} onClick={window.scrollTo(0,0)}/>
                ))}
            </div>
        </div>
    )
}
