import React from "react";
import { Navigate, Outlet } from "react-router-dom";

function PublicRoute({ isAutentication }) {
  return <div>{isAutentication ? <Navigate to="/" /> : <Outlet />}</div>;
}

export default PublicRoute;
