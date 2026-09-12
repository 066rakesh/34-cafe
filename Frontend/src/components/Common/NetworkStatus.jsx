import { useEffect, useState } from "react";
import styles from "./NetworkStatus.module.css";

export const NetworkStatus = () => {
  const [isOnLine, setIsOnLine] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setIsOnLine(true);
    const handleOffline = () => setIsOnLine(false);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  if(isOnLine) return null;

  return <div className={styles.banner}>No internet connection</div>;
};
