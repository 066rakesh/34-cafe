import { useState } from "react";
import { faqs } from "../../data/faqs";
import styles from "./HelpSupport.module.css";
import { DesktopNavbar } from "../Common/DesktopNavbar";
import { ChevronDown, Mail, MessageCircle, Phone } from "lucide-react";

export const HelpSupport = () => {
  const [openIndex, setOpenIndex] = useState(0);
  return (
    <main className={styles.page}>
      <DesktopNavbar />
      <div className={styles.wrap}>
        <h1 className={styles.title}>Help & Support</h1>

        <div className={styles.contactGrid} href="tel:+91987654321">
          <a className={styles.contactCard}>
            <div className={styles.contactIcon}>
              <Phone size={19} />
            </div>
            <div className={styles.contactLabel}>Call us</div>
            <div className={styles.contactSub}>+91 98765 43210</div>
          </a>
          <a
            className={styles.contactCard}
            href="mailto:support@34paapicafe.com"
          >
            <div className={styles.contactIcon}>
              <Mail size={19} />
            </div>
            <div className={styles.contactLabel}>Email us</div>
            <div className={styles.contactSub}>support@34paapicafe.com</div>
          </a>
          <a
            className={styles.contactCard}
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noreferrer"
          >
            <div className={styles.contactIcon}>
              <MessageCircle size={19} />
            </div>
            <div className={styles.contactLabel}>WhatsApp</div>
            <div className={styles.contactSub}>Chat with us</div>
          </a>
        </div>

        <p className={styles.sectionTitle}>Frequently asked questions</p>
        <div className={styles.faqCard}>
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;

            return (
              <div className={styles.faqRow} key={i}>
                <div
                  className={styles.faqQ}
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    size={18}
                    className={`${styles.chevron} ${isOpen ? styles.open : ""}`}
                  />
                </div>
                <div className={`${styles.faqA} ${isOpen ? styles.open : ""}`}>
                  <p>{faq.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
};
