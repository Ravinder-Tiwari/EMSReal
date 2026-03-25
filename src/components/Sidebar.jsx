import React from 'react';

export const Sidebar = ({ collapsed, onToggleCollapse, currentPage, onPageChange, user }) => {
  const navItems = [
    { id: 'dashboard', icon: '📊', label: 'Dashboard' },
    { id: 'problems', icon: '💻', label: 'Problems' },
    { id: 'courses', icon: '📚', label: 'Courses' },
    { id: 'roadmap', icon: '🗺️', label: 'Roadmap' },
    { id: 'interviews', icon: '🎤', label: 'Interviews' },
    { id: 'jobs', icon: '💼', label: 'Jobs' },
    { id: 'resume', icon: '📄', label: 'Resume' },
    { id: 'ai', icon: '🤖', label: 'AI Coach' },
  ];

  return (
    <div className={`sidebar ${collapsed ? 'collapsed' : ''}`}>
      {/* Logo */}
      <div className="sidebar-logo">
        <div className="logo-mark" onClick={() => onPageChange('dashboard')}>
          CR
        </div>
        {!collapsed && (
          <div className="sidebar-logo-text">
            <div style={{ fontWeight: 800, fontSize: 14 }}>Career Router</div>
            <div style={{ fontSize: 11, color: 'var(--text3)' }}>EdTech Platform</div>
          </div>
        )}
        <button
          className="sidebar-toggle-btn"
          onClick={onToggleCollapse}
          title={collapsed ? 'Expand' : 'Collapse'}
        >
          {collapsed ? '→' : '←'}
        </button>
      </div>

      {/* Navigation */}
      <div className="sidebar-nav">
        <div className="nav-section">
          <div className="nav-section-label">Main</div>
          {navItems.slice(0, 4).map(item => (
            <div
              key={item.id}
              className={`nav-item ${currentPage === item.id ? 'active' : ''}`}
              onClick={() => onPageChange(item.id)}
              data-label={item.label}
            >
              <span className="icon">{item.icon}</span>
              <span className="nav-item-label">{item.label}</span>
            </div>
          ))}
        </div>

        <div className="nav-section">
          <div className="nav-section-label">Learning</div>
          {navItems.slice(4, 8).map(item => (
            <div
              key={item.id}
              className={`nav-item ${currentPage === item.id ? 'active' : ''}`}
              onClick={() => onPageChange(item.id)}
              data-label={item.label}
            >
              <span className="icon">{item.icon}</span>
              <span className="nav-item-label">{item.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="sidebar-footer">
        <div className="sidebar-user-info">
          <div style={{ fontSize: 12, fontWeight: 600 }}>
            {user?.email?.split('@')[0] || 'User'}
          </div>
          <div style={{ fontSize: 11, color: 'var(--text3)' }}>
            {user?.role === 'creator' ? 'Creator' : 'Student'}
          </div>
        </div>
        <button
          className="btn btn-ghost btn-sm"
          onClick={() => {
            localStorage.removeItem('auth_token');
            window.location.reload();
          }}
        >
          <span className="sidebar-signout-label">Logout</span>
          <span>👋</span>
        </button>
      </div>
    </div>
  );
};
