import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { useParams } from 'react-router-dom';
import BreadCrum from './BreadCrum';
import ProductDisplay from './ProductDisplay';
import DiscriptionBox from './DiscriptionBox';
import RelatedProduct from './RelatedProduct';


function Product() {

  const { allProducts } = useContext(ShopContext);
  const { ProductId } = useParams();
  const product = allProducts.find((e) => e.id === Number(ProductId));

  if (!product) {
    return null;
  }

  return (
    <div className='container mx-auto'>
      <BreadCrum product={product}/>
      <ProductDisplay product={product}/>
      <DiscriptionBox/>
      <RelatedProduct/>
    </div>
  )
}

export default Product