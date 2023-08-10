import React from 'react';

function Cart({ cartItems, removeFromCart }) {
  const handleRemoveFromCart = (item) => {
    if (item.quantity >= 1) {
      removeFromCart({ ...item, quantity: item.quantity - 1 });
    } else {
      removeFromCart(item);
    }
  };

  const calculateTotalPrice = (item) => {
    return (item.price * item.quantity).toFixed(2);
  };

  const calculateCartTotal = () => {
    const total = cartItems.reduce((accumulator, item) => {
      return accumulator + parseFloat(calculateTotalPrice(item));
    }, 0);
    return total.toFixed(2);
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
<div className='itemPreco'>R$ </div> &nbsp; {calculateTotalPrice(item)}
</p>
            <button onClick={() => handleRemoveFromCart(item)}>Remover</button>
          </li>
        ))}
      </ul>
      <p className='valorCart'>Total do Carrinho: <div className='valor'>R$ {calculateCartTotal()}</div></p>
    </div>
  );
}

export default Cart;


