import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

const CartItems = () => {


    const { allProducts, cartItems, removeFromCart, getTotalCartAmonut} = useContext(ShopContext)

    return (
        <div className='container mx-auto p-4'>

            {/* 1. Header Row: Used flex and fractional widths for alignment */}
            <div className="mt-30 flex items-center border-b pb-2 text-gray-600 font-semibold text-sm">
                {/* Ensure the total width of all columns equals 100% (or equivalent) */}
                <p className='w-1/6'>Products</p>
                <p className='w-1/4'>Title</p>
                <p className='w-1/6 text-center'>Price</p>
                <p className='w-1/6 text-center'>Quantity</p>
                <p className='w-1/6 text-right'>Total</p>
                <p className='w-[5%] text-right ml-4'>Remove</p>
                <div className='w-[5%]'></div> {/* Optional spacer for right edge */}
            </div>
            <hr className='mb-4' />

            {allProducts.map((e) => {
                if (cartItems[e.id] > 0) {
                    return (
                        // 2. Item Row: Applied 'key' and matching fractional widths for perfect alignment
                        <div key={e.id} className='flex items-center py-4 border-b'>

                            {/* Product Image - w-1/6 */}
                            <div className='w-1/6'>
                                <img src={e.image} alt={e.name} className='w-16 h-16 object-cover rounded' />
                            </div>

                            {/* Title - w-1/4 */}
                            <p className='w-1/4 text-sm font-medium'>{e.name}</p>

                            {/* Price - w-1/6 */}
                            <p className='w-1/6 text-center text-gray-700'>
                                ${e.new_price.toFixed(2)}
                            </p>

                            {/* Quantity - w-1/6 */}
                            <div className='w-1/6 flex justify-center'>
                                {/* FIX: Replaced invalid w-30, border-1 with standard Tailwind classes */}
                                <button className='px-3 py-1 border border-gray-400 rounded bg-gray-100 text-sm'>
                                    {cartItems[e.id]}
                                </button>
                            </div>

                            {/* Total Price - w-1/6 */}
                            <p className='w-1/6 font-semibold text-right'>
                                ${(e.new_price * cartItems[e.id]).toFixed(2)}
                            </p>

                            {/* Remove Icon - w-[5%] */}
                            <div className='w-[5%] flex justify-end'>
                                <FontAwesomeIcon
                                    icon={faXmark}
                                    className='cursor-pointer text-indigo-500 hover:text-red-700'
                                    onClick={() => { removeFromCart(e.id) }}
                                />
                            </div>
                            <div className='w-[5%]'></div> {/* Spacer to match header */}

                        </div>
                    )
                }
                return null;
            })}
            <div className="flex flex-wrap mt-15">
                <div className="w-[50%]">
                    <h1 className='font-medium text-2xl'>Cart Totals</h1>
                    <div className="mt-5">
                        <div className="flex justify-between">
                            <p className='text-[16px] text-gray-700'>Subtotal</p>
                            <p className='text-[16px] text-gray-700'>${getTotalCartAmonut()}</p>
                        </div>
                        <hr className='mt-4 mb-4 text-gray-600' />
                        <div className="flex justify-between">
                            <p className='text-[16px] text-gray-700'>shipping fee</p>
                            <p className='text-[16px] text-gray-700'>Free</p>
                        </div>
                        <hr className='mt-4 mb-4 text-gray-600' />
                        <div className="flex justify-between">
                            <p className='text-[18px] text-gray-900 font-medium'>Total</p>
                            <p className='text-[18px] text-gray-900 font-medium'>${getTotalCartAmonut()}</p>
                        </div>
                        <button className='cursor-pointer bg-indigo-500 mt-8 p-4 font-medium text-white'>PROCEED TO CHCEKOUT</button>
                    </div>
                </div>
                <div className="pl-10 pt-15">
                    <p className='text-gray-600'>If you have a promo code, Enter it here</p>
                    <div className='border-1 mt-4  h-auto rounded-full mx-auto flex justify-between'>
                        <input type="text" className='ml-3 outline-none  w-[60%]' placeholder='Promo Code' />
                        <button className='cursor-pointer bg-black text-white rounded-full w-40 h-13'>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItems