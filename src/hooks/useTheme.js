import { useState, useEffect } from 'react';

export const useTheme = () => {
  const [theme, setTheme] = useState('default');

  useEffect(() => {
    // Load saved theme from localStorage
    const savedTheme = localStorage.getItem('vibe-theme') || 'default';
    switchTheme(savedTheme);
  }, []);

  const switchTheme = (newTheme) => {
    // Remove all theme classes
    document.body.classList.remove('theme-neon', 'theme-professional', 'theme-minimal', 'theme-linkedin', 'theme-leetdark');
    
    // Add new theme class if not default
    if (newTheme !== 'default') {
      document.body.classList.add('theme-' + newTheme);
    }
    
    // Update active button
    document.querySelectorAll('.toggle-btn').forEach(btn => btn.classList.remove('active'));
    const btn = document.querySelector('[data-theme="' + newTheme + '"]');
    if (btn) btn.classList.add('active');
    
    // Save to localStorage
    localStorage.setItem('vibe-theme', newTheme);
    setTheme(newTheme);
  };

  return { theme, switchTheme };
};
