import { useContext } from "react";
import styles from "./SummaryCard.module.css";
import { CartContext } from "../../context/CartContext";
import { Minus, Plus } from "../../assets/icons/icon";
import { AddressContext } from "../../context/AddressContext";
import { useNavigate } from "react-router-dom";
import {
  DELIVERY_FEE,
  FREE_DELIVERY_THRESHOLD,
  OTHER_CHARGES,
} from "../../constants/pricing";

export const SummaryCard = () => {
  const { cartItems, increaseQuantity, decreaseQuantity } =
    useContext(CartContext);

  const itemTotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const navigate = useNavigate();

  const { userAddresses } = useContext(AddressContext);

  const deliveryFee = itemTotal >= FREE_DELIVERY_THRESHOLD ? 0 : DELIVERY_FEE;
  const otherCharges = OTHER_CHARGES;
  const toPay = itemTotal + deliveryFee + otherCharges;
  return (
    <section className={styles.right}>
      <div className={styles.summaryCard}>
        <div className={styles.summaryHeader}>
          <h2>Order Summary</h2>

          <span>
            {cartItems.length} {cartItems.length === 1 ? "Item" : "Items"}
          </span>
        </div>
        <div className={styles.summaryItems}>
          <div className={styles.cartList}>
            {cartItems.map((item) => (
              <div className={styles.cartItems} key={item.id}>
                <div className={styles.leftCartItems}>
                  <img src={item.image} alt={item.title} />

                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.variantLabel}</p>
                    <p>
                      ₹{item.price} × {item.quantity}
                    </p>
                  </div>
                </div>

                <div className={styles.quantity}>
                  <button
                    type="button"
                    onClick={() => decreaseQuantity(item.id)}
                    aria-label={`Decrease ${item.title}`}
                  >
                    <Minus size={16} />
                  </button>

                  <span>{item.quantity}</span>

                  <button
                    type="button"
                    onClick={() => increaseQuantity(item.id)}
                    aria-label={`Increase ${item.title}`}
                  >
                    <Plus size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.priceSummary}>
          <div className={styles.priceDetails}>
            <div>
              <span>Item Total</span>
              <strong>₹{itemTotal}</strong>
            </div>

            <div>
              <span>Delivery Fee</span>

              <strong>{deliveryFee === 0 ? "FREE" : `₹${deliveryFee}`}</strong>
            </div>

            <div>
              <span>GST & Other Charges</span>
              <strong>₹{otherCharges}</strong>
            </div>
          </div>

          <div className={styles.total}>
            <div>
              <span>To Pay</span>
              <small>Incl. all taxes & charges</small>
            </div>

            <strong>₹{toPay}</strong>
          </div>
        </div>
        <button
          className={styles.paymentBtn}
          disabled={userAddresses?.length === 0}
          onClick={() => navigate("/payment")}
        >
          Proceed to Payment
        </button>
      </div>
    </section>
  );
};
