import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import "./Shop.css";
export default function Shop() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleAddToCart = (product) => {
    console.log(product);
    // cart.push(product)
    const newCart = [...cart, product];
    setCart(newCart);
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
        <div className="main-cart">
          <h3>Order summary</h3>
          <p>Selected item: {cart.length}</p>
        </div>
      </div>
    </div>
  );
}
