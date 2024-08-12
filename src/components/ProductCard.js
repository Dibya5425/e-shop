import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>${product.price.toFixed(2)}</p>
      <Link to={`/product/${product.id}`} className="btn">
        View Product
      </Link>
      <button className="btn" onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
};

export default ProductCard;
