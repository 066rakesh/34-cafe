import { DesktopNavbar } from "../../components/Common/DesktopNavbar";
import styles from "./Menu.module.css";
import { FoodGrid } from "../../components/Menu/FoodGrid";
import { CategoryTab } from "../../components/Menu/CategoryTab";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { DesktopNavbarSkeleton } from "../../components/Common/DesktopNavbarSkeleton";

export const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const { loading } = useContext(AuthContext);

  return (
    <main className={styles.menu}>
      {loading ? <DesktopNavbarSkeleton /> : <DesktopNavbar />}

      <div className={styles.wrapper}>
        <div className={styles.hero}>
          <h1>
            Our Full <span>Menu</span>
          </h1>
          <p>150+ dishes, made fresh, delivered fast</p>
        </div>

        <CategoryTab
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        <FoodGrid selectedCategory={selectedCategory} />
      </div>
    </main>
  );
};
