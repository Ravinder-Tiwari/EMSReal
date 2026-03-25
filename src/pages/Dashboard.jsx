import React, { useState } from 'react';
import '../styles/pages/dashboard.css';

/**
 * Dashboard Page
 * Main dashboard for users to track their progress
 */
const Dashboard = () => {
  const [data, setData] = useState([]);

  return (
    <div className="dashboard-page">
      <h1>Dashboard</h1>
      <div className="dashboard-grid">
        <section className="dashboard-card">
          <h3>Progress</h3>
          <p>Track your learning progress</p>
        </section>
        <section className="dashboard-card">
          <h3>Resources</h3>
          <p>Access learning materials</p>
        </section>
        <section className="dashboard-card">
          <h3>Statistics</h3>
          <p>View your statistics</p>
        </section>
      </div>
    </div>
  );
};

export default Dashboard;
