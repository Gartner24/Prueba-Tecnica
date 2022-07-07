import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRouter = ({ isLoggedIn, children }) => {
  return isLoggedIn ? children : <Navigate to="/login" />;
};

export default PrivateRouter;
