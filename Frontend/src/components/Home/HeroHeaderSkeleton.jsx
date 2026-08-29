import styles from "./HeroHeaderSkeleton.module.css";

export const HeroHeaderSkeleton = () => {
  return (
    <header className={styles.header}>
      <div className={styles.brand}>
        <div className={`${styles.shimmer} ${styles.number}`} />
        <div className={`${styles.shimmer} ${styles.brandText}`} />
      </div>

      <nav className={styles.menuItems}>
        <div className={`${styles.shimmer} ${styles.navItem}`} />
        <div className={`${styles.shimmer} ${styles.navItem}`} />
        <div className={`${styles.shimmer} ${styles.navItem}`} />
        <div className={`${styles.shimmer} ${styles.navItem}`} />
      </nav>

      <div className={styles.btn}>
        <div className={`${styles.shimmer} ${styles.contactLink}`} />
        <div className={`${styles.shimmer} ${styles.userCircle}`} />
      </div>
    </header>
  );
};