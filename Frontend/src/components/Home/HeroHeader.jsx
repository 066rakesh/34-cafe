import { Link, NavLink, useNavigate } from "react-router-dom";
import styles from "./HeroHeader.module.css";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { FaUser } from "../../assets/icons/icon";

export const HeroHeader = () => {
  const { setIsAuthOpen, user } = useContext(AuthContext);

  const getNavLinkClass = ({ isActive }) => {
    return isActive ? styles.active : "";
  };

  const navigate = useNavigate();

  return (
    <header className={styles.header}>
      <Link to="/" aria-label="34 Cafe Home" className={styles.brand}>
        <span className={styles.number}>34</span>
        <span className={styles.text}>CAFE</span>
      </Link>

      <nav aria-label="main navigation" className={styles.menuItems}>
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

      <div className={styles.btn}>
        <Link to="/about">About Us</Link>

        {user ? (
          <button
            type="button"
            className={styles.user}
            aria-label="profile"
            onClick={() => navigate("/profile")}
          >
            <FaUser />
          </button>
        ) : (
          <button
            type="button"
            className={styles.signBtn}
            aria-label="sign in"
            onClick={() => setIsAuthOpen(true)}
          >
            Sign In
          </button>
        )}
      </div>
    </header>
  );
};
