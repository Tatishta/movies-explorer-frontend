import React from "react";
import { Navigate } from "react-router-dom";

const UserProtectedRoute = ({ children, redirectTo, loggedIn }) => {
  return loggedIn ?  <Navigate to={redirectTo}/> : children;
};

export default UserProtectedRoute;
