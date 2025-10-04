import React from 'react'
import { Link } from 'react-router-dom'

function Item(props) {
    return (
        <div className="w-40 md:w-60 mt-4 mx-auto hover:scale-105 transition-all">
           <Link to={`/Product/${props.id}`}><img className='w-40 md:w-60' src={props.image} alt={props.name}/></Link>
            <h1 className='text-[20px] md:text-[20px] mt-2 '>{props.name}</h1>
            <div className="flex space-x-2 mt-2">
                <p className='text-[19px]'>${props.new_price}</p>
                <p className='text-gray-500 line-through'>${props.old_price}</p>
            </div>
        </div>
    )
}

export default Item