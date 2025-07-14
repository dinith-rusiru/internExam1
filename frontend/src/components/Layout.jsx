import { Link, Outlet } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

export default function Layout() {
  const { user, logout } = useAuth();

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <Link to="/" className="text-xl font-bold text-gray-900">
                  Admin Panel
                </Link>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              {user ? (
                <>
                  {user.role === 'admin' && (
                    <>
                      <Link
                        to="/users"
                        className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900"
                      >
                        Users
                      </Link>
                      <Link
                        to="/role-management"
                        className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900"
                      >
                        Role Management
                      </Link>
                    </>
                  )}
                  <button
                    onClick={logout}
                    className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link
                    to="/login"
                    className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900"
                  >
                    Login
                  </Link>
                  <Link
                    to="/register"
                    className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900"
                  >
                    Register
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <Outlet />
      </main>
    </div>
  );
}