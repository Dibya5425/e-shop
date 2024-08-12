import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import products from '../data/products';
import { CartContext } from '../contexts/CartContext';
import './ProductPage.css';

const ProductPage = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));
  const { addToCart } = useContext(CartContext);

  if (!product) {
    return <div>Product not found!</div>;
  }

  return (
    <div className="product-page">
      <img src={product.image} alt={product.name} />
      <div className="product-details">
        <h1>{product.name}</h1>
        <p>{product.description}</p>
        <p>${product.price.toFixed(2)}</p>
        <button className="btn" onClick={() => addToCart(product)}>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductPage;
