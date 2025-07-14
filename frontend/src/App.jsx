import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Layout from './components/Layout';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Users from './pages/Users';
// import RoleManagement from './pages/RoleManagement';
import PrivateRoute from './components/PrivateRoute';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
             {/* <Route path="role-management" element={<RoleManagement />} />    */}
        
          <Route element={<PrivateRoute />}>
            <Route path="dashboard" element={<Dashboard />} />
          </Route>
          
          <Route element={<PrivateRoute roles={['admin']} />}>
            <Route path="users" element={<Users />} />
          </Route>
        </Route>
      </Routes>
      <Toaster position="top-right" />
    </BrowserRouter>
  );
}