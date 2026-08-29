import restaurant  from "../../assets/images/restaurant.jpg";
import kitchen from "../../assets/images/kitchen.jpg";
import { FaArrowRight } from "../../assets/icons/icon";
import styles from "./About.module.css";
import { Link } from "react-router-dom";

export const About = () => {
  return (
    <section className={styles.about}>
      <div className={styles.left}>
        <div className={styles.mainImage}>
          <img
            src={restaurant}
            alt="34 paapi pet cafe restaurant interior"
            loading="lazy"
          />
        </div>
        <div className={styles.smallImage}>
          <img
            src={kitchen}
            alt="chefs preparing fresh vegetarian food"
            loading="lazy"
          />
        </div>
      </div>

      <div className={styles.right}>
        <h2>We Serve Food With Love</h2>

        <p>
          Fresh ingredients, experienced chefs, and unforgettable flavors. Every
          meal is prepared with passion using carefully selected ingredients to
          deliver exceptional quality and taste.
        </p>

        <Link to="/about" className={styles.btn}>
          <span className={styles.btnText}>Read More About Us</span>
          <span className={styles.arrow}>
            <FaArrowRight />
          </span>
        </Link>
      </div>
    </section>
  );
};
