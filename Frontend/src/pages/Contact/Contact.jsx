import styles from "./Contact.module.css";
import contactHero  from "../../assets/images/contact-hero.png";
import {
  IoLocationOutline,
  IoCallOutline,
  MdOutlineEmail,
  IoMdTime,
} from "../../assets/icons/icon";
import { ContactForm } from "../../components/Contact/ContactForm";
import { DesktopNavbar } from "../../components/Common/DesktopNavbar";

export const Contact = () => {
  return (
    <main className={styles.contact}>
      <header>
        <DesktopNavbar />
      </header>

      <div className={styles.hero}>
        <img src={contactHero} alt="Contact 34 Paapi Pet Cafe" />

        <div className={styles.heroContent}>
          <h1>Contact Us</h1>
          <p>
            We'd love to hear from you. Reach out for inquiries, booking or
            feedback
          </p>
        </div>
      </div>
      <div className={styles.wrapper}>
        <ContactForm />

        <div className={styles.contactInfo}>
          <h2>Contact Information </h2>

          <div className={styles.infoGroup}>
            <h3 className={styles.title}>
              <span>
                <IoLocationOutline />
              </span>
              <span>Our Location</span>
            </h3>
            <p>34 paapi Pet Cafe Restaurant, Imt Manesar, Gurgaon Haryana</p>
          </div>

          <div className={styles.infoGroup}>
            <h3 className={styles.title}>
              <span>
                <IoCallOutline />
              </span>
              <span>Call Us</span>
            </h3>
            <p>+91 9876543210</p>
          </div>

          <div className={styles.infoGroup}>
            <h3 className={styles.title}>
              <span>
                <MdOutlineEmail />
              </span>
              <span>Email Us</span>
            </h3>
            <p>info@34cafe.com</p>
          </div>

          <div className={styles.infoGroup}>
            <h3 className={styles.title}>
              <span>
                <IoMdTime />
              </span>
              <span>Opening Hours</span>
            </h3>
            <p>Mon - Sun : 10:00 AM - 11:00 PM</p>
          </div>
        </div>
      </div>

      <section className={styles.map}>
        <iframe
          title="34 Paapi Pet Cafe Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112331.83856103619!2d76.83318196574797!3d28.377891971617817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d3e78c748b1cf%3A0xb033dd0c06e0b83b!2sImt%20Manesar%2C%20Gurugram%2C%20Haryana!5e0!3m2!1sen!2sin!4v1784635483567!5m2!1sen!2sin"
          allowFullScreen
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
        ></iframe>
      </section>
    </main>
  );
};
