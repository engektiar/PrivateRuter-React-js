import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import UseAuth from "./UseAuth";

const PrivateRouter = () => {
  const auth = UseAuth();
  return auth ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRouter;
