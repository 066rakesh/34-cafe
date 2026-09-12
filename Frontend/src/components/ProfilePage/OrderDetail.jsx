import styles from "./OrderDetail.module.css";
import { DesktopNavbar } from "../Common/DesktopNavbar";
import {
  ArrowLeft,
  Check,
  ChefHat,
  Home,
  MapPin,
  Package,
  Truck,
} from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getOrderById } from "../../services/orderService";

const STATUS_ORDER = {
  placed: 1,
  preparing: 2,
  out_for_delivery: 3,
  delivered: 4,
};

const STEPS = [
  { key: "placed", label: "Placed", icon: Check },
  { key: "preparing", label: "Preparing", icon: ChefHat },
  { key: "out_for_delivery", label: "On the way", icon: Truck },
  { key: "delivered", label: "Delivered", icon: Home },
];

export const OrderDetail = () => {
  const { orderId } = useParams();
  const navigate = useNavigate();
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        setLoading(true);
        const response = await getOrderById(orderId);
        setOrder(response.data.order);
      } catch (error) {
        console.error("failed to fetch order", error);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchOrder();
  }, [orderId]);

  if (loading) {
    return <div className={styles.status}>Loading order details...</div>;
  }

  if (error) {
    return (
      <div className={styles.status}>
        <p>Order not found.</p>
        <button onClick={() => navigate("/profile/orders")}>
          Back to Orders
        </button>
      </div>
    );
  }

  const isCancelled = order?.deliveryStatus === "cancelled";
  const currentStatusNumber = STATUS_ORDER[order?.deliveryStatus] || 0;

  return (
    <main className={styles.page}>
      <DesktopNavbar />
      <div className={styles.wrap}>

        <div className={styles.card}>
          <div className={styles.headRow}>
            <div>
              <div className={styles.orderId}>{order?.razorpayOrderId}</div>
              <div className={styles.orderDate}>
                {new Date(order?.createdAt).toLocaleDateString("en-IN", {
                  day: "2-digit",
                  month: "short",
                  year: "numeric",
                  hour: "numeric",
                  minute: "2-digit",
                })}
              </div>
            </div>
            {isCancelled && <div className={styles.cancelledBadge }>Cancelled</div>}
          </div>

          {isCancelled ? (
            <div className={styles.cancelledStrip}>
              This order was cancelled
            </div>
          ) : (
            <div className={styles.stepper}>
              {STEPS.map((step) => {
                const Icon = step.icon;
                const stepNumber = STATUS_ORDER[step.key];

                const done = stepNumber < currentStatusNumber;
                const current = stepNumber === currentStatusNumber;

                return (
                  <div className={styles.step} key={step.key}>
                    <div
                      className={`${styles.stepLine} ${done ? styles.done : ""}`}
                    />
                    <div
                      className={`${styles.stepCircle} ${done ? styles.done : ""} ${current ? styles.current : ""}`}
                    >
                      <Icon size={16} />
                    </div>
                    <div
                      className={`${styles.stepLabel} ${done || current ? styles.active : ""}`}
                    >
                      {step.label}
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          <div className={styles.divider} />

          <div className={styles.section}>
            <h2>
              <Package size={16} /> Items
            </h2>
            <div className={styles.itemList}>
              {order?.items.map((item) => (
                <div className={styles.item} key={item._id}>
                  <div className={styles.itemImg}>
                    <img src={item.product?.image} alt={item.product?.title} />
                  </div>
                  <div className={styles.itemInfo}>
                    <h3>{item.product?.title}</h3>
                    <p>{item.variantLabel}</p>
                  </div>
                  <div className={styles.itemPrice}>
                    <span>× {item.quantity}</span>
                    <strong>₹{item.price * item.quantity}</strong>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.divider} />

          <div className={styles.section}>
            <h2>
              <MapPin size={16} /> Delivered to
            </h2>
            <p className={styles.address}>
              <strong>{order?.address?.addressType}</strong> -{" "}
              {order?.address?.houseNumber}, {order?.address?.locality},{" "}
              {order?.address?.landmark}, {order?.address?.address}
            </p>
          </div>

          <div className={styles.divider} />

          <div className={styles.paymentSummary}>
            <div>
              <span>Item total</span>
              <span>₹{order?.itemTotal}</span>
            </div>
            <div>
              <span>Delivery fee</span>
              <span>
                {order?.deliveryFee === 0 ? "FREE" : `₹${order?.deliveryFee}`}
              </span>
            </div>
            <div>
              <span>Taxes & other charges</span>
              <span>₹{order?.otherCharges}</span>
            </div>
            <div className={styles.paidRow}>
              <span>Paid via {order?.paymentMethod}</span>
              <span>₹{order?.totalAmount}</span>
            </div>
          </div>

          
        </div>
      </div>
    </main>
  );
};
