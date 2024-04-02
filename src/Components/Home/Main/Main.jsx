// Hero.jsx
import React from 'react';
import './MainSection.css'; // Hero ke liye CSS file

function Main() {
  return (
    <section className="hero">
      <div className="container">
        <h2 className="title text-orange-500 mx-6">Welcome to Webpage</h2>
        <p className="subtitle">Discover amazing deals on millions of products!</p>
        <button className="btn">Shop Now</button>
      </div>
    </section>
  );
}

export default Main;
