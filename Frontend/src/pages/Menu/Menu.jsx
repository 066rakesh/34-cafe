import { DesktopNavbar } from "../../components/Common/DesktopNavbar";
import styles from "./Menu.module.css";
import { FoodGrid } from "../../components/Menu/FoodGrid";
import { CategoryTab } from "../../components/Menu/CategoryTab";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { DesktopNavbarSkeleton } from "../../components/Common/DesktopNavbarSkeleton";
import { useSearchParams } from "react-router-dom";

export const Menu = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedCategory = searchParams.get("category") || "All";

  const { loading } = useContext(AuthContext);

  const setSelectedCategory = (category) => {
    if (category === "All") {
      searchParams.delete("category");
    } else {
      searchParams.set("category", category);
    }
    setSearchParams(searchParams, { replace: true });
  };

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
