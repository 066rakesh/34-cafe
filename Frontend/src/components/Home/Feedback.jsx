import styles from "./Feedback.module.css";
import { FaStar, LuUserRound } from "../../assets/icons/icon";
import { reviews } from "../../data/reviews";

export const Feedback = () => {
  return (
    <section className={styles.rating}>
      <h2>What Our Customers Are Saying</h2>
      <div className={styles.ratingCards}>
        {reviews.map((review) => (
          <div className={styles.card} key={review.id}>
            <div className={styles.profile}>
              <div className={styles.avatarIcon}>
                <LuUserRound />
              </div>
              <div className={styles.desc}>
                <h3>{review.name}</h3>
                <p>Verified Customer</p>
              </div>
            </div>
            <div className={styles.star}>
              {Array.from({ length: review.rating }).map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>
            <p>{review.comment}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
