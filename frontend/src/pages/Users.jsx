import { useEffect, useState } from "react";
import { userService } from "../api";
import { useAuth } from "../hooks/useAuth";
import { toast } from "react-hot-toast";
import {
  FiUsers,
  FiTrash2,
  FiEdit,
  FiUserCheck,
  FiUserX,
  FiSearch,
} from "react-icons/fi";
import Card, { CardHeader, CardBody } from "../components/ui/Card";
import Button from "../components/ui/Button";
import LoadingSpinner from "../components/ui/LoadingSpinner";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const { user } = useAuth();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await userService.getUsers();
        setUsers(data.data);
      } catch (error) {
        toast.error(error.message || "Failed to fetch users");
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const handleDelete = async (userId) => {
    if (userId === user?._id) {
      toast.error("You cannot delete your own account");
      return;
    }

    if (!window.confirm("Are you sure you want to delete this user?")) return;

    try {
      await userService.deleteUser(userId);
      setUsers(users.filter((userItem) => userItem._id !== userId));
      toast.success("User deleted successfully");
    } catch (error) {
      toast.error(error.message || "Failed to delete user");
    }
  };

  const handleRoleChange = async (userId, newRole) => {
    if (userId === user?._id) {
      toast.error("You cannot change your own role");
      return;
    }

    try {
      // Get current user data
      const currentUser = users.find((u) => u._id === userId);

      // Update with new role
      const data = await userService.updateUser(userId, {
        name: currentUser.name,
        email: currentUser.email,
        role: newRole,
      });

      setUsers(
        users.map((userItem) =>
          userItem._id === userId ? data.data : userItem
        )
      );

      toast.success("User role updated successfully");
    } catch (error) {
      toast.error(error.message || "Failed to update user role");
    }
  };

  const filteredUsers = users.filter(
    (userItem) =>
      userItem.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      userItem.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <LoadingSpinner size="lg" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-primary-600 via-secondary-600 to-accent-600 rounded-2xl p-8 text-white">
        <div className="flex items-center space-x-3 mb-4">
          <div className="p-3 bg-white/20 rounded-xl">
            <FiUsers className="w-8 h-8" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">Users Management</h1>
            <p className="text-white/80 mt-1">
              Manage and monitor all users in your system
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          <div className="bg-white/10 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white/80 text-sm">Total Users</p>
                <p className="text-2xl font-bold">{users.length}</p>
              </div>
              <FiUsers className="w-8 h-8 text-white/60" />
            </div>
          </div>
          <div className="bg-white/10 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white/80 text-sm">Admins</p>
                <p className="text-2xl font-bold">
                  {users.filter((u) => u.role === "admin").length}
                </p>
              </div>
              <FiUserCheck className="w-8 h-8 text-white/60" />
            </div>
          </div>
          <div className="bg-white/10 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white/80 text-sm">Regular Users</p>
                <p className="text-2xl font-bold">
                  {users.filter((u) => u.role === "user").length}
                </p>
              </div>
              <FiUserX className="w-8 h-8 text-white/60" />
            </div>
          </div>
        </div>
      </div>

      {/* Search and Actions */}
      <Card>
        <CardHeader>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
            <h2 className="text-xl font-semibold text-gray-900">User List</h2>
            <div className="relative w-full sm:w-auto">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiSearch className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search users..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="block w-full sm:w-80 pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
          </div>
        </CardHeader>
      </Card>

      {/* Users Table */}
      <Card>
        <CardBody className="p-0">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gradient-to-r from-gray-50 to-gray-100">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    User
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Email
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Role
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Created
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredUsers.map((userItem) => (
                  <tr
                    key={userItem._id}
                    className={`hover:bg-gray-50 transition-colors ${
                      userItem._id === user?._id
                        ? "bg-gradient-to-r from-primary-50 to-secondary-50"
                        : ""
                    }`}
                  >
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                          <div className="h-10 w-10 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 flex items-center justify-center">
                            <span className="text-white font-medium text-sm">
                              {userItem.name.charAt(0).toUpperCase()}
                            </span>
                          </div>
                        </div>
                        <div className="ml-4">
                          <div className="flex items-center space-x-2">
                            <div className="text-sm font-medium text-gray-900">
                              {userItem.name}
                            </div>
                            {userItem._id === user?._id && (
                              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-100 text-primary-800">
                                You
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {userItem.email}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <select
                        value={userItem.role}
                        onChange={(e) =>
                          handleRoleChange(userItem._id, e.target.value)
                        }
                        className={`px-3 py-1 rounded-lg text-sm font-medium border-0 focus:ring-2 focus:ring-primary-500 ${
                          userItem.role === "admin"
                            ? "bg-gradient-to-r from-success-100 to-success-200 text-success-800"
                            : "bg-gradient-to-r from-gray-100 to-gray-200 text-gray-800"
                        }`}
                        disabled={userItem._id === user?._id}
                      >
                        <option value="user">User</option>
                        <option value="admin">Admin</option>
                      </select>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {new Date(userItem.createdAt).toLocaleDateString(
                        "en-US",
                        {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        }
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex space-x-2">
                        {userItem._id !== user?._id && (
                          <Button
                            variant="danger"
                            size="sm"
                            onClick={() => handleDelete(userItem._id)}
                            className="flex items-center space-x-1"
                          >
                            <FiTrash2 className="w-3 h-3" />
                            <span>Delete</span>
                          </Button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {filteredUsers.length === 0 && (
            <div className="text-center py-12">
              <FiUsers className="mx-auto h-12 w-12 text-gray-400" />
              <h3 className="mt-2 text-sm font-medium text-gray-900">
                No users found
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                {searchTerm
                  ? "Try adjusting your search terms"
                  : "Get started by adding a user"}
              </p>
            </div>
          )}
        </CardBody>
      </Card>
    </div>
  );
}
