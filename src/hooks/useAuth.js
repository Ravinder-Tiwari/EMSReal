import { useState, useCallback } from 'react';
import authService from '../services/authService';

/**
 * Custom hook for authentication
 * Handles login, logout, and auth state
 */
const useAuth = () => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const login = useCallback(async (email, password) => {
    setIsLoading(true);
    setError(null);
    try {
      const userData = await authService.login(email, password);
      setUser(userData);
      return userData;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setIsLoading(false);
    }
  }, []);

  const logout = useCallback(() => {
    authService.logout();
    setUser(null);
  }, []);

  const register = useCallback(async (email, password, name) => {
    setIsLoading(true);
    setError(null);
    try {
      const userData = await authService.register(email, password, name);
      setUser(userData);
      return userData;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setIsLoading(false);
    }
  }, []);

  return {
    user,
    isLoading,
    error,
    login,
    logout,
    register,
    isAuthenticated: !!user,
  };
};

export default useAuth;
