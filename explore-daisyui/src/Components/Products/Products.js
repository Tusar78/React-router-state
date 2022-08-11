import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Product from '../Product/Product';

const Products = () => {
  const BASE_URL = 'https://fakestoreapi.com/products';
  const [products, setProducts] = useState([])
  useEffect(() => {
    fetch(`${BASE_URL}`)
      .then(res => res.json())
      .then(data => setProducts(data)) 
  }, [])
  return (
    <section className='w-full bg-base-200'>
      <div className="min-h-screen max-w-screen-lg mx-auto pt-4">
        <div className="grid grid-cols-3 gap-4">
          {
            products.map(product => <Product key={product.id} product={product} />)
          }
        </div>
      </div>
    </section>
  );
};

export default Products;