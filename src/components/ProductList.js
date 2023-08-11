import React, { useState, useEffect } from 'react';

function ProductList({ addToCart, showProductDetails }) {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3001/products')
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    showProductDetails(true);
  };

  const handleBackClick = () => {
    setSelectedProduct(null);
    showProductDetails(false);
  };

  return (
    <div className="product-list">
      {selectedProduct ? (
        <div className="product-details">
          <button onClick={handleBackClick}>Voltar</button>
          <div className="product-details-content">
            <div className="product-info">
              <h3>{selectedProduct.name}</h3>
              <p>Preço: R$ {selectedProduct.price.toFixed(2)}</p>
              <p>{selectedProduct.description}</p>
              <button onClick={() => addToCart(selectedProduct)}>Adicionar ao Carrinho</button>
            </div>
            <div className="product-image">
              <img src={selectedProduct.image} alt={selectedProduct.name} />
            </div>
          </div>
        </div>
      ) : (
        <div>
          <h2>Produtos</h2>
          <ul>
            {products.map((product) => (
              <li key={product.id}>
                <img src={product.image} alt={product.name} />
                <h3>{product.name}</h3>
                <p>Preço: R$ {product.price.toFixed(2)}</p>
                <button onClick={() => handleProductClick(product)}>Ver Detalhes</button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default ProductList;
