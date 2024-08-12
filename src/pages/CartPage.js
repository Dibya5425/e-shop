import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import './CartPage.css';

const CartPage = () => {
  const { cartItems, removeFromCart, clearCart } = useContext(CartContext);
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="cart-page">
      <h2>Your Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map(item => (
            <div key={item.id} className="cart-item">
              <span>{item.name} (x{item.quantity})</span>
              <span>${(item.price * item.quantity).toFixed(2)}</span>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          ))}
          <div className="cart-total">
            <strong>Total: ${totalPrice.toFixed(2)}</strong>
          </div>
          <button className="btn clear-cart" onClick={clearCart}>
            Clear Cart
          </button>
        </div>
      )}
    </div>
  );
};

export default CartPage;
