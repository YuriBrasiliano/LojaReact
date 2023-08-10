import React from 'react';

function Cart({ cartItems, removeFromCart }) {
  const handleRemoveFromCart = (item) => {
    if (item.quantity > 1) {
      removeFromCart({ ...item, quantity: item.quantity - 1 });
    } else {
      removeFromCart(item);
    }
  };

  return (
    <div className="cart">
      <h2>Carrinho de Compras</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
<p className='itemInfoCart'>
  <div className='itemName'>Produto: </div> &nbsp; {item.name}
  <div className='itemQuantidade'>Quantidade: {item.quantity}</div>
  <div className='itemPreco'>R$ </div> &nbsp; {item.price}
</p>

            <button onClick={() => handleRemoveFromCart(item)}>Remover</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Cart;
