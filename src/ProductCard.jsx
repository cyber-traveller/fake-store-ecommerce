// src/components/ProductCard.jsx
import React from 'react';

function ProductCard({ product, addToCart }) {
  return (
    <div className="border rounded-lg p-4 flex flex-col items-center bg-white shadow-lg transition-transform transform hover:scale-105">
      <img src={product.image} alt={product.title} className="h-32 object-contain mb-4" />
      <h2 className="text-lg font-semibold my-2 text-center">{product.title}</h2>
      <p className="text-gray-700 mb-4">${product.price}</p>
      <button
        onClick={() => addToCart(product)}
        className="bg-green-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-green-600 transition"
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;
