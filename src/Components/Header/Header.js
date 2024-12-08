import React from 'react';
import { FaCartArrowDown } from 'react-icons/fa';
import './Header.css';
import img from '../assets/logo.png'; // Make sure logo path is correct
import { Link } from 'react-router-dom';
// import CartDrawer from '../Cart/CartDrawer'; // Ensure you are importing the correct CartDrawer

const Header = ({ toggleDrawer }) => {
  return (
    <header className="header">
      <Link className="logo-container" to={'/'}>
        <img src={img} alt="Logo" className="logo" />
      </Link>
      <div className="button-container">
        {/* Pass the toggleDrawer function as a prop to open the cart drawer */}
        <button onClick={toggleDrawer} className="cart-button">
          <FaCartArrowDown /> Cart
        </button>
      </div>
    </header>
  );
};

export default Header;
