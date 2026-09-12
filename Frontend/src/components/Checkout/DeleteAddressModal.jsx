import styles from "./DeleteAddressModal.module.css";

export const DeleteAddressModal = ({ onCancel, onConfirm, loading, error }) => {
  return (
    <section className={styles.overlay}>
      <div className={styles.content}>
        <p className={styles.message}>
          Are you sure you want to delete this address?
        </p>

        {error && (
          <p className={styles.error}>
            Unable to delete address. Please try again.
          </p>
        )}

        <div className={styles.actions}>
          <button type="button" className={styles.cancelBtn} onClick={onCancel}>
            No
          </button>
          <button
            type="button"
            className={styles.deleteBtn}
            onClick={onConfirm}
          >
            {loading ? "Deleting..." : "Yes, delete"}
          </button>
        </div>
      </div>
    </section>
  );
};
