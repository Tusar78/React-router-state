import React, { useState, useEffect } from "react";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import { addToLocalStorage, getLocalStorage } from "../Utils/Utils";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleAddToCart = (selectedProduct) => {
    let newCart = [];
    const exits = cart.find((product) => product.id === selectedProduct.id);
    if (!exits) {
      selectedProduct.quantity = 1;
      newCart = [...cart, selectedProduct];
    } else {
      const rest = cart.filter((product) => product.id !== selectedProduct.id);
      selectedProduct.quantity += 1;
      newCart = [...rest, selectedProduct];
    }
    addToLocalStorage(selectedProduct.id);
    setCart(newCart);
  };

  useEffect(() => {
    if (products.length) {
      const storedProductsIds = getLocalStorage();
      const previousCart = [];
      for (const id in storedProductsIds) {
        const foundProduct = products.find((product) => product.id === id);
        if (foundProduct) {
          const quantity = storedProductsIds[id];
          foundProduct.quantity = quantity;
          previousCart.push(foundProduct);
        }
      }
      setCart(previousCart);
    }
  }, [products]);

  const handleClearCart = () => {
    setCart([]);
  };

  return (
    <>
      <div className="shop">
        <div className="products-container">
          {products.map((product, index) => {
            return (
              <Product
                key={index}
                product={product}
                handleAddToCart={handleAddToCart}
              />
            );
          })}
        </div>
        <div className="cart-container">
          <Cart
            cart={cart}
            products={products}
            handleClearCart={handleClearCart}
          />
        </div>
      </div>
    </>
  );
};

export default Shop;
