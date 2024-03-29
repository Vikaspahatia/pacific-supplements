import React from 'react';

const ProductCard = ({ productName, description, price, imageUrl }) => {
  return (
    <div className="product-card">
      <img src={imageUrl} alt={productName} className="product-image" />
      <div className="product-info">
        <h2 className="product-name">{productName}</h2>
        <p className="product-description">{description}</p>
        <p className="product-price">${price}</p>
        <button className="product-button">Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductCard;
