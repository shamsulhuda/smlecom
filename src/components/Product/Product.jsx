import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Product.css";
export default function Product(props) {
  const { product, handleAddToCart } = props;
  const { name, img, seller, price, ratings } = product;

  return (
    <div>
      <div className="card">
        <div className="card-content">
          <img src={encodeURI(img)} alt={name} />
          <h3 className="product-name">{name}</h3>
          <strong className="product-price">Price: ${price}</strong>
          <div className="merchantizing">
            <p>Manufacturer:{seller}</p>
            <p>Rating:{ratings}</p>
          </div>
        </div>
        <button
          onClick={() => handleAddToCart(product)}
          className="btn addToCart"
        >
          <span>Add to cart</span>
          <FontAwesomeIcon icon={faCartPlus}></FontAwesomeIcon>
        </button>
      </div>
    </div>
  );
}
