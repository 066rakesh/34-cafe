import styles from "./Hero.module.css";
import menu from "../../assets/images/menu_items.png";
import ai from "../../assets/images/ask_ai.png";
import about from "../../assets/images/about.png";
import { Link } from "react-router-dom";
import { FaArrowRight, IoSearch } from "../../assets/icons/icon";
import { HeroHeader } from "./HeroHeader";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { HeroHeaderSkeleton } from "./HeroHeaderSkeleton";

export const Hero = () => {
  const { loading } = useContext(AuthContext);

  return (
    <section className={styles.hero}>
      {loading ? <HeroHeaderSkeleton /> : <HeroHeader /> }

      <div className={styles.wrapper}>
        <h1>Savor Every Bite at 34 Paapi Pet Cafe & Restaurant</h1>

        <Link to="/search" className={styles.search}>
          <div className={styles.input}>Search any food...</div>
          <IoSearch className={styles.searchIcon} />
        </Link>

        <div className={styles.stats}>
          <Link to="/menu" className={styles.statsCard}>
            <div className={styles.top}>
              <h2>Menu Items</h2>
              <p>
                Explore our delicious vegetarian dishes crafted with fresh
                ingredients.
              </p>
            </div>
            <div className={styles.bottom}>
              <span className={styles.arrow}>
                <FaArrowRight />
              </span>

              <img src={menu} alt="Menu illustration" loading="lazy" />
            </div>
          </Link>

          <Link to="/ask-ai" end className={styles.statsCard}>
            <div className={styles.top}>
              <h2>Ask Ai</h2>
              <p>
                Get personalized meal recommendations based on your taste and
                budget.
              </p>
            </div>
            <div className={styles.bottom}>
              <span className={styles.arrow}>
                <FaArrowRight />
              </span>

              <img src={ai} alt="AI assistant illustration" />
            </div>
          </Link>

          <Link to="/about" className={styles.statsCard}>
            <div className={styles.top}>
              <h2>About Us</h2>
              <p>
                Learn our story, values, and what makes 34 Paapi Pet Cafe &
                Restaurant special.
              </p>
            </div>
            <div className={styles.bottom}>
              <span className={styles.arrow}>
                <FaArrowRight />
              </span>

              <img src={about} alt="Restaurant illustration" />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};
