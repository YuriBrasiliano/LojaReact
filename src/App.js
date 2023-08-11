import React, { useState } from 'react';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import './styles/index.css';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [showDetails, setShowDetails] = useState(false);

  const addToCart = (product) => {
    const existingItem = cartItems.find((item) => item.id === product.id);
    if (existingItem) {
      const updatedCart = cartItems.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCartItems(updatedCart);
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (product) => {
    if (product.quantity >= 1) {
      const updatedCart = cartItems.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity - 1 } : item
      );
      setCartItems(updatedCart);
    } else {
      const updatedCart = cartItems.filter((item) => item.id !== product.id);
      setCartItems(updatedCart);
    }
  };

  return (
    <div className="app">
      <h1>Loja Online</h1>
      <ProductList addToCart={addToCart} showProductDetails={setShowDetails} />
      <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
      {showDetails && (
        <div className="product-details-container">
          <ProductList addToCart={addToCart} showProductDetails={setShowDetails} />
        </div>
      )}
    </div>
  );
}

export default App;
