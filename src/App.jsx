import React from 'react'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Shop from './components/Shop'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ShopCategory from './components/ShopCategory'
import Cart from './components/Cart'
import SignupLogin from './components/SignupLogin'
import Product from './components/Product'
import MensBanner from './assets/mens-banner.png'
import WomensBanner from './assets/womens-banner.png'
import KidsBanner from './assets/kids-banner.png'
import Signup from './components/Signup'




function App() {
  return (
    <div>

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/Mens' element={<ShopCategory banner={MensBanner} category="Mens" />} />
          <Route path='/Womens' element={<ShopCategory banner={WomensBanner} category="Womens" />} />
          <Route path='/Kids' element={<ShopCategory banner={KidsBanner} category="Kids" />} />
          <Route path='/Cart' element={<Cart />} />
          <Route path='/Login' element={<SignupLogin />} />
          <Route path='/Signup' element={<Signup />} />
          <Route path='/Product/:ProductId' element={<Product />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App