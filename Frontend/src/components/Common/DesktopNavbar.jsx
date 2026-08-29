import styles from "./DesktopNavbar.module.css";
import { Link, NavLink, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  ShoppingBag,
  CircleUserRound,
} from "../../assets/icons/icon";
import { useContext } from "react";
import { UIContext } from "../../context/UIContext";
import { AuthContext } from "../../context/AuthContext";
import { CartContext } from "../../context/CartContext";
import { LuUserRound } from "react-icons/lu";
import { FaUser } from "react-icons/fa";

export const DesktopNavbar = () => {
  const { user } = useContext(AuthContext);
  const { setIsAuthOpen, setIsProfileOpen } = useContext(UIContext);
  const { cartItems } = useContext(CartContext);
  const getNavLinkClass = ({ isActive }) => {
    return isActive ? styles.active : undefined;
  };

  const navigate = useNavigate();

  const userName = user?.name?.split(" ")[0];

  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <Link to="/" className={styles.logo}>
          <span className={styles.number}>34</span>
          <span className={styles.divider} />
          <span className={styles.text}>CAFE</span>
        </Link>

        <nav className={styles.nav}>
          <NavLink to="/" end className={getNavLinkClass}>
            Home
          </NavLink>

          <NavLink to="/menu" className={getNavLinkClass}>
            Menu
          </NavLink>

          <NavLink to="/search" className={getNavLinkClass}>
            Search
          </NavLink>

          <NavLink to="/ask-ai" className={getNavLinkClass}>
            Ask AI
          </NavLink>
        </nav>

        <div className={styles.actions}>
          <Link
            to="/checkout"
            className={styles.cart}
            aria-label="Shopping Cart"
          >
            <ShoppingBag size={28} />
            <span className={styles.badge}>{cartCount}</span>
          </Link>

          {user ? (
            <button
              className={styles.user}
              type="button"
              aria-label="Open profile"
              onClick={() => setIsProfileOpen(true)}
            >
              <FaUser size={28} />
              <span>{userName}</span>
            </button>
          ) : (
            <button
              className={styles.user}
              type="button"
              aria-label="Sign In"
              onClick={() => setIsAuthOpen(true)}
            >
              <FaUser size={28} />
              <span>Sign In</span>
            </button>
          )}
        </div>
      </div>
    </header>
  );
};
