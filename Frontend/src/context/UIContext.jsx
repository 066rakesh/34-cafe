import { createContext, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

export const UIContext = createContext();

export const UIProvider = ({ children }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const navigate = useNavigate();

  const authParam = searchParams.get("auth");

  const isAuthOpen = Boolean(authParam);
  const authMode = authParam === "login" ? "login" : authParam || "login";

  const setIsAuthOpen = (open) => {
    if (open) {
      setSearchParams((prev) => {
        const params = new URLSearchParams(prev);
        params.set("auth", "login");
        return params;
      });
      return;
    }

    // Modal band ki jaa rahi hai — agar redirect param hai (protected route se aaya tha), home bhej do
    const redirect = searchParams.get("redirect");

    if (redirect) {
      navigate("/", { replace: true });
    } else {
      setSearchParams((prev) => {
        const params = new URLSearchParams(prev);
        params.delete("auth");
        params.delete("redirect");
        return params;
      });
    }
  };

  const setAuthMode = (mode) => {
    setSearchParams((prev) => {
      const params = new URLSearchParams(prev);
      params.set("auth", mode);
      return params;
    });
  };

  return (
    <UIContext.Provider
      value={{
        isAuthOpen,
        setIsAuthOpen,
        authMode,
        setAuthMode,
        isProfileOpen,
        setIsProfileOpen,
      }}
    >
      {children}
    </UIContext.Provider>
  );
};