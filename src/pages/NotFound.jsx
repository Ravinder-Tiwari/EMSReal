import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/pages/not-found.css';

/**
 * NotFound Page
 * 404 error page
 */
const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="not-found-page">
      <div className="not-found-content">
        <h1>404</h1>
        <h2>Page Not Found</h2>
        <p>Sorry, the page you're looking for doesn't exist.</p>
        <button onClick={() => navigate('/')} className="back-button">
          Go Back Home
        </button>
      </div>
    </div>
  );
};

export default NotFound;
