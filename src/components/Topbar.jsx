import React from 'react';

export const Topbar = ({ title, collapsed, onMenuClick }) => {
  return (
    <div className="topbar">
      <div className="topbar-left">
        <button
          className="topbar-menu-btn"
          onClick={onMenuClick}
          title="Toggle sidebar"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div style={{ fontWeight: 800, fontSize: 16 }}>{title}</div>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
        <button className="btn btn-ghost btn-sm">🔔</button>
        <button className="btn btn-ghost btn-sm">⚙️</button>
      </div>
    </div>
  );
};
