// Navbar.jsx
import React from 'react';
import './Navbar.css'; // Navbar ke liye CSS file

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <h1 className="logo mx-6">HTCops</h1>
        <ul className="nav-links">
          <li><a href="#">Home</a></li>
          <li><a href="#">Products</a></li>
          <li><a href="#">Deals</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
