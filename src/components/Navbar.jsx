import React, { useContext, useRef, useState } from 'react'
import logo from '../assets/logo-2.png'
import icon from '../assets/shopping-cart.png'
import { Link } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  
  const [menu, setMenu] = useState("shop");
  const [isMenuOpen , setIsMenuOpen] = useState(false);
  const {getTotalCartItems} = useContext(ShopContext);
  const menuRef = useRef();
  
  const dropdownMenu =()=>{
    menuRef.current.classList.toggle('nav-bar-on');
    setIsMenuOpen(prev => !prev);
  }

  return (
    <div className='fixed top-0 w-full z-10'>
      <div className='h-20 overflow-hidden text-[20px] mx-auto flex justify-between items-center py-4 px-6 bg-white border-1 border-b-indigo-500 border-solid'>
        <Link to="/">
          <img className='w-25' src={logo} alt="Logo" />
        </Link>
        <ul className='nav-menu hidden md:flex space-x-8' ref={menuRef}>
          <li className='nav-item' onClick={()=>{setMenu("shop")}}><Link to="/">Shop</Link>{menu === "shop" && <div className='active'></div>}</li>
          <li className='nav-item' onClick={()=>{setMenu("mens")}}><Link to="/Mens">Mens</Link>{menu === "mens" && <div className='active'></div>}</li>
          <li className='nav-item' onClick={()=>{setMenu("womens")}}><Link to="/Womens">Womens</Link> {menu === "womens" && <div className='active'></div>}</li>
          <li className='nav-item' onClick={()=>{setMenu("kids")}}><Link to="/Kids">Kids</Link>{menu === "kids" && <div className='active'></div>}</li>
        </ul>
        <div className='flex items-center space-x-3 md:space-x-8'>
          <Link to="/Login"><button className='cursor-pointer rounded-full border-2 border-indigo-500 px-2.5 md:px-5 py-1 hover:bg-indigo-500 hover:text-white  text-[]'>Login</button></Link>
          <FontAwesomeIcon className='bar cursor-pointer text-3xl hover:text-indigo-500'  icon={isMenuOpen ? faXmark : faBars} onClick={dropdownMenu}/>
          <div className="">
            <Link to="/Cart"><img src={icon} alt="" className='w-10 h-10'/></Link>
            <span className='absolute top-2 right-5 rounded-full text-[16px] bg-indigo-500 text-white text-center w-6 h-6'>{getTotalCartItems()}</span>
          </div>
        </div>
      </div>
    </div>
  );
  
}


export default Navbar