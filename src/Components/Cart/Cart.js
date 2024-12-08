import React, { useState, useEffect } from 'react';
import { FaTimes } from 'react-icons/fa';
import './CartDrawer.css';

const CartDrawer = ({ isOpen, closeDrawer }) => {
  const [cart, setCart] = useState([]);

  // When the drawer opens, load the cart data from localStorage
  useEffect(() => {
    if (isOpen) {
      const cartItems = JSON.parse(localStorage.getItem('cart_data')) || [];
      setCart(cartItems);
    }
  }, [isOpen]); // This hook will run every time the drawer opens (i.e. when `isOpen` changes)

  // Calculate total price
  const getTotalPrice = () => {
    return cart.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);
  };

  // Remove an item from the cart
  const handleRemoveItem = (id) => {
    const updatedCart = cart.filter(item => item.product_id !== id);
    setCart(updatedCart);
    localStorage.setItem('cart_data', JSON.stringify(updatedCart)); // Update localStorage
  };

  // Clear the entire cart
  const handleCheckout = () => {
  };

  return (
    <div className={`cart-drawer ${isOpen ? 'open' : ''}`}>
      <div className="cart-header">
        <h2>Your Cart</h2>
        <button className="cart-close-btn" onClick={closeDrawer}>
          <FaTimes />
        </button>
      </div>

      <div className="cart-items">
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          cart.map((item) => (
            <div className="cart-item" key={item.product_id}>
              <img src={item.image} alt={item.title} />
              <div className="cart-item-info">
                <p>{item.title}</p>
                <p>${item.price}</p>
                <p>Quantity: {item.quantity}</p>
                <p>SubTotal: {item.price * item.quantity}</p>
                <button onClick={() => handleRemoveItem(item.product_id)}>Remove</button>
              </div>
            </div>
          ))
        )}
      </div>

      <div className="cart-footer">
        <p>Total: ${getTotalPrice()}</p>
        <button onClick={handleCheckout}>CheckOut</button>
      </div>
    </div>
  );
};

export default CartDrawer;
