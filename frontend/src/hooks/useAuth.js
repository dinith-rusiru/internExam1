import { useState, useEffect } from 'react';
import { authService } from '../api';
import { useNavigate } from 'react-router-dom';

export function useAuth() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem('token');
        // console.log('useAuth - Token from localStorage:', token);
        
        if (!token) {
          // console.log('useAuth - No token found');
          setLoading(false);
          return;
        }

        // console.log('useAuth - Calling authService.getMe()');
        const data = await authService.getMe();
        // console.log('useAuth - Response from getMe:', data);
        setUser(data.data);
      } catch (error) {
        // console.log('useAuth - Error fetching user:', error);
        localStorage.removeItem('token');
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  const login = (token) => {
    localStorage.setItem('token', token);
    authService.getMe().then((data) => setUser(data.data));
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
    navigate('/login');
  };

  // console.log('useAuth - Current user state:', user);
  // console.log('useAuth - Loading state:', loading);

  return { user, loading, login, logout };
}