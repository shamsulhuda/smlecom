import React from "react";

export default function Cart({ cart }) {
  return (
    <div>
      <div className="cart-header">
        <p>Selected item: {cart.length}</p>
      </div>
    </div>
  );
}
