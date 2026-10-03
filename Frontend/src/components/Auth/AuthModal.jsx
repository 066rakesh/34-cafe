import { useContext, useEffect } from "react";
import { Login } from "../Auth/Login";
import { SignUp } from "../Auth/SignUp";
import styles from "./AuthModal.module.css";
import { AuthContext } from "../../context/AuthContext";

export const AuthModal = () => {
  const { isAuthOpen, setIsAuthOpen, authMode } = useContext(AuthContext);

  useEffect(() => {
    if (isAuthOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isAuthOpen]);

  if (!isAuthOpen) return null;

  return (
    <div className={styles.overlay} onClick={() => setIsAuthOpen(false)}>
      {authMode === "login" ? <Login /> : <SignUp />}
    </div>
  );
};
