import { Link } from "react-router-dom";
import useCart from "../../hooks/useCart";
import useProduct from "../../hooks/useProducts";
import { addToDb } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  // const [products, setProducts] = useState([]);
  const [products, setProducts] = useProduct();
  const [cart, setCart] = useCart(products);

  const handleAddToCart = (selectedProduct) => {
    console.log(selectedProduct);
    let newCart = [];
    const exists = cart.find((product) => product.id === selectedProduct.id);
    if (!exists) {
      selectedProduct.quantity = 1;
      newCart = [...cart, selectedProduct];
    } else {
      const rest = cart.filter((product) => product.id !== selectedProduct.id);
      exists.quantity = exists.quantity + 1;
      newCart = [...rest, exists];
    }

    setCart(newCart);
    addToDb(selectedProduct.id);
  };

  return (
    <div className="shop-container">
      <div className="products-container">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            handleAddToCart={handleAddToCart}
          ></Product>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart}>
          <Link to="/orders">
            <button className="px-8 py-3 shadow-md rounded-md text-white bg-yellow-400">Review Order</button>
          </Link>
        </Cart>
      </div>
    </div>
  );
};

export default Shop;
