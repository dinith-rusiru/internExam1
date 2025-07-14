import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import {
  FiUser,
  FiSettings,
  FiLogOut,
  FiMenu,
  FiUsers,
  FiHome,
  FiGrid,
} from "react-icons/fi";
import { useState } from "react";

export default function Header() {
  const { user, logout } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-primary-600 via-secondary-600 to-accent-600 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                <FiGrid className="w-5 h-5 text-primary-600" />
              </div>
              <span className="text-xl font-bold text-white">AdminHub</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link
              to="/"
              className="flex items-center space-x-1 px-3 py-2 rounded-lg text-white hover:bg-white/10 transition-colors"
            >
              <FiHome className="w-4 h-4" />
              <span>Home</span>
            </Link>

            {user && (
              <Link
                to="/dashboard"
                className="flex items-center space-x-1 px-3 py-2 rounded-lg text-white hover:bg-white/10 transition-colors"
              >
                <FiGrid className="w-4 h-4" />
                <span>Dashboard</span>
              </Link>
            )}

            {user?.role === "admin" && (
              <Link
                to="/users"
                className="flex items-center space-x-1 px-3 py-2 rounded-lg text-white hover:bg-white/10 transition-colors"
              >
                <FiUsers className="w-4 h-4" />
                <span>Users</span>
              </Link>
            )}
          </nav>

          {/* User Menu */}
          <div className="flex items-center space-x-4">
            {user ? (
              <div className="relative">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors"
                >
                  <FiUser className="w-4 h-4" />
                  <span className="hidden sm:block">{user.name}</span>
                </button>

                {isMenuOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-1 z-50">
                    <div className="px-4 py-2 border-b border-gray-200">
                      <p className="text-sm font-medium text-gray-900">
                        {user.name}
                      </p>
                      <p className="text-xs text-gray-500">{user.email}</p>
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-primary-100 text-primary-800 mt-1">
                        {user.role}
                      </span>
                    </div>
                    <button
                      onClick={logout}
                      className="flex items-center space-x-2 w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      <FiLogOut className="w-4 h-4" />
                      <span>Logout</span>
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <Link
                  to="/login"
                  className="px-4 py-2 text-white hover:bg-white/10 rounded-lg transition-colors"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="px-4 py-2 bg-white text-primary-600 rounded-lg hover:bg-gray-100 transition-colors font-medium"
                >
                  Register
                </Link>
              </div>
            )}

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg text-white hover:bg-white/10"
            >
              <FiMenu className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/20">
            <div className="flex flex-col space-y-2">
              <Link
                to="/"
                className="flex items-center space-x-2 px-3 py-2 rounded-lg text-white hover:bg-white/10"
                onClick={() => setIsMenuOpen(false)}
              >
                <FiHome className="w-4 h-4" />
                <span>Home</span>
              </Link>

              {user && (
                <Link
                  to="/dashboard"
                  className="flex items-center space-x-2 px-3 py-2 rounded-lg text-white hover:bg-white/10"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <FiGrid className="w-4 h-4" />
                  <span>Dashboard</span>
                </Link>
              )}

              {user?.role === "admin" && (
                <Link
                  to="/users"
                  className="flex items-center space-x-2 px-3 py-2 rounded-lg text-white hover:bg-white/10"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <FiUsers className="w-4 h-4" />
                  <span>Users</span>
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
