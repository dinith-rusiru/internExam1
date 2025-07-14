import { useAuth } from '../hooks/useAuth';

export default function Dashboard() {
  const { user } = useAuth();

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h1 className="text-2xl font-bold text-gray-900 mb-4">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-blue-50 p-4 rounded-lg">
          <h3 className="font-medium text-blue-800">Welcome</h3>
          <p className="mt-2 text-blue-600">{user?.name}</p>
        </div>
        <div className="bg-green-50 p-4 rounded-lg">
          <h3 className="font-medium text-green-800">Role</h3>
          <p className="mt-2 text-green-600">{user?.role}</p>
        </div>
        <div className="bg-purple-50 p-4 rounded-lg">
          <h3 className="font-medium text-purple-800">Email</h3>
          <p className="mt-2 text-purple-600">{user?.email}</p>
        </div>
      </div>
    </div>
  );
}