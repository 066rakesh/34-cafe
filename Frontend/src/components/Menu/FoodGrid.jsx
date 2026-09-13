import styles from "./FoodGrid.module.css";
import { Clock, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ProductContext } from "../../context/ProductContext";
import { FoodGridSkeleton } from "./FoodGridSkeleton";
import { ErrorState } from "../Common/ErrorState";

export const FoodGrid = ({ selectedCategory }) => {
  const { products, productsLoading, productsError, fetchProducts } =
    useContext(ProductContext);
  const navigate = useNavigate();

  const filterMenu =
    selectedCategory === "All"
      ? products
      : products.filter((item) => item.category === selectedCategory);

  if (productsLoading) {
    return <FoodGridSkeleton />;
  }

  if (productsError) {
    return (
      <ErrorState onRetry={fetchProducts} message={"Couldn't load menu"} />
    );
  }

  return (
    <section>
      <div className={styles.foods}>
        {filterMenu.map((food) => (
          <div
            className={styles.card}
            key={food._id}
            onClick={() => navigate(`/menu/food/${food._id}`)}
          >
            <div className={styles.imageWrap}>
              <img
                className={styles.image}
                src={food.image}
                alt={food.title}
                loading="lazy"
              />

              <span className={styles.vegDot}>
                <span className={food.isVeg ? styles.veg : styles.nonVeg} />
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
