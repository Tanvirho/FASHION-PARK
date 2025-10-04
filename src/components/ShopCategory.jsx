import React, { useState, useEffect, useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import Item from './Item';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

function ShopCategory(props) {
  const { allProducts } = useContext(ShopContext);

  // 1. STATE for Search Term
  const [searchTerm, setSearchTerm] = useState('');

  // 2. STATE for Local Time (Your existing timer logic)
  const [localTime, setLocalTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setLocalTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const hours = localTime.getHours().toString().padStart(2, '0');
  const minutes = localTime.getMinutes().toString().padStart(2, '0');
  const seconds = localTime.getSeconds().toString().padStart(2, '0');

  // 3. FILTERING LOGIC
  const filteredProducts = allProducts.filter(item => {
    // Only show items that match the current category prop
    if (props.category !== item.category) {
      return false;
    }

    // Convert product name and search term to lowercase for case-insensitive searching
    const name = item.name.toLowerCase();
    const term = searchTerm.toLowerCase();

    // Check if the product name includes the search term
    return name.includes(term);
  });

  // 4. Update the "Showing X products" display
  const totalCategoryProducts = allProducts.filter(item => props.category === item.category).length;


  return (
    <div className='container mx-auto'>
      <div className="Banner w-full h-80 overflow-hidden relative">
        <div className="banner-text my-25 mx-5 md:mx-10">
          <h1 className='text-3xl text-indigo-900 md:text-7xl font-medium'>FLAT 50% OFF</h1>
          <h2 className='flex mt-2 text-[14px] md:text-3xl font-medium'>
            <span className='text-indigo-900 mr-2'>{hours}</span> Hours
            <span className='text-indigo-900 mr-2 ml-2'>{minutes}</span> Minutes
            <span className='text-indigo-900 mr-2 ml-2'>{seconds}</span> Seconds
          </h2>
          <button className='cursor-pointer font-medium text-white text-[18px] md:text-2xl mt-4 border-2 border-indigo-500 bg-indigo-500 rounded-full text-center w-40 md:w-60 h-13 hover:bg-transparent hover:text-black'>Explore Now</button>
        </div>
        <img className='absolute -right-30 w-90  top-15 md:right-5 ' src={props.banner} alt="" />
      </div>

      {/* 5. Update the product count display */}
      <div className="m-5 md:m-0 md:mt-5 flex justify-center md:justify-between items-center flex-wrap">
        <p className='mb-2 md:mb-0'>
          <b>Showing {filteredProducts.length}</b> out of {totalCategoryProducts} products
        </p>

        {/* 6. Add value and onChange to the input */}
        <div className="border-1 p-2 space-x-2 rounded-full border-blue-700">
          <FontAwesomeIcon className='text-indigo-500' icon={faSearch} />
          <input
            className='outline-none'
            type="text"
            placeholder='Search Products'
            value={searchTerm} // Controlled component: display the state value
            onChange={(e) => setSearchTerm(e.target.value)} // Update state on change
          />
        </div>
      </div>

      {/* 7. Map over the filteredProducts array */}
      <div className="products flex-wrap flex justify-between container mx-auto mt-10">
        {filteredProducts.map((item, i) => (
          <Item
            key={i}
            id={item.id}
            image={item.image}
            name={item.name}
            new_price={item.new_price}
            old_price={item.old_price}
          />
        ))}
        {/* Optional: Display a message if no products are found */}
        {filteredProducts.length === 0 && searchTerm.length > 0 && (
          <p className="w-full text-center py-10 text-gray-500">No products found matching "{searchTerm}" in this category.</p>
        )}
      </div>

      <div className="text-center mt-5 mb-5">
        <button className='border-2 rounded-full p-3 border-gray-300 bg-gray-300 font-medium text-gray-800 cursor-pointer'>Explore More</button>
      </div>
    </div>
  )
}

export default ShopCategory