import React from "react";
import useCart from "../../hooks/useCart";
import useProduct from "../../hooks/useProducts";
import { removeFromDb } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import ReviewItem from "../ReviewItem/ReviewItem";

const Order = () => {
  const [products, setProducts] = useProduct();
  const [cart, setCart] = useCart(products);

  const handleRemoveProduct = (product) => {
    console.log(product);
    const rest = cart.filter(pd => pd.id !== product.id);
    setCart(rest)
    removeFromDb(product.id)
  };

  return (
    <div className="shop-container">
      <div className="m-8 grid gap-4">
        {cart.map((product) => (
          <ReviewItem
            key={product.id}
            product={product}
            handleRemoveProduct={handleRemoveProduct}
          />
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart} />
      </div>
    </div>
  );
};

export default Order;
