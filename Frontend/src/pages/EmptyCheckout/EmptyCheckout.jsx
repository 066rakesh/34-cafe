import { useNavigate } from "react-router-dom";
import styles from "./EmptyCheckout.module.css";
import { ArrowLeft, ArrowRight, ShoppingBag } from "lucide-react";

export const EmptyCheckout = ({ onContinueShopping }) => {
  const navigate = useNavigate();

  return (
    <main className={styles.emptyCheckoutPage}>
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <button
            type="button"
            className={styles.backButton}
            aria-label="Go back"
            onClick={() => navigate("/menu")}
          >
            <ArrowLeft size={25} />
          </button>

          <div className={styles.headerTitle}>
            <h1>Back to Menu</h1>
          </div>
        </div>
      </header>
      <div className={styles.emptyWrap}>
        <div className={styles.iconCircle}>
          <ShoppingBag size={40} />
        </div>

        <h2 className={styles.title}>Your cart is empty</h2>
        <p className={styles.subtitle}>
          Looks like you haven't added anything yet. Explore our menu and find
          something delicious to order.
        </p>

        {/* <button className={styles.ctaBtn} onClick={() => navigate("/menu")}>
        <span>Continue Shopping</span>
        <ArrowRight size={25} />
      </button> */}
      </div>
    </main>
  );
};
