import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons';
import { ShopContext } from '../context/ShopContext';

function ProductDisplay(props) {

  const { product } = props;
  const{addToCart} = useContext(ShopContext);
  return (
    <div className="block md:flex">
      <div className="left-side ml-2 mr-10 flex">
        <div>
          <img className='side-img' src={product.image} alt={product.name} />
          <img className='side-img' src={product.image} alt={product.name} />
          <img className='side-img' src={product.image} alt={product.name} />
        </div>
        <div>
          <img className='w-100 ml-8 mt-5' src={product.image} alt={product.name} />
        </div>
      </div>
      <div className="right-side mt-4 ml-4">
        <h1 className='font-medium text-gray-800  text-3xl'>{product.name}</h1>
        <FontAwesomeIcon className='text-amber-500' icon={faStar} />
        <FontAwesomeIcon className='text-amber-500' icon={faStar} />
        <FontAwesomeIcon className='text-amber-500' icon={faStar} />
        <FontAwesomeIcon className='text-amber-500' icon={faStar} />
        <FontAwesomeIcon className='text-amber-500' icon={faStarHalfStroke} />
        <div className="flex space-x-2 mt-4">
          <p className='text-gray-500 line-through text-2xl font-medium'>${product.old_price}</p>
          <p className='text-2xl font-medium text-indigo-800'>${product.new_price}</p>
        </div>
        <p className='text-[14px] mt-4 font-medium text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet.</p>
        <div className="mt-5">
          <p className='font-medium text-[20px]'>Select Size</p>
          <div className='flex space-x-4 mt-4 mr-2'>
            <button className='size-section'>S</button>
            <button className='size-section'>M</button>
            <button className='size-section'>L</button>
            <button className='size-section'>XL</button>
            <button className='size-section'>XXL</button>
          </div>
          <button className='bg-indigo-500 p-3 mt-5 font-medium text-[19px] cursor-pointer text-white' onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
        </div>
      </div>
    </div>
  )
}

export default ProductDisplay