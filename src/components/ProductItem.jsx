


import React from "react";
import { Link } from "react-router-dom";

const ProductItem = ({ product }) => {
  return (
    <div className="product-item">
      <img src={product.images[0]} alt={product.title} className="product-image" />
      <h3>{product.title}</h3>
      <p>${product.price}</p>
      <Link to={`/product/${product.id}`}>
        <button className="details-button">View Details</button>
      </Link>
    </div>
  );
};

export default ProductItem;

