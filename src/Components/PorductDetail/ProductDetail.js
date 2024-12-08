import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './ProductDetail.css';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [isInCart, setIsInCart] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
        setProduct(response.data);
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    };
    fetchProduct();
  }, [id]);

  const handleAddToCart = (product_id) => {
    const existingCart = JSON.parse(localStorage.getItem('cart_data')) || [];
    const productIndex = existingCart.findIndex(item => item.product_id === product_id);

    if (productIndex !== -1) {
      existingCart[productIndex].quantity += quantity;
    } else {
      existingCart.push({
        product_id,
        quantity,
        price: product.price,
        title: product.title,
        image: product.image
      });
    }

    localStorage.setItem('cart_data', JSON.stringify(existingCart));
    setIsInCart(true); 
  };

  const handleRemoveFromCart = (product_id) => {
    const existingCart = JSON.parse(localStorage.getItem('cart_data')) || [];
    const productIndex = existingCart.findIndex(item => item.product_id === product_id);

    if (productIndex !== -1) {
      existingCart.splice(productIndex, 1);
      localStorage.setItem('cart_data', JSON.stringify(existingCart));
      setIsInCart(false); 
    }
  };

  useEffect(() => {
    const existingCart = JSON.parse(localStorage.getItem('cart_data')) || [];
    const productInCart = existingCart.find(item => item.product_id === product.id);
    setIsInCart(!!productInCart);
  }, [product.id]);

  return (
    <div className="product-detail-container">
      <div className="product-detail-content">
        <div className="product-image">
          <img src={product.image} alt={product.title} />
        </div>

        <div className="product-info">
          <h2 className="product-title">{product.title}</h2>
          <p className="product-price">${product.price}</p>
          <p className="product-description">{product.description}</p>

          <div className="quantity-selector">
            <label htmlFor="quantity">Quantity:</label>
            <input
              type="number"
              id="quantity"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              min="1"
              max="10"
            />
          </div>

          <button
            className="add-to-cart-btn"
            onClick={() =>
              isInCart
                ? handleRemoveFromCart(product.id)
                : handleAddToCart(product.id)
            }
          >
            {isInCart ? "Remove from Cart" : "Add to Cart"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
