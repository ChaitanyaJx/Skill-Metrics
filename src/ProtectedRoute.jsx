import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const location = useLocation();
  const isAuthenticated = checkAuthStatus();

  if (!isAuthenticated) {
    // Redirect to login page if not authenticated
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

// Implement this function to check the authentication status
function checkAuthStatus() {
  // This is just a placeholder. Replace with your actual authentication check
  // For example, you might check for a valid token in localStorage
  return localStorage.getItem('authToken') !== null;
}

export default ProtectedRoute;