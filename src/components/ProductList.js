import React, { useState, useEffect } from 'react';

function ProductList({ addToCart }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/products')
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="product-list">
      <h2>Produtos</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>Preço: R$ {product.price}</p>
            <button onClick={() => addToCart(product)}>Adicionar ao Carrinho</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
