// ProtectedRoute.js
import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { UserContext } from './user_context';

const ProtectedRoute = ({ children }) => {
  const { username, setRedirectPath } = useContext(UserContext);
  const location = useLocation();

  if (!username) {
    setRedirectPath(location.pathname); // Store the original destination
    return <Navigate to="/signup" />;
  }

  return children;
};

export default ProtectedRoute;
