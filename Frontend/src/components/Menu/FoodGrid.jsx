import styles from "./FoodGrid.module.css";
import { Clock, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { menu } from "../../data/menu";
import { slugify } from "../../utils/slugify";

export const FoodGrid = ({ selectedCategory }) => {
  const navigate = useNavigate();

  const filterMenu =
    selectedCategory === "All"
      ? menu
      : menu.filter((item) => item.category === selectedCategory);

  return (
    <section>
      <div className={styles.foods}>
        {filterMenu.map((food) => (
          <div
            className={styles.card}
            key={food.id}
            onClick={() => navigate(`/menu/food/${slugify(food.title)}-${food.id}`)}
          >
            <div className={styles.imageWrap}>
              <img className={styles.image} src={food.image} />

              <span className={`${styles.vegDot} ${styles.veg}`}>
                <span />
              </span>
            </div>

            <div className={styles.content}>
              <div className={styles.topRow}>
                <h3 className={styles.name}>{food.title}</h3>
                <span className={styles.rating}>
                  <Star size={12} />
                  {food.rating}
                </span>
              </div>

              <p className={styles.description}>{food.description}</p>

              <div className={styles.metaRow}>
                <span className={styles.prepTime}>
                  <Clock size={12} />
                  {food.prepTime} mins
                </span>
                <span className={styles.category}>{food.category}</span>
              </div>

              <div className={styles.bottomRow}>
                <div className={styles.priceBlock}>
                  <span className={styles.price}>₹{food.price}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
