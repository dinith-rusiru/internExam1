import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth.js';

export default function PrivateRoute({ roles }) {
  const { user, loading } = useAuth();

  // Debug logging
  console.log('PrivateRoute - User:', user);
  console.log('PrivateRoute - Loading:', loading);
  console.log('PrivateRoute - Required roles:', roles);
  console.log('PrivateRoute - User role:', user?.role);
  console.log('PrivateRoute - Role check:', roles ? roles.includes(user?.role) : 'No roles required');

  // Show loading while checking authentication
  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (!user) {
    console.log('No user found, redirecting to login');
    return <Navigate to="/login" replace />;
  }

  if (roles && !roles.includes(user.role)) {
    console.log('User role not authorized, redirecting to home');
    return <Navigate to="/" replace />;
  }

  console.log('Access granted');
  return <Outlet />;
}