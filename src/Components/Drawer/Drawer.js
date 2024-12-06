import React, { useState } from 'react';
import './Drawer.css';
import { FaTimes } from 'react-icons/fa';

const Drawer = ({ isOpen, closeDrawer }) => {
  return (
    <div className={`drawer ${isOpen ? 'open' : ''}`}>
      <button className="drawer-close" onClick={closeDrawer}>
        <FaTimes />
      </button>
    </div>
  );
};

export default Drawer;
