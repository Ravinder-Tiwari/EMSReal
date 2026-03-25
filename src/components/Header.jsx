import React from 'react';
import '../styles/components/header.css';

/**
 * Header Component
 * Main navigation header for the application
 */
const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="header-logo">
          <h1>Career Router</h1>
        </div>
        <nav className="header-nav">
          <a href="/" className="nav-link">Home</a>
          <a href="/dashboard" className="nav-link">Dashboard</a>
          <a href="#about" className="nav-link">About</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
