import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./ReviewItem.css";
export default function ReviewItem({ product, handleRemoveItem }) {
  const { id, name, price, quantity, img } = product;
  return (
    <div className="review-item">
      <div>
        <img src={img} alt={name} />
      </div>
      <div className="review-details-container">
        <div className="review-deatils">
          <h4>{name}</h4>
          <p>
            <small>Price: {price}</small>
          </p>
          <p>
            <small>Qty: {quantity}</small>
          </p>
        </div>
        <div className="delete-container">
          <button className="delete-btn" onClick={() => handleRemoveItem(id)}>
            <FontAwesomeIcon
              className="delete-icon"
              icon={faTrashAlt}
            ></FontAwesomeIcon>
          </button>
        </div>
      </div>
    </div>
  );
}
