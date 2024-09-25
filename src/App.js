import React, {useState} from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import HomePage from "./pages/HomePage";
import LoginPage from './pages/LoginPage';
import SuperUserDashboard from './pages/SuperUserDashboard';
import AdminDashboard from './pages/AdminDashboard';
import UserDashboard from './pages/UserDashboard';
import PrivateRoute from './utils/PrivateRoute';
import './styles/Layout.css';

function App() {
  const [user, setUser] = useState(null);

  const handleLogin = (userData) => {
    setUser(userData);
    localStorage.setItem('role', userData.role)
  };


return (
  <Router>
    <div className="wrapper">
      <header/>
      <div className="main">
      <Sidebar/>
      <div className="content">
        <Routes>
          <Route path="/login" element={user ? <Navigate to="/" /> : <LoginPage onLogin={handleLogin} />} />
          <Route path="/" element={user ? <HomePage user={user} /> : <Navigate to="/login" />} />

          
          <Route path="/superuser" element={<PrivateRoute role="superuser"><SuperUserDashboard/></PrivateRoute>} />
          <Route path="/admin" element={<PrivateRoute role="admin"><AdminDashboard/></PrivateRoute>} />
          <Route path="/user" element={<PrivateRoute role="user"><UserDashboard/></PrivateRoute>} />
        </Routes>
      </div>
      </div>
      <Footer/>
    </div>  
  </Router>
);
};

export default App;