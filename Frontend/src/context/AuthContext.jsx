import { createContext, useEffect, useState } from "react";
import { getMe } from "../services/authService";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

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
      localStorage.removeItem("token");
      setUser(null);
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
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
