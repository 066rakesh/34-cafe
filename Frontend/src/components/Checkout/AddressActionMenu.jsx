import styles from "./AddressActionMenu.module.css";
import { Trash2 } from "../../assets/icons/icon";

export const AddressActionMenu = ({ onDelete }) => {
  return (
    <section className={styles.container}>
      <div
        className={styles.actionMenuCard}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className={styles.actionMenu}
          onClick={onDelete}
        >
          <Trash2 size={15} />
          <span>Delete</span>
        </button>
      </div>
    </section>
  );
};
