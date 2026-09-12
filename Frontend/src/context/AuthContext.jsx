import { createContext, useEffect, useState } from "react";
import { getMe } from "../services/authService";
import { useNavigate, useSearchParams } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const [searchParams, setSearchParams] = useSearchParams();

  const authParam = searchParams.get("auth");
  const isAuthOpen = authParam ? true : false;
  const authMode = authParam || "login";

  const setIsAuthOpen = (value) => {
    if (value === true) {
      searchParams.set("auth", "login");
    } else {
      searchParams.delete("auth");
    }
    setSearchParams(searchParams);
  };

  const setAuthMode = (mode) => {
    searchParams.set("auth", mode);
    setSearchParams(searchParams);
  };

  const fetchUser = async () => {
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        setUser(null);
        return;
      }
      const response = await getMe();
      setUser(response.data.user);
    } catch (error) {
      if (error.response?.status === 401 || error.response?.status === 403) {
        localStorage.removeItem("token");
        setUser(null);
      }
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };

  const logoutUser = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,

        loading,
        fetchUser,
        logoutUser,

        isAuthOpen,
        setIsAuthOpen,
        authMode,
        setAuthMode,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
