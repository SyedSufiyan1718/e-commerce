// import React, { useState } from 'react';
// // import './Cart.css';

// const Cart = () => {
//   const [cartItems, setCartItems] = useState([]);

//   const addItemToCart = (item) => {
//     setCartItems([...cartItems, item]);
//   };

//   const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

//   return (
//     <div className="cart">
//       <h2>Cart</h2>
//       <div className="cart-items">
//         {cartItems.map((item, index) => (
//           <div key={index} className="cart-item">
//             <img src={item.image} alt={item.title} />
//             <p>{item.title}</p>
//             <p>${item.price}</p>
//           </div>
//         ))}
//       </div>
//       <div className="cart-summary">
//         <p>Total: ${totalPrice.toFixed(2)}</p>
//         <button>Checkout</button>
//       </div>
//     </div>
//   );
// };

// export default Cart;


import React, { useState, useEffect } from 'react';
import './CartDrawer.css';
import { FaTimes } from 'react-icons/fa';

const CartDrawer = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    // Load cart items from localStorage on component mount
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(cartItems);
  }, []);

  const getTotalPrice = () => {
    return cart.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);
  };

  const handleRemoveItem = (id) => {
    const updatedCart = cart.filter(item => item.id !== id);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart)); // Update localStorage
  };

  const handleClearCart = () => {
    setCart([]);
    localStorage.removeItem('cart'); // Clear cart from localStorage
  };

  return (
    <div className="cart-drawer">
      <div className="cart-header">
        <h2>Your Cart</h2>
        <button className="cart-close-btn">
          <FaTimes />
        </button>
      </div>

      <div className="cart-items">
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          cart.map((item) => (
            <div className="cart-item" key={item.id}>
              <img src={item.image} alt={item.title} />
              <div>
                <p>{item.title}</p>
                <p>${item.price}</p>
                <p>Quantity: {item.quantity}</p>
                <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
              </div>
            </div>
          ))
        )}
      </div>

      <div className="cart-footer">
        <p>Total: ${getTotalPrice()}</p>
        <button onClick={handleClearCart}>Clear Cart</button>
      </div>
    </div>
  );
};

export default CartDrawer;
