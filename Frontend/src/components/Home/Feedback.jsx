import styles from "./Feedback.module.css";
import { FaStar, LuUserRound } from "../../assets/icons/icon";
export const Feedback = () => {
  return (
    <section className={styles.rating}>
      <h2>What Our Customers Are Saying</h2>
      <div className={styles.ratingCards}>
        <div className={styles.card}>
          <div className={styles.profile}>
            <div className={styles.avatarIcon}>
              <LuUserRound />
            </div>
            <div className={styles.desc}>
              <h3>Admin</h3>
              <p>Verified Customer</p>
            </div>
          </div>
          <div className={styles.star}>
            <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
          </div>
          <p>
            The food was amazing and the delivery was super fast. highly
            recommended!
          </p>
        </div>

        <div className={styles.card}>
          <div className={styles.profile}>
            <div className={styles.avatarIcon}>
              <LuUserRound />
            </div>
            <div className={styles.desc}>
              <h3>Admin</h3>
              <p>Verified Customer</p>
            </div>
          </div>
          <div className={styles.star}>
            <FaStar /> <FaStar /> <FaStar /> <FaStar />
          </div>
          <p>Best restaurant in town! Loved the pizza and the ambience</p>
        </div>

        <div className={styles.card}>
          <div className={styles.profile}>
            <div className={styles.avatarIcon}>
              <LuUserRound />
            </div>
            <div className={styles.desc}>
              <h3>Admin</h3>
              <p>Verified Customer</p>
            </div>
          </div>
          <div className={styles.star}>
            <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
          </div>
          <p>
            Great taste, great service and pocket friendly. Will order again!
          </p>
        </div>
      </div>
    </section>
  );
};
