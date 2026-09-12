import styles from "./FoodGridSkeleton.module.css";

export const FoodGridSkeleton = () => {
  return (
    <section>
      <div className={styles.foods}>
        {Array.from({ length: 10 }).map((_, index) => (
          <div className={styles.skeletonCard} key={index}>
            <div className={styles.skeletonImage} />

            <div className={styles.skeletonContent}>
              <div className={styles.skeletonTopRow}>
                <div
                  className={`${styles.skeletonLine} ${styles.skeletonTitle}`}
                />
                <div
                  className={`${styles.skeletonLine} ${styles.skeletonBadge}`}
                />
              </div>

              <div
                className={`${styles.skeletonLine} ${styles.skeletonDesc}`}
              />

              <div className={styles.skeletonMetaRow}>
                <div
                  className={`${styles.skeletonLine} ${styles.skeletonMeta}`}
                />
                <div
                  className={`${styles.skeletonLine} ${styles.skeletonMeta}`}
                />
              </div>

              <div
                className={`${styles.skeletonLine} ${styles.skeletonPrice}`}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
