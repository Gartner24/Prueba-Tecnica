import React from "react";
import { Navigate } from "react-router-dom";

const PublicRouter = ({ isLoggedIn, children }) => {
  return !isLoggedIn ? children : <Navigate to="/" />;
};

export default PublicRouter;
