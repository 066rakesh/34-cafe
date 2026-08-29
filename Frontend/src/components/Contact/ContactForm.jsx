import { CiUser, LuPencil, IoCallOutline, MdOutlineEmail, LuSend, TfiMenuAlt } from "../../assets/icons/icon";
import styles from "./ContactForm.module.css";

export const ContactForm = () => {
  return (
    <section className={styles.contactForm}>
      <h2 className={styles.title}>
        <span><LuSend /></span>
        <span>Send us a Message</span>
      </h2>
      <form className={styles.inputBox}>
        <div className={styles.formGroup}>
          <input 
            type="text" 
            id="name" 
            name="name" 
            placeholder="" 
            required 
        />
          <label htmlFor="name">
            <CiUser className={styles.labelIcon} />
            Full Name
          </label>
        </div>

        <div className={styles.formGroup}>
          <input 
            type="email" 
            id="email" 
            name="email" 
            placeholder="" 
            required 
          />
          <label htmlFor="email">
            <MdOutlineEmail className={styles.labelIcon} />
            Email Address
          </label>
        </div>

        <div className={styles.formGroup}>
          <input
            type="text"
            id="number"
            name="number"
            placeholder=""
            required
          />
          <label htmlFor="number">
            <IoCallOutline className={styles.labelIcon} />
            Phone Number
          </label>
        </div>

        <div className={styles.formGroup}>
          <select defaultValue="" required>
            <option value="" disabled hidden></option>
            <option>Feedback</option>
            <option>Complaint</option>
            <option>Reservation</option>
            <option>Other</option>
          </select>
          <label>
            <TfiMenuAlt className={styles.labelIcon} />
            Subject
          </label>
        </div>

        <div className={`${styles.formGroup} ${styles.fullWidth}`}>
          <textarea
            id="feedback"
            name="feedback"
            rows="6"
            maxLength="500"
            placeholder=""
            required
          ></textarea>
          <label htmlFor="feedback">
            <LuPencil className={styles.labelIcon} />
            Your Message
          </label>
        </div>

        <button type="submit" className={styles.btn}>
          <span><LuSend /></span>
          <span>Send Message</span>
        </button>
      </form>
    </section>
  );
};
