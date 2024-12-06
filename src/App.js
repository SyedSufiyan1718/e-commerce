import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header/Header';
import Drawer from './Components/Drawer/Drawer';
import Products from './Components/Products/Products';
import ProductDetail from './Components/PorductDetail/ProductDetail';
import Cart from './Components/Cart/Cart';
import Footer from './Components/Footer/Footer';
import './App.css';
import { HeroSection } from './Components/HeroSection/HeroSec';

const App = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const closeDrawer = () => {
    setDrawerOpen(false);
  };

  return (
    <Router>
      <Header toggleDrawer={toggleDrawer} />
      <Drawer isOpen={drawerOpen} closeDrawer={closeDrawer} />
      <HeroSection />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
