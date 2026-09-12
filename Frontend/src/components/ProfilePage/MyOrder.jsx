import styles from "./MyOrder.module.css";
import {
  CheckCircle2,
  ChevronRight,
  Clock,
  Package,
  Truck,
  XCircle,
} from "lucide-react";
import { DesktopNavbar } from "../Common/DesktopNavbar";
import { useEffect, useState } from "react";
import { getMyOrders } from "../../services/orderService";
import { useNavigate } from "react-router-dom";

const TABS = ["All", "Active", "Delivered", "Cancelled"];

const STATUS_CONFIG = {
  placed: {
    label: "placed",
    color: "#c2410c",
    bg: "#fff7ed",
    icon: Clock,
  },
  preparing: {
    label: "Preparing",
    color: "#c2410c",
    bg: "#fff7ed",
    icon: Clock,
  },
  out_for_delivery: {
    label: "Out for delivery",
    color: "#1d4ed8",
    bg: "#eff6ff",
    icon: Truck,
  },
  delivered: {
    label: "Delivered",
    color: "#15803d",
    bg: "#f0fdf4",
    icon: CheckCircle2,
  },
  cancelled: {
    label: "Cancelled",
    color: "#dc2626",
    bg: "#fef2f2",
    icon: XCircle,
  },
};

export const MyOrder = () => {
  const [orders, setOrders] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [activeTab, setActiveTab] = useState("All");

  const filterOrders = orders?.orders?.filter((order) => {
    if (activeTab === "All") return true;

    if (activeTab === "Active") {
      return ["placed", "preparing", "out_for_delivery"].includes(
        order.deliveryStatus
      );
    }

    if (activeTab === "Delivered") {
      return order.deliveryStatus === "delivered";
    }

    if (activeTab === "Cancelled") {
      return order.deliveryStatus === "cancelled";
    }

    return true;
  });

  const navigate = useNavigate();

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        setLoading(true);
        const response = await getMyOrders();
        setOrders(response.data);
      } catch (error) {
        console.error("Failed to fetch orders", error);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  if (loading) {
    return <div className={styles.status}>Loading your orders...</div>;
  }

  if (error) {
    return (
      <div className={styles.status}>
        <p>Something went wrong. Please try again.</p>
      </div>
    );
  }

  return (
    <main className={styles.page}>
      <DesktopNavbar />
      <div className={styles.wrap}>
        <h1 className={styles.title}>My Orders</h1>

        <div className={styles.tabs}>
          {TABS.map((tab) => (
            <div
              key={tab}
              className={`${styles.tab} ${activeTab === tab ? styles.active : ""}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </div>
          ))}
        </div>

        {filterOrders?.length === 0 ? (
          <div className={styles.empty}>
            <Package
              size={40}
              style={{ marginBottom: "1.2rem", opacity: 0.5 }}
            />
            <p>No orders here yet.</p>
          </div>
        ) : (
          <div className={styles.list}>
            {filterOrders?.map((order) => {
              const status =
                STATUS_CONFIG[order.deliveryStatus] || STATUS_CONFIG.placed;
              const StatusIcon = status.icon;
              const [First, ...rest] = order.items || [];

              return (
                <div
                  className={styles.card}
                  key={order._id}
                  onClick={() => navigate(`/profile/orders/${order._id}`)}
                >
                  <div className={styles.cardTop}>
                    <div>
                      <div className={styles.orderId}>
                        {order.razorpayOrderId}
                      </div>
                      <div className={styles.orderDate}>
                        {new Date(order.createdAt).toLocaleDateString("en-IN", {
                          day: "numeric",
                          month: "short",
                          year: "numeric",
                          hour: "numeric",
                          minute: "2-digit",
                        })}
                      </div>
                    </div>
                    <div
                      className={styles.statusBadge}
                      style={{ color: status.color, background: status.bg }}
                    >
                      <StatusIcon size={13} />
                      {status.label}
                    </div>
                  </div>

                  <div className={styles.itemsRow}>
                    <div className={styles.itemThumb}>
                      {First?.product?.image ? (
                        <img
                          src={First.product.image}
                          alt={First.product.title}
                        />
                      ) : (
                        <Package size={18} />
                      )}
                    </div>
                    <p className={styles.itemsText}>
                      <strong>{First.product?.title}</strong>
                      {rest.length > 0 && ` +${rest.length} more`}
                    </p>
                  </div>

                  <div className={styles.cardBottom}>
                    <div className={styles.total}>
                      <span>Total</span>₹{order.totalAmount}
                    </div>
                    <div className={styles.viewDetails}>
                      View details <ChevronRight size={15} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </main>
  );
};
