import React from 'react';

const Products = () => {
  const products = [
    { id: 1, name: 'Pain Reliever', price: 10.99 },
    { id: 2, name: 'Cough Syrup', price: 8.99 },
    { id: 3, name: 'Vitamins', price: 19.99 },
    // Add more products as needed
  ];

  return (
    <div>
      <h2>Products</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            {product.name} - ${product.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
