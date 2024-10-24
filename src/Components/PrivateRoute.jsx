// src/Components/PrivateRoute.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';

const isAuthenticated = true; // Mocked authentication, replace with real logic

const PrivateRoute = ({ element }) => {
  return isAuthenticated ? element : <Navigate to="/" />;
};

export default PrivateRoute;

