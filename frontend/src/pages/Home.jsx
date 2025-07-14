import { useAuth } from '../hooks/useAuth.js';

export default function Home() {
  const { user } = useAuth();

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h1 className="text-2xl font-bold text-gray-900 mb-4">
        Welcome {user ? user.name : 'Guest'}
      </h1>
      {user ? (
        <p className="text-gray-600">
          You are logged in as {user.role}
        </p>
      ) : (
        <p className="text-gray-600">
          Please login or register to access the dashboard
        </p>
      )}
    </div>
  );
}