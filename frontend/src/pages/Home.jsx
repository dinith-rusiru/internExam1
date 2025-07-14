import { useAuth } from "../hooks/useAuth.js";
import { Link } from "react-router-dom";
import {
  FiShield,
  FiUsers,
  FiZap,
  FiLock,
  FiTrendingUp,
  FiGlobe,
  FiArrowRight,
  FiStar,
  FiCheck,
} from "react-icons/fi";
import Card, { CardHeader, CardBody } from "../components/ui/Card";
import Button from "../components/ui/Button";

export default function Home() {
  const { user } = useAuth();

  const features = [
    {
      icon: FiShield,
      title: "Secure Authentication",
      description: "JWT-based authentication with role-based access control",
      color: "from-primary-500 to-primary-600",
    },
    {
      icon: FiUsers,
      title: "User Management",
      description: "Complete user management system with admin controls",
      color: "from-secondary-500 to-secondary-600",
    },
    {
      icon: FiZap,
      title: "Fast & Responsive",
      description: "Built with React and modern technologies for optimal performance",
      color: "from-accent-500 to-accent-600",
    },
    {
      icon: FiLock,
      title: "Data Protection",
      description: "Advanced security measures to protect your sensitive data",
      color: "from-success-500 to-success-600",
    },
  ];

  const benefits = [
    'Easy to use admin interface',
    'Role-based access control',
    'Responsive design for all devices',
    'Secure user authentication',
    'Real-time data updates',
    'Modern and beautiful UI'
  ];

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <div className="text-center">
        <div className="bg-gradient-to-r from-primary-600 via-secondary-600 to-accent-600 rounded-3xl p-12 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
          <div className="relative z-10">
            <h1 className="text-5xl font-bold mb-6">
              Welcome to{" "}
              <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
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
                    className="bg-white text-primary-600 hover:bg-gray-100"
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
                      className="bg-white text-primary-600 hover:bg-gray-100 w-full sm:w-auto"
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

      {/* Features Section */}
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Powerful Features
        </h2>
        <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
          Everything you need to manage your application and users effectively
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card key={index} hover className="text-center h-full">
                <CardBody className="p-6">
                  <div
                    className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center`}
                  >
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardBody>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Benefits Section */}
      <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Why Choose AdminHub?
            </h2>
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-gradient-to-r from-success-500 to-success-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <FiCheck className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <Card gradient className="p-6">
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center">
                  <FiStar className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Ready to Get Started?
                </h3>
                <p className="text-gray-600 mb-6">
                  Join thousands of users who trust AdminHub for their admin panel needs
                </p>
                {!user && (
                  <Link to="/register">
                    <Button variant="primary" size="lg" className="w-full">
                      Create Account
                      <FiArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                  </Link>
                )}
              </div>
            </Card>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="text-center">
          <CardBody className="p-6">
            <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-r from-primary-500 to-primary-600 rounded-lg flex items-center justify-center">
              <FiUsers className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">1000+</h3>
            <p className="text-gray-600">Active Users</p>
          </CardBody>
        </Card>
        
        <Card className="text-center">
          <CardBody className="p-6">
            <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-r from-secondary-500 to-secondary-600 rounded-lg flex items-center justify-center">
              <FiGlobe className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">50+</h3>
            <p className="text-gray-600">Countries</p>
          </CardBody>
        </Card>
        
        <Card className="text-center">
          <CardBody className="p-6">
            <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-r from-accent-500 to-accent-600 rounded-lg flex items-center justify-center">
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
