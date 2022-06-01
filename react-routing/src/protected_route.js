import { React } from "react";
import { useAuthContext } from "./contex";
import { Outlet, Navigate, useLocation } from "react-router-dom";
function ProtectedRoutes() {
  const location = useLocation();
  const { isLoggedIn } = useAuthContext();
  return isLoggedIn ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
}

export default ProtectedRoutes;
