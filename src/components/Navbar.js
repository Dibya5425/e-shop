import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';

const Navbar = () => {
  const { cartItems } = useContext(CartContext);
  const cartCount = cartItems.reduce((count, item) => count + item.quantity, 0);

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/" className="home-link">E-shop</Link>
      </div>
      <div className="navbar-cart">
        <Link to="/cart" className="cart-link">
          <FontAwesomeIcon icon={faShoppingCart} size="lg" />
          {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
