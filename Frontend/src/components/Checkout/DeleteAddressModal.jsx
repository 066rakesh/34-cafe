import styles from "./DeleteAddressModal.module.css";

export const DeleteAddressModal = ({ onCancel, onConfirm }) => {
  return (
    <section className={styles.overlay}>
      <div className={styles.content}>
        <p className={styles.message}>
          Are you sure you want to delete this address?
        </p>

        <div className={styles.actions}>
          <button type="button" className={styles.cancelBtn} onClick={onCancel}>
            No
          </button>
          <button
            type="butoon"
            className={styles.deleteBtn}
            onClick={onConfirm}
          >
            Yes, delete
          </button>
        </div>
      </div>
    </section>
  );
};
