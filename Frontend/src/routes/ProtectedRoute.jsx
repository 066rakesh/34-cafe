import { useContext } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { Spinner } from "../components/Common/Spinner";

export const ProtectedRoute = () => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) return <Spinner />;

  if (!user) {
    return <Navigate to={`/?auth=login&redirect=${location.pathname}`} replace/>;
  }

  return <Outlet />;
};
