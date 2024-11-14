// src/components/Navbar.jsx
import React from 'react';

function Navbar({ cartCount, openModal }) {
  return (
    <nav className="bg-gray-800 p-4 text-white flex justify-between items-center shadow-lg">
      <h1 className="text-lg font-bold">Fake Store</h1>
      <button onClick={openModal} className="bg-blue-500 px-4 py-2 rounded-lg shadow-md">
        Cart ({cartCount})
      </button>
    </nav>
  );
}

export default Navbar;
