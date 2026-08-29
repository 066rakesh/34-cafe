import styles from "./AddressCard.module.css";
import skeletonStyles from "./AddressSkeleton.module.css";

export const AddressSkeleton = () => {
  return (
    <div className={styles.addressCard}>
      <div className={styles.addressTop}>
        <div className={styles.addressLabel}>
          <span
            className={`${skeletonStyles.skeleton} ${skeletonStyles.icon}`}
          ></span>
          <span
            className={`${skeletonStyles.skeleton} ${skeletonStyles.name}`}
          ></span>
        </div>
        <span
          className={`${skeletonStyles.skeleton} ${skeletonStyles.rightSlot}`}
        ></span>
      </div>
      <div className={styles.addressDetails}>
        <span
          className={`${skeletonStyles.skeleton} ${skeletonStyles.line} ${skeletonStyles.lineLong}`}
        ></span>
        <span
          className={`${skeletonStyles.skeleton} ${skeletonStyles.line} ${skeletonStyles.lineMedium}`}
        ></span>
      </div>
    </div>
  );
};
