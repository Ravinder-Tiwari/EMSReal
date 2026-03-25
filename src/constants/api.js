/**
 * API Configuration Constants
 */

export const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001/api';

export const API_ENDPOINTS = {
  // Auth endpoints
  AUTH: {
    LOGIN: '/auth/login',
    REGISTER: '/auth/register',
    LOGOUT: '/auth/logout',
    ME: '/auth/me',
  },

  // User endpoints
  USERS: {
    GET_ALL: '/users',
    GET_BY_ID: '/users/:id',
    UPDATE: '/users/:id',
    DELETE: '/users/:id',
  },

  // Dashboard endpoints
  DASHBOARD: {
    GET_STATS: '/dashboard/stats',
    GET_PROGRESS: '/dashboard/progress',
  },

  // Data endpoints
  DATA: {
    GET_ALL: '/data',
    GET_BY_ID: '/data/:id',
    CREATE: '/data',
    UPDATE: '/data/:id',
    DELETE: '/data/:id',
  },
};

export const API_TIMEOUT = 30000; // 30 seconds
export const RETRY_ATTEMPTS = 3;
export const RETRY_DELAY = 1000; // 1 second
