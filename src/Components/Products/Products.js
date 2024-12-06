import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaCartPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Products.css';

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchApi();
  }, []);

  return (
    <div className="products-container">
      <h2>Our Products</h2>
      <p>Explore our exclusive collection of products.</p>

      <div className="products-grid">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.title} width={200} height={200} />
            <h3>{product.title}</h3>
            <p>${product.price}</p>
            <Link to={`/product/${product.id}`} className="product-detail-btn">
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;

