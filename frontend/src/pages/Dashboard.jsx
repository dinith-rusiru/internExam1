import { useAuth } from "../hooks/useAuth";
import { toast } from "react-hot-toast";
import {
  FiUser,
  FiMail,
  FiShield,
  FiActivity,
  FiClock,
  FiTrendingUp,
  FiUsers,
  FiSettings,
} from "react-icons/fi";
import Card, { CardHeader, CardBody } from "../components/ui/Card";
import Button from "../components/ui/Button";

export default function Dashboard() {
  const { user } = useAuth();

  const stats = [
    {
      label: "Active Sessions",
      value: "1",
      icon: FiActivity,
      color: "from-emerald-500 to-teal-600",
      bgColor: "from-emerald-50 to-teal-100",
    },
    {
      label: "Account Age",
      value:
        Math.ceil(
          (Date.now() - new Date(user?.createdAt).getTime()) /
            (1000 * 60 * 60 * 24)
        ) + " days",
      icon: FiClock,
      color: "from-violet-500 to-purple-600",
      bgColor: "from-violet-50 to-purple-100",
    },
    {
      label: "Permission Level",
      value: user?.role === "admin" ? "Full Access" : "Limited Access",
      icon: FiShield,
      color: "from-rose-500 to-pink-600",
      bgColor: "from-rose-50 to-pink-100",
    },
    {
      label: "Status",
      value: "Active",
      icon: FiTrendingUp,
      color: "from-cyan-500 to-blue-600",
      bgColor: "from-cyan-50 to-blue-100",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Welcome Header */}
      <div className="bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 rounded-2xl p-8 text-white">
        <div className="flex flex-col md:flex-row md:items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
              <FiUser className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">
                Welcome back, {user?.name}!
              </h1>
              <p className="text-white/80 mt-1">
                Here's what's happening with your account today
              </p>
            </div>
          </div>
          <div className="mt-4 md:mt-0">
            <div className="flex items-center space-x-2 bg-white/10 rounded-lg px-4 py-2">
              <FiShield className="w-5 h-5" />
              <span className="font-medium">{user?.role}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const IconComponent = stat.icon;
          return (
            <Card key={index} hover className="relative overflow-hidden">
              <div
                className={`absolute inset-0 bg-gradient-to-br ${stat.bgColor} opacity-50`}
              ></div>
              <CardBody className="relative">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">
                      {stat.label}
                    </p>
                    <p className="text-2xl font-bold text-gray-900 mt-1">
                      {stat.value}
                    </p>
                  </div>
                  <div
                    className={`p-3 rounded-lg bg-gradient-to-r ${stat.color}`}
                  >
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                </div>
              </CardBody>
            </Card>
          );
        })}
      </div>

      {/* User Information Card */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card gradient>
          <CardHeader>
            <h2 className="text-xl font-semibold text-gray-900 flex items-center">
              <FiUser className="w-5 h-5 mr-2" />
              Account Information
            </h2>
          </CardHeader>
          <CardBody className="space-y-4">
            <div className="flex items-center space-x-3 p-4 bg-white/60 rounded-lg">
              <div className="p-2 bg-emerald-100 rounded-lg">
                <FiUser className="w-5 h-5 text-emerald-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Full Name</p>
                <p className="font-semibold text-gray-900">{user?.name}</p>
              </div>
            </div>

            <div className="flex items-center space-x-3 p-4 bg-white/60 rounded-lg">
              <div className="p-2 bg-violet-100 rounded-lg">
                <FiMail className="w-5 h-5 text-violet-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Email Address</p>
                <p className="font-semibold text-gray-900">{user?.email}</p>
              </div>
            </div>

            <div className="flex items-center space-x-3 p-4 bg-white/60 rounded-lg">
              <div className="p-2 bg-rose-100 rounded-lg">
                <FiShield className="w-5 h-5 text-rose-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Account Role</p>
                <div className="flex items-center space-x-2">
                  <p className="font-semibold text-gray-900 capitalize">
                    {user?.role}
                  </p>
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                      user?.role === "admin"
                        ? "bg-emerald-100 text-emerald-800"
                        : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    {user?.role === "admin" ? "Full Access" : "Limited Access"}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-3 p-4 bg-white/60 rounded-lg">
              <div className="p-2 bg-cyan-100 rounded-lg">
                <FiClock className="w-5 h-5 text-cyan-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Member Since</p>
                <p className="font-semibold text-gray-900">
                  {user?.createdAt
                    ? new Date(user.createdAt).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })
                    : "N/A"}
                </p>
              </div>
            </div>
          </CardBody>
        </Card>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <h2 className="text-xl font-semibold text-gray-900 flex items-center">
              <FiSettings className="w-5 h-5 mr-2" />
              Quick Actions
            </h2>
          </CardHeader>
          <CardBody className="space-y-4">
            <div className="grid grid-cols-1 gap-3">
              {user?.role === "admin" && (
                <Button
                  variant="primary"
                  className="w-full justify-start"
                  onClick={() => (window.location.href = "/users")}
                >
                  <FiUsers className="w-4 h-4 mr-2" />
                  Manage Users
                </Button>
              )}

              <Button
                variant="secondary"
                className="w-full justify-start"
                onClick={() => toast.info("Profile settings coming soon!")}
              >
                <FiUser className="w-4 h-4 mr-2" />
                Edit Profile
              </Button>

              <Button
                variant="outline"
                className="w-full justify-start"
                onClick={() => toast.info("Settings coming soon!")}
              >
                <FiSettings className="w-4 h-4 mr-2" />
                Account Settings
              </Button>
            </div>

            {/* Recent Activity */}
            <div className="mt-6 pt-6 border-t border-gray-200">
              <h3 className="text-sm font-medium text-gray-900 mb-3">
                Recent Activity
              </h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-sm">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                  <span className="text-gray-600">Logged in to dashboard</span>
                  <span className="text-gray-400 ml-auto">Now</span>
                </div>
                <div className="flex items-center space-x-3 text-sm">
                  <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                  <span className="text-gray-600">Account created</span>
                  <span className="text-gray-400 ml-auto">
                    {user?.createdAt
                      ? new Date(user.createdAt).toLocaleDateString()
                      : "N/A"}
                  </span>
                </div>
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}
