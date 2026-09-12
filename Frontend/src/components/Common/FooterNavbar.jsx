import styles from "./FooterNavbar.module.css";
import {
  Home,
  UtensilsCrossed,
  MessageCircle,
  Search,
} from "../../assets/icons/icon";
import { NavLink } from "react-router-dom";

export const FooterNavbar = () => {
  const getNavLinkClass = ({ isActive }) => (isActive ? styles.active : "");

  return (
    <nav className={`${styles.navbar} `} aria-label="Mobile navigation">
      <NavLink to="/" end className={getNavLinkClass}>
        <span className={styles.navIconWrap}>
          <Home size={22} />
        </span>
        <span className={styles.navText}>Home</span>
      </NavLink>

      <NavLink to="/menu" className={getNavLinkClass}>
        <span className={styles.navIconWrap}>
          <UtensilsCrossed size={22} />
        </span>
        <span className={styles.navText}>Menu</span>
      </NavLink>

      <NavLink to="/search" className={getNavLinkClass}>
        <span className={styles.navIconWrap}>
          <Search size={22} />
        </span>
        <span className={styles.navText}>Search</span>
      </NavLink>

      <NavLink to="/ask-ai" className={getNavLinkClass}>
        <span className={styles.navIconWrap}>
          <MessageCircle size={22} />
        </span>
        <span className={styles.navText}>Ask AI</span>
      </NavLink>
    </nav>
  );
};
