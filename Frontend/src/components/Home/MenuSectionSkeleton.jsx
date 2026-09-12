import styles from "./MenuSectionSkeleton.module.css";

export const ChefSpecialsSkeleton = () => {
  return (
    <div className={styles.skeletonCard1}>
      <div className={styles.skeletonCircle} />
      <div className={styles.skeletonLine1} style={{ width: "60px" }} />
    </div>
  );
};

export const CravingSkeleton = () => {
  return (
    <div className={styles.skeletonCard2}>
      <div className={styles.skeletonImage} />
      <div className={styles.skeletonLine2} style={{ width: "70%" }} />
      <div className={styles.skeletonLine2} style={{ width: "40%" }} />
    </div>
  );
};