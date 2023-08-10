import React from 'react';

function Cart({ cartItems, removeFromCart }) {
  return (
    <div className="cart">
      <h2>Carrinho de Compras</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            <p>{item.name} - R$ {item.price}</p>
            <button onClick={() => removeFromCart(item)}>Remover</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Cart;
