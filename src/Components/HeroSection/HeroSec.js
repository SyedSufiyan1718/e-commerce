import React from 'react';
import './HeroSec.css'; // Ensure this includes both header and hero styles
import heroImg from '../assets/heroImage.avif'; // Replace with your actual image path

export const HeroSection = () => {
  return (
    <section className="hero-section">
      {/* Text Section */}
      <div className="hero-text">
        <h1>Welcome to E-Shop Haven</h1>
        <p>
          Discover the best deals and an amazing variety of products, all in one
          place. Experience seamless shopping with us and take your e-commerce journey
          to the next level!
        </p>
        <button onClick={() => console.log('Explore Now clicked!')}>Explore Now</button>
      </div>

      {/* Image Section */}
      <div className="hero-image">
        <img src={heroImg} alt="E-commerce Showcase" />
      </div>
    </section>
  );
};