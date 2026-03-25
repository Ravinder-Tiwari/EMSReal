import React from 'react';
import '../styles/pages/home.css';

/**
 * Home Page
 * Landing page of the application
 */
const Home = () => {
  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="hero-content">
          <h2>Welcome to Career Router</h2>
          <p>Your AI-powered guide to career success</p>
          <button className="cta-button">Get Started</button>
        </div>
      </section>
    </div>
  );
};

export default Home;
