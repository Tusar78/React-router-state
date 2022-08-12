import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
  const [product, setProduct] = useState({});
  const { productId } = useParams();

  useEffect(() => {
    const BASE_URL = `https://fakestoreapi.com/products`;
    fetch(`${BASE_URL}/${productId}`)
      .then(res => res.json())
      .then(data => setProduct(data))
  }, [productId])

  const { image, category, title, price, description, rating: { rate } = 0  } = product;
  return (
    <section className="section w-full min-h-screen">
      <div className='max-w-screen-lg mx-auto pt-3'>
        <img src={image} alt={title} className="w-64 h-64 object-contain" />
        <small className='block'>{category}</small>
        <h2 className='font-semibold'>{title}</h2>
        <p>Price: ${price}</p>
        <p>{description}</p>
        <small>Rating: {rate}</small>
      </div>
    </section>
  );
};

export default ProductDetails;