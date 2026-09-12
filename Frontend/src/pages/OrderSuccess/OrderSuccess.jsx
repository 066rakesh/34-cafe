import { useEffect, useState } from "react";
import styles from "./OrderSuccess.module.css";
import { useNavigate, useParams } from "react-router-dom";
import { getOrderById } from "../../services/orderService";
import { Check, Clock, MapPin, Package } from "lucide-react";
import { DesktopNavbar } from "../../components/Common/DesktopNavbar";

export const OrderSuccess = () => {
  const { orderId } = useParams();
  const navigate = useNavigate();

  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        setLoading(true);
        const response = await getOrderById(orderId);
        setOrder(response.data.order);
      } catch (error) {
        console.error("Failed to fetch order", error);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchOrder();
  }, [orderId]);

  if (loading) {
    return <div className={styles.status}>Loading your order...</div>;
  }

  if (error || !order) {
    return (
      <div className={styles.status}>
        <p>Order not found.</p>
        <button onClick={() => navigate("/")}>Back to Home</button>
      </div>
    );
  }

  const { address } = order;

  const maxPrepTime = Math.max(
    ...order.items.map((item) => item.product.prepTime || 0)
  );

  const esitmateTime = maxPrepTime + 12;

  return (
    <main className={styles.page}>
      <DesktopNavbar />
      <div className={styles.card}>
        <div className={styles.confirmHeader}>
          <div className={styles.checkCircle}>
            <Check size={28} strokeWidth={3} />
          </div>
          <h1>Order Confirmed</h1>
          <p className={styles.subText}>{order.razorpayOrderId}</p>
        </div>

        <div className={styles.etaRow}>
          <Clock size={18} />
          <span>
            Arriving in <strong>{esitmateTime} mins</strong>
          </span>
        </div>

        <div className={styles.divider} />

        <div className={styles.section}>
          <h2>
            <Package size={18} /> items
          </h2>
          <div className={styles.itemList}>
            {order.items.map((item) => (
              <div className={styles.item} key={item._id}>
                <img src={item.product.image} alt={item.product.title} />
                <div className={styles.itemInfo}>
                  <h3>{item.product.title}</h3>
                  <p>{item.variantLabel}</p>
                </div>
                <div className={styles.itemQtyPrice}>
                  <span>{item.quantity}</span>
                  <strong>{item.price * item.quantity}</strong>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.divider} />

        <div className={styles.section}>
          <h2>
            <MapPin size={18} /> Delivering to
          </h2>
          <p className={styles.address}>
            <strong>{address.addressType}</strong> — {address.houseNumber},{" "}
            {address.locality},{" "}
            {address.landmark && `near ${address.landmark}, `}
            {address.address}
          </p>
        </div>

        <div className={styles.divider} />

        <div className={styles.paymentSummary}>
          <div>
            <span>Item total</span>
            <span>₹{order.itemTotal}</span>
          </div>
          <div>
            <span>Delivery fee</span>
            <span>
              {order.deliveryFee === 0 ? "FREE" : `₹${order.deliveryFee}`}
            </span>
          </div>
          <div>
            <span>Taxes & Other charges</span>
            <span>{order.otherCharges}</span>
          </div>
          <div className={styles.paidRow}>
            <span>Paid via {order.paymentMethod}</span>
            <strong>₹{order.totalAmount}</strong>
          </div>
        </div>

        <div className={styles.actions}>
          <button
            className={styles.trackBtn}
            onClick={() => navigate("/profile/orders")}
          >
            Track Order
          </button>
        </div>
      </div>
    </main>
  );
};
