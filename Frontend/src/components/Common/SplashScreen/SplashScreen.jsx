import styles from "./SplashScreen.module.css";
import logo from "../../../assets/images/logo_red.svg";

export const SplashScreen = () => {
  return (
    <div
      className={styles.splash}
      role="status"
      aria-label="Loading 34 Paapi Pet Cafe"
    >
      <div className={styles.logoWrap}>
        <img src={logo} alt="" className={styles.logo} />
      </div>

      <div className={styles.progressTrack}>
        <div className={styles.progressBar} />
      </div>
    </div>
  );
};
