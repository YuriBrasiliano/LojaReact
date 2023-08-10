import React from 'react';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import './styles/index.css';

function App() {
  return (
    <div className="app">
      <h1>Loja Online</h1>
      <ProductList />
      <Cart />
    </div>
  );
}

export default App;
