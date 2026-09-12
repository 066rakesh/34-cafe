import { useContext, useState } from "react";
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
import { createOrder, verifyPayment } from "../../services/paymentService";
import { AuthContext } from "../../context/AuthContext";

export const SummaryCard = () => {
  const [paymentLoading, setPaymentLoading] = useState(false);
  const [verifying, setVerifying] = useState(false);
  const [paymentFailed, setPaymentFailed] = useState(false);

  const { cartItems, increaseQuantity, decreaseQuantity, clearCart } =
    useContext(CartContext);

  const itemTotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const { userAddresses, selectedAddress } = useContext(AddressContext);

  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handlePayment = async () => {
    if (!selectedAddress) return;

    setPaymentLoading(true);

    const itemsToSend = cartItems.map((item) => ({
      productId: item._id,
      variantId: item.variantId,
      quantity: item.quantity,
    }));

    try {
      const response = await createOrder({
        cartItems: itemsToSend,
        addressId: selectedAddress._id,
      });

      const { orderId, razorpayOrderId, amount, key } = response.data;

      const option = {
        key: key,
        amount: amount,
        currency: "INR",
        name: "34 Cafe",
        order_id: razorpayOrderId,
        prefill: {
          name: user?.name || "",
          email: user?.email || "",
          contact: user?.phone || "",
        },
        handler: async function (response) {
          setVerifying(true);
          try {
            const verifyRes = await verifyPayment({
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
            });

            if (verifyRes.data.success) {
              clearCart();
              navigate(`/order-success/${orderId}`, { replace: true });
            } else {
              setVerifying(false);
              setPaymentLoading(false);
              setPaymentFailed(true);
            }
          } catch (error) {
            console.error("Verification failed", error);
            setVerifying(false);
            setPaymentLoading(false);
          }
        },
        modal: {
          ondismiss: function () {
            setPaymentLoading(false);
            alert("Payment cancelled");
          },
        },
      };

      const rzp = new window.Razorpay(option);
      rzp.open();
    } catch (error) {
      console.error("Order creation failed", error);
      setPaymentLoading(false);
      setPaymentFailed(true);
    }
  };

  const deliveryFee = itemTotal >= FREE_DELIVERY_THRESHOLD ? 0 : DELIVERY_FEE;
  const otherCharges = OTHER_CHARGES;
  const toPay = itemTotal + deliveryFee + otherCharges;
  return (
    <section className={styles.right}>
      {verifying && (
        <div className={styles.verifyingOverlay}>
          <div className={styles.spinner}></div>
        </div>
      )}
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
              <div className={styles.cartItems} key={item._id}>
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
        {/* <button
          className={styles.paymentBtn}
          disabled={userAddresses?.length === 0}
          onClick={handlePayment}
        >
          {paymentLoading ? "Processing..." : "Proceed to Payment"}
        </button> */}

        {paymentFailed ? (
          <div className={styles.paymentFailedBox}>
            <p className={styles.paymentFailedText}>
              Payment couldn't be completed. If any amount was deducted, it will
              be refunded within 5-7 business days.
            </p>
            <button
              className={styles.paymentBtn}
              onClick={() => {
                setPaymentFailed(false);
                handlePayment();
              }}
            >
              Try Again
            </button>
          </div>
        ) : (
          <button
            className={styles.paymentBtn}
            disabled={userAddresses?.length === 0 || paymentLoading}
            onClick={handlePayment}
          >
            {paymentLoading ? "Processing..." : "Proceed to Payment"}
          </button>
        )}
      </div>
    </section>
  );
};
