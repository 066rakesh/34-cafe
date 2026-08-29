import { useContext, useEffect } from "react";
import { UIContext } from "../../context/UIContext";
import { Profile } from "./Profile";
import styles from "./Modal.module.css";

export const ProfileModal = () => {
  const { isProfileOpen, setIsProfileOpen } = useContext(UIContext);

  useEffect(() => {
    if (isProfileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isProfileOpen]);

  return (
    <div
      className={isProfileOpen ? styles.overlay : ""}
      onClick={() => setIsProfileOpen(false)}
    >
      {isProfileOpen && <Profile />}
    </div>
  );
};
