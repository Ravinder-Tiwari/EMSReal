import React from 'react';

export const ThemeToggle = ({ theme, onThemeChange }) => {
  const themes = [
    { id: 'default', label: 'Light', icon: '☀️' },
    { id: 'neon', label: 'Neon', icon: '⚡' },
    { id: 'professional', label: 'Pro', icon: '📊' },
    { id: 'linkedin', label: 'Clean', icon: '📋' },
    { id: 'leetdark', label: 'Dark', icon: '🕐' },
  ];

  const handleThemeSwitch = (newTheme) => {
    // Remove all theme classes
    document.body.classList.remove('theme-neon', 'theme-professional', 'theme-minimal', 'theme-linkedin', 'theme-leetdark');
    
    // Add new theme class if not default
    if (newTheme !== 'default') {
      document.body.classList.add('theme-' + newTheme);
    }
    
    // Save to localStorage
    localStorage.setItem('vibe-theme', newTheme);
    onThemeChange(newTheme);
  };

  return (
    <div className="theme-toggle" id="themeBar">
      {themes.map(t => (
        <button
          key={t.id}
          className={`toggle-btn ${theme === t.id ? 'active' : ''}`}
          data-theme={t.id}
          onClick={() => handleThemeSwitch(t.id)}
          title={t.label}
        >
          <span className="t-icon">{t.icon}</span>
          {t.label}
        </button>
      ))}
    </div>
  );
};
