import React from "react";
import "./Footer.css";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* About Section */}
        <div className="footer-section">
          <h3 className="footer-heading">About Us</h3>
          <p>
            Welcome to our e-commerce store! We offer the best products at
            unbeatable prices. Shop with confidence and style!
          </p>
        </div>

        {/* Navigation Section */}
        <div className="footer-section">
          <h3 className="footer-heading">Quick Links</h3>
          <ul className="footer-links">
            <li>
              <a href="/about">About Us</a>
            </li>
            <li>
              <a href="/shop">Shop</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
            <li>
              <a href="/faq">FAQ</a>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="footer-section">
          <h3 className="footer-heading">Contact Us</h3>
          <p>Email: syedsufiyan1718@gmail.com</p>
          <p>Phone: +92 334 9916744</p>
          <p>Address: 123 E-Commerce St, Shop City</p>
        </div>

        <div className="footer-section">
          <h3 className="footer-heading">Follow Us</h3>
          <div className="social-icons">
            <Link
              to={"https://facebook.com"}
              className="social-icon"
              target="_blank"
            >
              {" "}
              <FaFacebookF />{" "}
            </Link>
            <Link
              to={"https://twitter.com"}
              className="social-icon"
              target="_blank"
            >
              {" "}
              <FaTwitter />{" "}
            </Link>
            <Link
              to={"https://instagram.com"}
              className="social-icon"
              target="_blank"
            >
              {" "}
              <FaInstagram />{" "}
            </Link>
            <Link
              to={"https://linkedin.com"}
              className="social-icon"
              target="_blank"
            >
              {" "}
              <FaLinkedinIn />
            </Link>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 Your Store Name. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
