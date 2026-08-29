import styles from "./DesktopNavbarSkeleton.module.css";

export const DesktopNavbarSkeleton = () => {
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <div className={`${styles.shimmer} ${styles.backBtn}`} />

        <nav className={styles.nav}>
          <div className={`${styles.shimmer} ${styles.navItem}`} />
          <div className={`${styles.shimmer} ${styles.navItem}`} />
          <div className={`${styles.shimmer} ${styles.navItem}`} />
          <div className={`${styles.shimmer} ${styles.navItem}`} />
        </nav>

        <div className={styles.actions}>
          <div className={`${styles.shimmer} ${styles.cart}`} />
          <div className={`${styles.shimmer} ${styles.user}`} />
        </div>
      </div>
    </header>
  );
};
