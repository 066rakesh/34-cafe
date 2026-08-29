import { ArrowLeft } from "lucide-react";

import styles from "./Payment.module.css";
import { SummaryCard } from "../../components/Checkout/SummaryCard";
import { useNavigate } from "react-router-dom";
import {AddressCard} from "../../components/Checkout/AddressCard"
import { DesktopNavbar } from "../../components/Common/DesktopNavbar";

export const Payment = () => {
  const navigate = useNavigate();

  return (
    <main className={styles.paymentPage}>
      <DesktopNavbar />

      <section className={styles.container}>
        
      </section>
    </main>
  );
};
