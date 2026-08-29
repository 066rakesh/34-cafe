import { useContext } from "react";
import {
  Navigate,
  Outlet,
  useLocation,
  useSearchParams,
} from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { Spinner } from "../components/Common/Spinner";

export const ProtectedRoute = () => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  const [searchParams] = useSearchParams();

  if (loading) return <Spinner />;

  if (!user) {
    if (searchParams.get("auth")) {
      return null;
    }

    return (
      <Navigate
        to={`${location.pathname}?auth=login&redirect=${encodeURIComponent(location.pathname)}`}
        replace
      />
    );
  }

  return <Outlet />;
};
