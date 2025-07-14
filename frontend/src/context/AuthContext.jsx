import { createContext, useContext, useReducer, useEffect } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import toast from 'react-hot-toast';

const AuthContext = createContext();

const initialState = {
  user: null,
  token: null,
  isAuthenticated: false,
  loading: true,
  error: null,
};

const authReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN_START':
    case 'REGISTER_START':
      return { ...state, loading: true, error: null };
    case 'LOGIN_SUCCESS':
    case 'REGISTER_SUCCESS':
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        isAuthenticated: true,
        loading: false,
        error: null,
      };
    case 'LOGIN_FAIL':
    case 'REGISTER_FAIL':
      return {
        ...state,
        user: null,
        token: null,
        isAuthenticated: false,
        loading: false,
        error: action.payload,
      };
    case 'LOGOUT':
      return {
        ...state,
        user: null,
        token: null,
        isAuthenticated: false,
        loading: false,
        error: null,
      };
    case 'SET_LOADING':
      return { ...state, loading: action.payload };
    case 'CLEAR_ERROR':
      return { ...state, error: null };
    default:
      return state;
  }
};

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  // Setup axios interceptor
  useEffect(() => {
    const token = Cookies.get('token');
    if (token) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      loadUser();
    } else {
      dispatch({ type: 'SET_LOADING', payload: false });
    }
  }, []);

  // Load user
  const loadUser = async () => {
    try {
      const res = await axios.get('/api/v1/auth/me');
      dispatch({
        type: 'LOGIN_SUCCESS',
        payload: {
          user: res.data.data,
          token: Cookies.get('token'),
        },
      });
    } catch (error) {
      dispatch({ type: 'LOGOUT' });
      Cookies.remove('token');
    }
  };

  // Login user
  const login = async (email, password) => {
    dispatch({ type: 'LOGIN_START' });
    try {
      const res = await axios.post('/api/v1/auth/login', { email, password });
      
      const { token } = res.data;
      
      // Set token in cookie and axios header
      Cookies.set('token', token, { expires: 7 });
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      
      // Load user data
      await loadUser();
      
      toast.success('Login successful!');
      return { success: true };
    } catch (error) {
      const errorMessage = error.response?.data?.error || 'Login failed';
      dispatch({ type: 'LOGIN_FAIL', payload: errorMessage });
      toast.error(errorMessage);
      return { success: false, error: errorMessage };
    }
  };

  // Register user
  const register = async (name, email, password, role = 'user') => {
    dispatch({ type: 'REGISTER_START' });
    try {
      const res = await axios.post('/api/v1/auth/register', {
        name,
        email,
        password,
        role,
      });
      
      const { token } = res.data;
      
      // Set token in cookie and axios header
      Cookies.set('token', token, { expires: 7 });
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      
      // Load user data
      await loadUser();
      
      toast.success('Registration successful!');
      return { success: true };
    } catch (error) {
      const errorMessage = error.response?.data?.error || 'Registration failed';
      dispatch({ type: 'REGISTER_FAIL', payload: errorMessage });
      toast.error(errorMessage);
      return { success: false, error: errorMessage };
    }
  };

  // Logout user
  const logout = () => {
    dispatch({ type: 'LOGOUT' });
    Cookies.remove('token');
    delete axios.defaults.headers.common['Authorization'];
    toast.success('Logged out successfully!');
  };

  // Clear error
  const clearError = () => {
    dispatch({ type: 'CLEAR_ERROR' });
  };

  return (
    <AuthContext.Provider
      value={{
        ...state,
        login,
        register,
        logout,
        clearError,
        loadUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};