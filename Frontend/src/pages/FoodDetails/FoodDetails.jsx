import { useParams } from "react-router-dom";
import { Star, Clock, Plus, Minus } from "lucide-react";
import styles from "./FoodDetails.module.css";
import { DesktopNavbar } from "../../components/Common/DesktopNavbar";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { CartBottomBar } from "../../components/Common/CartBottomBar";
import { menu } from "../../data/menu";

export const FoodDetails = () => {
  const { foodId } = useParams();

  const { cartItems, addToCart, increaseQuantity, decreaseQuantity } =
    useContext(CartContext);

  const food = menu.find((item) => String(item.id) === String(foodId));

  const cartItem = cartItems.find((item) => item.id === food.id);

  return (
    <div className={styles.page}>
      <DesktopNavbar />

      <div className={styles.layout}>
        <div className={styles.imageSection}>
          <img src={food.image} alt={food.title} className={styles.image} />
          <span className={`${styles.vegDot} ${styles.veg}`}>
            <span />
          </span>
        </div>

        <div className={styles.detailsSection}>
          <div className={styles.titleRow}>
            <h1 className={styles.name}>{food.title}</h1>
            <span className={styles.rating}>
              <Star size={15} />
              {food.rating}
            </span>
          </div>

          <div className={styles.metaRow}>
            <span className={styles.prepTime}>
              <Clock size={15} />
              {food.prepTime} mins
            </span>
            <span className={styles.category}>{food.category}</span>
          </div>

          <p className={styles.fullDescription}>{food.description}</p>

          {!food.variants?.length && (
            <div className={styles.bottomRow}>
              <div className={styles.priceRow}>
                <span className={styles.price}>₹{food.price}</span>
              </div>

              {cartItem ? (
                <div className={styles.cartBtn}>
                  <button
                    type="submit"
                    onClick={() => increaseQuantity(food.id)}
                  >
                    <Plus size={20} />
                  </button>
                  <span>{cartItem.quantity}</span>
                  <button
                    type="submit"
                    onClick={() => decreaseQuantity(food.id)}
                  >
                    <Minus size={20} />
                  </button>
                </div>
              ) : (
                <button
                  className={styles.addToCartBtn}
                  onClick={() => addToCart(food)}
                >
                  Add to Cart
                </button>
              )}
            </div>
          )}
        </div>

        {food.variants?.length > 0 && (
          <div className={styles.variantSection}>
            <h2>Select Option</h2>
            {food.variants?.map((item) => {
              const cartItemId = `${food.id}_${item.id}`;

              const cartItem = cartItems.find(
                (cartItem) => cartItem.id === cartItemId
              );

              return (
                <div className={styles.variantLayout} key={item.id}>
                  <div className={styles.left}>
                    <h3>{food.title}</h3>
                    <span className={styles.optionName}>{item.label}</span>
                    <span className={styles.variantPrice}>₹{item.price}</span>
                  </div>
                  <div className={styles.right}>
                    <div className={styles.imageWrapper}>
                      <img src={food.image} alt={food.title} />

                      {cartItem ? (
                        <div className={styles.actionBtns}>
                          <button
                            type="submit"
                            onClick={() => decreaseQuantity(cartItemId)}
                          >
                            <Minus size={20} />
                          </button>
                          <span>{cartItem.quantity}</span>
                          <button
                            type="submit"
                            onClick={() => increaseQuantity(cartItemId)}
                          >
                            <Plus size={20} />
                          </button>
                        </div>
                      ) : (
                        <button
                          type="submit"
                          className={styles.addBtn}
                          onClick={() => addToCart(food, item)}
                        >
                          ADD
                        </button>
                      )}
                    </div>
                    <span className={styles.customisableTag}>Customisable</span>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      <CartBottomBar />
    </div>
  );
};
