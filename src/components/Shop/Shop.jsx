import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import {
  addToDb,
  deleteShoppingCart,
  getShoppingCart,
} from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";

export default function Shop() {
  const products = useLoaderData();
  const [cart, setCart] = useState([]);

  // clear cart
  const clearCart = () => {
    setCart([]);
    deleteShoppingCart();
  };
  useEffect(() => {
    const storedCart = getShoppingCart();
    const savedCart = [];
    for (const id in storedCart) {
      const addedProduct = products.find((product) => product.id === id);
      if (addedProduct) {
        const quantity = storedCart[id];
        addedProduct.quantity = quantity;
        savedCart.push(addedProduct);
      }
    }
    setCart(savedCart);
  }, [products]);

  const handleAddToCart = (selectedProduct) => {
    let newCart = [];
    const exists = cart.find((product) => product.id === selectedProduct.id);
    if (!exists) {
      selectedProduct.quantity = 1;
      newCart = [...cart, selectedProduct];
    } else {
      exists.quantity = exists.quantity + 1;
      const rest = cart.filter((product) => product.id !== selectedProduct.id);
      newCart = [...rest, exists];
    }
    setCart(newCart);
    addToDb(selectedProduct.id);
  };
  return (
    <div className="shop-container">
      <div className="container">
        <h1>Shop container: {products.length}</h1>
        <div className="product-container">
          {products.map((product) => (
            <Product
              className="product-card"
              key={product.id}
              handleAddToCart={handleAddToCart}
              product={product}
            ></Product>
          ))}
        </div>
      </div>
      <div className="cart-container">
        <Cart cart={cart} clearCart={clearCart}>
          <Link to="/orders">
            <button>Got to Cart</button>
          </Link>
        </Cart>
      </div>
    </div>
  );
}
