import React from "react";
import useCart from "../../hooks/useCart";
import useProduct from "../../hooks/useProducts";
import Cart from "../Cart/Cart";

const Order = () => {
  const [products, setProducts] = useProduct();
  const [cart, setCart] = useCart(products);
  return (
    <div className="shop-container">
      <div className="products-container">
        
      </div>
      <div className="cart-container">
        <Cart cart={cart} />
      </div>
    </div>
  );
};

export default Order;
