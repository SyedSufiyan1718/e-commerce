import React from 'react';
import { FaCartArrowDown } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Header.css';
import img from '../assets/logo.png'

const Header = ({ toggleDrawer }) => {
  return (
    <header className="header">
      <div className="logo-container">
        <img src={img} alt="Logo" className="logo" />
      </div>
      <div className="button-container">
        <button onClick={toggleDrawer} className="cart-button">
          <FaCartArrowDown /> Cart
        </button>
      </div>
    </header>
  );
};

export default Header;

