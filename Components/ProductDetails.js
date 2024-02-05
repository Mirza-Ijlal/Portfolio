// ProductDetails.js
import React from 'react';
import './ProductDetails.css'; // Create a separate CSS file for styling

const ProductDetails = ({ product, onClose }) => {
  return (
    <div className="product-details-container">
      <div className="product-details">
        <h2>Product Details</h2>
        {Object.entries(product).map(([key, value]) => (
          <p key={key}>
            <strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong> {value}
          </p>
        ))}
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default ProductDetails;

