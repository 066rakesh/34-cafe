import styles from "./AboutPage.module.css";
import { Coffee, Leaf, PawPrint, Truck } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { DesktopNavbar } from "../../components/Common/DesktopNavbar";
const STATS = [
  { value: "5K+", label: "Happy Customers" },
  { value: "40+", label: "Menu Items" },
  { value: "35 min", label: "Avg. Delivery" },
  { value: "4.7★", label: "Average Rating" },
];

const FEATURES = [
  {
    icon: Leaf,
    title: "Fresh, everyday",
    desc: "Ingredients sourced fresh every morning — nothing sits in the fridge overnight.",
  },
  {
    icon: PawPrint,
    title: "Pet-friendly space",
    desc: "Bring your furry friend along — we've got a special treats menu just for them too.",
  },
  {
    icon: Truck,
    title: "Fast delivery",
    desc: "Most orders reach you in 35–40 minutes, hot and fresh, right to your door.",
  },
  {
    icon: Coffee,
    title: "Cozy vibes",
    desc: "Whether you dine in or order out, every cup carries the same warm, homely feel.",
  },
];

export const AboutPage = () => {
  const navigate = useNavigate();

  return (
    <main className={styles.page}>
      <DesktopNavbar />
      <div className={styles.hero}>
        <h1>34 Paapi Pet Cafe</h1>
        <p>
          Where good food meets great company — human or four-legged. We've been
          serving warm meals and warmer vibes since day one.
        </p>
      </div>

      <div className={styles.wrap}>
        <div className={styles.statsStrip}>
          {STATS.map((item) => (
            <div key={item.label}>
              <div className={styles.statValue}>{item.value}</div>
              <div className={styles.statLabel}>{item.label}</div>
            </div>
          ))}
        </div>

        <div className={styles.storySection}>
          <div className={styles.eyebrow}>Our Story</div>
          <h2 className={styles.storyTitle}>Started with one simple idea</h2>
          <p className={styles.storyText}>
            34 Paapi Pet Cafe began as a tiny corner kitchen with a big dream —
            a place where food lovers and their pets could both feel at home.
            What started as weekend pop-ups turned into a full menu of comfort
            food, specialty brews, and treats for your furry companions. Every
            dish is still made the way it was on day one — fresh, simple, and
            made with love.
          </p>
        </div>

        <div className={styles.featureGrid}>
          {FEATURES.map((feature) => {
            const Icon = feature.icon;

            return (
              <div className={styles.featureCard} key={feature.title}>
                <div className={styles.featureIcon}>
                  <Icon size={24} />
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.desc}</p>
              </div>
            );
          })}
        </div>

        <div className={styles.ctaBand}>
          <h2>Hungry already?</h2>
          <p>
            Explore our menu and get your favorites delivered in under 40
            minutes.
          </p>
          <button className={styles.ctaBtn} onClick={() => navigate("/menu")}>
            Explore Menu
          </button>
        </div>
      </div>
    </main>
  );
};
