import React from 'react';
import Header from './Header';
import Footer from './Footer';
import '../styles/components/layout.css';

/**
 * Layout Component
 * Wraps page content with Header and Footer
 */
const Layout = ({ children }) => {
  return (
    <div className="layout-wrapper">
      <Header />
      <main className="main-content">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
