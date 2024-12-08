import React from 'react';
import { FaCartArrowDown } from 'react-icons/fa';
import './Header.css';
import img from '../assets/logo.png';
import { Link } from 'react-router-dom';

const Header = ({ toggleDrawer }) => {
  return (
    <header className="header">
      <Link className="logo-container" to={'/'}>
        <img src={img} alt="Logo" className="logo" />
      </Link>
      <div className="button-container">
        <button onClick={toggleDrawer} className="cart-button">
          <FaCartArrowDown /> Cart
        </button>
      </div>
    </header>
  );
};

export default Header;
