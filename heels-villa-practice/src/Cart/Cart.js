import React, { useEffect, useState } from "react";
import "./Cart.css";
import { IoTrashBin } from "react-icons/io5";

const Cart = ({ cart, products, handleClearCart }) => {
  const [offer, setOffer] = useState(false);
  const [offerProduct, setOfferProduct] = useState({});

  useEffect(() => {
    if (cart.length > 0) {
      setOffer(true)
    }
  }, [cart.length])

  const handleOffer = () => {
    const randomNumber = Math.floor(Math.random() * products.length);
    const item = products[randomNumber];
    setOfferProduct(item);
  };
  return (
    <div className="cart">
      <div className="cart-header">
        <h1>Order Summery</h1>
        <button
          onClick={handleClearCart}
          className="remove-button"
          title="Clear Cart"
        >
          <IoTrashBin color="white" size={20} />
        </button>
      </div>
      {cart.map((product, index) => (
        <div key={index} className="cart-item">
          <img src={product.pairImage} alt="" />
          <div>
            <p>
              {product.name} {product.color}
            </p>
            <p>$ {product.price}</p>
          </div>
        </div>
      ))}

      <p>By one get one free</p>
      <button className={offer ? "offer-button" : "offer-button-disabled"} disabled={!offer}  onClick={handleOffer}>
        Get one for me
      </button>
      {Object.keys(offerProduct).length > 0 && (
        <div className="cart-item">
          <img src={offerProduct.pairImage} alt="" />
          <div>
            <p>
              {offerProduct.name} {offerProduct.color}
            </p>
            <p>$ {offerProduct.price}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
