import React, { useEffect, useState } from "react";
import "./Shop.css";
export default function Shop() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="shop-container">
      <div className="product-container">
        <h1>Shop container: {products.length}</h1>
      </div>
      <div className="cart-container">
        <h3>Order summary</h3>
      </div>
    </div>
  );
}
