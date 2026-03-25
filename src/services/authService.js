import { API_BASE_URL } from '../constants/api';

/**
 * Authentication Service
 * Handles all authentication-related API calls
 */
const authService = {
  /**
   * Login user with email and password
   */
  login: async (email, password) => {
    try {
      const response = await fetch(`${API_BASE_URL}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error('Login failed');
      }

      const data = await response.json();
      localStorage.setItem('token', data.token);
      return data;
    } catch (error) {
      throw new Error(error.message || 'Login error');
    }
  },

  /**
   * Register new user
   */
  register: async (email, password, name) => {
    try {
      const response = await fetch(`${API_BASE_URL}/auth/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password, name }),
      });

      if (!response.ok) {
        throw new Error('Registration failed');
      }

      const data = await response.json();
      localStorage.setItem('token', data.token);
      return data;
    } catch (error) {
      throw new Error(error.message || 'Registration error');
    }
  },

  /**
   * Logout user
   */
  logout: () => {
    localStorage.removeItem('token');
  },

  /**
   * Get current user
   */
  getCurrentUser: async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) return null;

      const response = await fetch(`${API_BASE_URL}/auth/me`, {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch user');
      }

      return await response.json();
    } catch (error) {
      throw new Error(error.message || 'Error fetching user');
    }
  },

  /**
   * Get stored token
   */
  getToken: () => {
    return localStorage.getItem('token');
  },
};

export default authService;
