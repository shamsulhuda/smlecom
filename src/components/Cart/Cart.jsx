import React from "react";
import "./Cart.css";

export default function Cart({ cart }) {
  let total = 0;
  let shipping = 0;
  let quantity = 0;
  for (const product of cart) {
    quantity = quantity + product.quantity;
    total = total + product.price * product.quantity;
    shipping = shipping + product.shipping;
  }
  let tax = (total * 0.1).toFixed(2);
  tax = parseFloat(tax);
  const grandTotal = total + shipping + tax;
  return (
    <div className="main-cart">
      <div className="cart-header">
        <h2>Order Summary</h2>
        <p>Selected item: {quantity}</p>
        <p>Total price: ${total}</p>
        <p>Total Shipping: ${shipping}</p>
        <p>Tax: ${tax}</p>
        <h3>Grand Total: ${grandTotal.toFixed(2)}</h3>
      </div>
    </div>
  );
}
