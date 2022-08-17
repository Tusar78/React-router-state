import React from 'react';
import useProduct from '../../hooks/useProducts';

const Order = () => {
  const [products, setProducts] = useProduct();
  return (
    <div>
      <h2>Hello Order {products.length} </h2>
    </div>
  );
};

export default Order;