// src/App.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import ProductList from './ProductList';
import CartModal from './CartModal';

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(response => setProducts(response.data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  const addToCart = (product) => {
    if (cart.some(item => item.id === product.id)) {
      alert('Item already added to the cart');
    } else {
      setCart([...cart, product]);
    }
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  return (
    <div className="App">
      <Navbar cartCount={cart.length} openModal={() => setIsModalOpen(true)} />
      <ProductList products={products} addToCart={addToCart} />
      {isModalOpen && (
        <CartModal
          cartItems={cart}
          closeModal={() => setIsModalOpen(false)}
          removeFromCart={removeFromCart}
        />
      )}
    </div>
  );
}

export default App;
