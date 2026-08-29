import { useContext, useEffect } from "react";
import { UIContext } from "../../context/UIContext";
import { Login } from "../Auth/Login";
import {SignUp} from "../Auth/SignUp";
import styles from "./Modal.module.css";

export const AuthModal = () => {
  const { isAuthOpen, setIsAuthOpen, authMode } = useContext(UIContext);

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
