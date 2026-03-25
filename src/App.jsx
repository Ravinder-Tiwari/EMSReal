import React, { useState, useEffect } from 'react';
import { Sidebar } from './components/Sidebar';
import { Topbar } from './components/Topbar';
import { ThemeToggle } from './components/ThemeToggle';
import { NotifToast } from './components/NotifToast';
import { RoleSelectModal } from './components/RoleSelectModal';
import { getCurrentUser, logoutUser } from './utils/auth';

// Import pages
import Dashboard from './pages/Dashboard';
import Problems from './pages/Problems';
import Courses from './pages/Courses';
import Roadmap from './pages/Roadmap';
import Interviews from './pages/Interviews';
import Jobs from './pages/Jobs';
import Resume from './pages/Resume';
import AICoach from './pages/AICoach';
import Login from './pages/Login';

export default function App() {
  const [user, setUser] = useState(null);
  const [currentPage, setCurrentPage] = useState('dashboard');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [theme, setTheme] = useState('default');
  const [notifications, setNotifications] = useState([]);
  const [showRoleSelect, setShowRoleSelect] = useState(false);

  // Check authentication on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('vibe-theme') || 'default';
    setTheme(savedTheme);

    const currentUser = getCurrentUser();
    if (currentUser) {
      setUser(currentUser);
    }
  }, []);

  // Handle authentication
  const handleLogin = (userData) => {
    setUser(userData);
    setCurrentPage('dashboard');
  };

  const handleLogout = () => {
    logoutUser();
    setUser(null);
    setCurrentPage('dashboard');
  };

  // Notification handler
  const addNotification = (msg, type = 'info', duration = 4000) => {
    const id = Date.now();
    const notif = {
      id,
      msg,
      type,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };
    setNotifications(prev => [...prev, notif]);

    if (duration > 0) {
      setTimeout(() => dismissNotification(id), duration);
    }
  };

  const dismissNotification = (id) => {
    setNotifications(prev => prev.filter(n => n.id !== id));
  };

  // Get page title
  const getPageTitle = () => {
    const pages = {
      dashboard: 'Dashboard',
      problems: 'Coding Problems',
      courses: 'My Courses',
      roadmap: 'Learning Roadmap',
      interviews: 'Interview Prep',
      jobs: 'Job Opportunities',
      resume: 'Resume Builder',
      ai: 'AI Coach',
    };
    return pages[currentPage] || 'Dashboard';
  };

  // Render login page if not authenticated
  if (!user) {
    return (
      <div style={{ background: 'var(--bg)', minHeight: '100vh' }}>
        <ThemeToggle theme={theme} onThemeChange={setTheme} />
        <Login onLogin={handleLogin} onShowRoleSelect={() => setShowRoleSelect(true)} />
        {showRoleSelect && (
          <RoleSelectModal onSelect={() => setShowRoleSelect(false)} onClose={() => setShowRoleSelect(false)} />
        )}
      </div>
    );
  }

  // Render main application
  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <Dashboard />;
      case 'problems':
        return <Problems />;
      case 'courses':
        return <Courses />;
      case 'roadmap':
        return <Roadmap />;
      case 'interviews':
        return <Interviews />;
      case 'jobs':
        return <Jobs />;
      case 'resume':
        return <Resume />;
      case 'ai':
        return <AICoach />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div style={{ background: 'var(--bg)', minHeight: '100vh' }}>
      <ThemeToggle theme={theme} onThemeChange={setTheme} />
      <Sidebar
        collapsed={sidebarCollapsed}
        onToggleCollapse={() => setSidebarCollapsed(!sidebarCollapsed)}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
        user={user}
      />

      <div className={`main ${sidebarCollapsed ? 'sidebar-collapsed' : ''}`}>
        <Topbar
          title={getPageTitle()}
          collapsed={sidebarCollapsed}
          onMenuClick={() => setSidebarCollapsed(!sidebarCollapsed)}
        />

        <div className="page-content">
          {renderPage()}
        </div>
      </div>

      <NotifToast notifications={notifications} onDismiss={dismissNotification} />
    </div>
  );
}
