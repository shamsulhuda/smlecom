import React from "react";
import "./ReviewItem.css";
export default function ReviewItem({ product }) {
  const { name, price, quantity, img } = product;
  return (
    <div className="review-item">
      <div>
        <img src={img} alt={name} />
      </div>
      <div className="review-details-container">
        <div className="review-deatils">
          <p>{name}</p>
          <p>
            <small>Price: {price}</small>
          </p>
          <p>
            <small>Qty: {quantity}</small>
          </p>
        </div>
        <div className="delete-container">
          <button className="delete">delete</button>
        </div>
      </div>
    </div>
  );
}
