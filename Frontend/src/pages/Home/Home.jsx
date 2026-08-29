import { About } from "../../components/Home/About";
import { Feedback } from "../../components/Home/Feedback";
import { Hero } from "../../components/Home/Hero";
import { MenuSection } from "../../components/Home/MenuSection";

import styles from "./Home.module.css";

export const Home = () => {
  return (
    <main className={styles.home}>
      <Hero />

      <MenuSection />

      <About />

      <Feedback />
    </main>
  );
};
