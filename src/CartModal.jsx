// src/components/CartModal.jsx
import React from 'react';

function CartModal({ cartItems, closeModal, removeFromCart }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white rounded-lg p-6 w-full max-w-md shadow-lg relative">
        <h2 className="text-lg font-bold mb-4 text-center">Your Cart</h2>
        <button onClick={closeModal} className="absolute top-4 right-4 text-gray-500">✕</button>
        {cartItems.length > 0 ? (
          cartItems.map(item => (
            <div key={item.id} className="flex justify-between items-center border-b py-4">
              <div className="flex items-center">
                <img src={item.image} alt={item.title} className="h-12 w-12 object-contain" />
                <div className="ml-4">
                  <h4 className="text-md font-semibold">{item.title}</h4>
                  <p className="text-gray-600">${item.price}</p>
                </div>
              </div>
              <button onClick={() => removeFromCart(item.id)} className="text-red-500 hover:text-red-600">
                Remove
              </button>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-600">Your cart is empty.</p>
        )}
      </div>
    </div>
  );
}

export default CartModal;
