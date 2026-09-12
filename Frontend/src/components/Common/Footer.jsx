import styles from "./Footer.module.css";
import logo from "../../assets/images/logo_black.svg";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.logo}>
          <img src={logo} alt="34 Paapi Pet Cafe logo" loading="lazy" />
        </div>

        <div>
          <h3>Quick Links</h3>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/menu">Menu</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </div>

        <div>
          <h3>Our Services</h3>
          <ul>
            <li>Fast Delivery</li>
            <li>Daily Offers</li>
            <li>
              <Link to="/ask-ai">AI Food Assistant</Link>
            </li>
          </ul>
        </div>

        <div>
          <h3>Contact Us</h3>
          <ul>
            <li>
              <a href="tel:+919876543210">+91 9876543210</a>
            </li>
            <li>
              <a href="mailto:support@34paapicafe.com">
                support@34paapicafe.com
              </a>
            </li>
            <li>IMT Manesar, Gurugram</li>
          </ul>
        </div>

        <div>
          <h3>Opening Hours</h3>
          <ul>
            <li>Monday - Friday</li>
            <li>10:00 AM - 11:00 PM</li>
            <li>Saturday - Sunday</li>
            <li>09:00 AM - 12:00 AM</li>
          </ul>
        </div>
      </div>

      <div className={styles.bottom}>
        <span>© 2026 34 Paapi Pet Cafe & Restaurant</span>
        <span>Privacy Policy | Terms & Conditions</span>
      </div>
    </footer>
  );
};
