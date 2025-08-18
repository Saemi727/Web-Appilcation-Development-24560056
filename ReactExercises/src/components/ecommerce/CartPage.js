import React, { useContext } from 'react';
import { CartContext } from './CartContext';

function CartPage() {
  const { cart, removeFromCart, updateQty } = useContext(CartContext);

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div>
      <h2>Your Cart</h2>
      {cart.length === 0 && <p>Cart is empty</p>}
      {cart.map(item => (
        <div key={item.id} style={{ borderBottom: '1px solid #ccc', padding: '5px' }}>
          <h4>{item.name}</h4>
          <p>${item.price}</p>
          <input
            type="number"
            value={item.qty}
            min="1"
            onChange={(e) => updateQty(item.id, parseInt(e.target.value))}
          />
          <button onClick={() => removeFromCart(item.id)}>Remove</button>
        </div>
      ))}
      <h3>Total: ${total.toFixed(2)}</h3>
    </div>
  );
}

export default CartPage;
