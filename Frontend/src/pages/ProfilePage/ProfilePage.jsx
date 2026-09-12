import styles from "./ProfilePage.module.css";
import { useNavigate } from "react-router-dom";
import {
  ChevronRight,
  HelpCircle,
  LogOut,
  Mail,
  MapPin,
  Pencil,
  Phone,
  ShoppingBag,
} from "lucide-react";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { DesktopNavbar } from "../../components/Common/DesktopNavbar";

export const ProfilePage = () => {
  const { user, logoutUser } = useContext(AuthContext);

  const initials = user?.name
    ? user.name
        ?.split(" ")
        .map((n) => n[0])
        .join("")
        .toUpperCase()
    : "";

  const navigate = useNavigate();

  const menuItems = [
    {
      icon: ShoppingBag,
      label: "My Orders",
      onClick: () => navigate("/profile/orders"),
    },
    {
      icon: MapPin,
      label: "Saved Addresses",
      onClick: () => navigate("/profile/my-addresses"),
    },
    {
      icon: HelpCircle,
      label: "Help & Support",
      onClick: () => navigate("/help"),
    },
  ];

  return (
    <main className={styles.page}>
      <DesktopNavbar />
      <div className={styles.wrap}>
        <div className={styles.banner}>
          <div className={styles.avatar}>{initials}</div>
          <h1 className={styles.name}>{user?.name}</h1>
          <p className={styles.emailSub}>{user?.email}</p>
        </div>

        <div className={styles.contactCard}>
          <div className={styles.contactRow}>
            <div className={styles.iconChip}>
              <Phone size={15} />
            </div>
            <div>
              <p className={styles.contactLabel}>Phone</p>
              <p className={styles.contactValue}>{user?.phone}</p>
            </div>
          </div>

          <div className={styles.contactRow}>
            <div className={styles.iconChip}>
              <Mail size={15} />
            </div>
            <div>
              <p className={styles.contactLabel}>Email</p>
              <p className={styles.contactValue}>{user?.email}</p>
            </div>
          </div>
        </div>

        <p className={styles.sectionTitle}>Account</p>
        <div className={styles.menuCard}>
          {menuItems.map((item) => {
            const Icon = item.icon;

            return (
              <div
                className={styles.menuRow}
                key={item.label}
                onClick={item.onClick}
              >
                <div className={styles.menuIcon}>
                  <Icon size={18} />
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <p className={styles.menuLabel}>{item.label}</p>
                </div>
                <ChevronRight size={18} color="#d6d3d1" />
              </div>
            );
          })}
        </div>

        <div className={styles.logoutWrap}>
          <button className={styles.logoutBtn} onClick={logoutUser}>
            <LogOut size={16} /> Logout
          </button>
        </div>

        <p className={styles.footer}>34 Paapi Pet Cafe · v1.0</p>
      </div>
    </main>
  );
};
