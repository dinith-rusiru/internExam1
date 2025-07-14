import { useEffect, useState } from 'react';
import { userService } from '../api';
import { useAuth } from '../hooks/useAuth';
import { toast } from 'react-hot-toast';

export default function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await userService.getUsers();
        setUsers(data.data);
      } catch (error) {
        toast.error(error.message || 'Failed to fetch users');
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

    if (!window.confirm('Are you sure you want to delete this user?')) return;

    try {
      await userService.deleteUser(userId);
      setUsers(users.filter((userItem) => userItem._id !== userId));
      toast.success('User deleted successfully');
    } catch (error) {
      toast.error(error.message || 'Failed to delete user');
    }
  };

  const handleRoleChange = async (userId, newRole) => {
    if (userId === user?._id) {
      toast.error("You cannot change your own role");
      return;
    }

    try {
      // Get current user data
      const currentUser = users.find(u => u._id === userId);
      
      // Update with new role
      const data = await userService.updateUser(userId, {
        name: currentUser.name,
        email: currentUser.email,
        role: newRole
      });
      
      setUsers(users.map(userItem => 
        userItem._id === userId ? data.data : userItem
      ));
      
      toast.success('User role updated successfully');
    } catch (error) {
      toast.error(error.message || 'Failed to update user role');
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="bg-white shadow rounded-lg p-6 overflow-x-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Users Management</h1>
        <span className="text-sm text-gray-500">Total Users: {users.length}</span>
      </div>
      
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Name
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Email
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Role
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Created At
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {users.map((userItem) => (
            <tr key={userItem._id} className={userItem._id === user?._id ? 'bg-blue-50' : ''}>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                <div className="flex items-center">
                  {userItem.name}
                  {userItem._id === user?._id && (
                    <span className="ml-2 px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded-full">You</span>
                  )}
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {userItem.email}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                <select
                  value={userItem.role}
                  onChange={(e) => handleRoleChange(userItem._id, e.target.value)}
                  className="px-2 py-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  disabled={userItem._id === user?._id} // Prevent self role change
                >
                  <option value="user">User</option>
                  <option value="admin">Admin</option>
                </select>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {new Date(userItem.createdAt).toLocaleDateString()}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                {userItem._id !== user?._id && (
                  <button
                    onClick={() => handleDelete(userItem._id)}
                    className="text-red-600 hover:text-red-900 font-medium"
                  >
                    Delete
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {users.length === 0 && (
        <div className="text-center py-8 text-gray-500">
          No users found
        </div>
      )}
    </div>
  );
}