import styles from "./CategoryTab.module.css";
import { menuCategories } from "../../data/menuCategories";
import { Swiper, SwiperSlide } from "swiper/react";

export const CategoryTab = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <div className={styles.categoryTab}>
      <Swiper
        slidesPerView="auto"
        breakpoints={{
          0: {
            spaceBetween: 10,
          },
          768: {
            spaceBetween: 16,
          },
          1024: {
            spaceBetween: 20,
          },
        }}
        className={styles.swiper}
      >
        {menuCategories.map((category) => (
          <SwiperSlide className={styles.slide}>
            <button
              key={category}
              className={`${styles.button} ${selectedCategory === category ? styles.active : ""}`}
              type="button"
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
