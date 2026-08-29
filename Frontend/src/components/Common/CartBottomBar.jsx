import { useNavigate } from "react-router-dom";
import styles from "./CartBottomBar.module.css";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { ShoppingBag } from "../../assets/icons/icon";

export const CartBottomBar = () => {
  const navigate = useNavigate();
  const { cartItems } = useContext(CartContext);

  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  if (cartCount === 0) return null;

  return (
    <div className={styles.wrapper}>
      <div className={styles.info}>
        <strong>{cartCount} items added</strong>
      </div>

      <button type="button" className={styles.viewCartBtn} onClick={() => navigate("/checkout")}>
        <span>
          <ShoppingBag size={25} />
        </span>
        <strong>View Cart</strong>
      </button>
    </div>
  );
};
