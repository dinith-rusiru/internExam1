import { useAuth } from "../hooks/useAuth.js";
import { Link } from "react-router-dom";
import {
  FiUsers,
  FiTrendingUp,
  FiGlobe,
  FiArrowRight,
  FiZap,
} from "react-icons/fi";
import Card, { CardBody } from "../components/ui/Card";
import Button from "../components/ui/Button";

export default function Home() {
  const { user } = useAuth();

  // Removed features and benefits arrays as they are no longer needed

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <div className="text-center">
        <div className="bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 rounded-3xl p-12 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
          <div className="relative z-10">
            <h1 className="text-5xl font-bold mb-6">
              Welcome to{" "}
              <span className="bg-gradient-to-r from-amber-300 to-pink-300 bg-clip-text text-transparent">
                AdminHub
              </span>
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              A powerful, modern admin panel built with React and Node.js.
              Manage your users, data, and applications with ease and style.
            </p>

            {user ? (
              <div className="space-y-4">
                <p className="text-lg text-white/80">
                  Welcome back,{" "}
                  <span className="font-semibold">{user.name}</span>! You are
                  logged in as{" "}
                  <span className="font-semibold capitalize">{user.role}</span>
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    variant="accent"
                    size="lg"
                    className="bg-white text-emerald-600 hover:bg-gray-100"
                    onClick={() => (window.location.href = "/dashboard")}
                  >
                    <FiTrendingUp className="w-5 h-5 mr-2" />
                    Go to Dashboard
                  </Button>
                  {user.role === "admin" && (
                    <Button
                      variant="outline"
                      size="lg"
                      className="border-white text-white hover:bg-white/10"
                      onClick={() => (window.location.href = "/users")}
                    >
                      <FiUsers className="w-5 h-5 mr-2" />
                      Manage Users
                    </Button>
                  )}
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <p className="text-lg text-white/80">
                  Get started by creating an account or logging in to access the
                  dashboard
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/register">
                    <Button
                      variant="accent"
                      size="lg"
                      className="bg-white text-emerald-600 hover:bg-gray-100 w-full sm:w-auto"
                    >
                      Get Started
                      <FiArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                  </Link>
                  <Link to="/login">
                    <Button
                      variant="outline"
                      size="lg"
                      className="border-white text-white hover:bg-white/10 w-full sm:w-auto"
                    >
                      Sign In
                    </Button>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="text-center">
          <CardBody className="p-6">
            <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center">
              <FiUsers className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">1000+</h3>
            <p className="text-gray-600">Active Users</p>
          </CardBody>
        </Card>

        <Card className="text-center">
          <CardBody className="p-6">
            <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-r from-violet-500 to-purple-600 rounded-lg flex items-center justify-center">
              <FiGlobe className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">50+</h3>
            <p className="text-gray-600">Countries</p>
          </CardBody>
        </Card>

        <Card className="text-center">
          <CardBody className="p-6">
            <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-r from-rose-500 to-pink-600 rounded-lg flex items-center justify-center">
              <FiZap className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">99.9%</h3>
            <p className="text-gray-600">Uptime</p>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}
