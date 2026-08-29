import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./MenuSection.module.css";
import "swiper/css";
import { Link, useNavigate } from "react-router-dom";
import { Clock, Star } from "lucide-react";
import { menu } from "../../data/menu";

export const MenuSection = () => {
  const navigate = useNavigate();
  const chefSpecials = menu.filter((item) => item.isChefSpecial);

  const craving = menu.filter((item) => item.isCraving);

  return (
    <div className={styles.menu}>
      <section className={styles.categories}>
        <h2>Chef's Specials</h2>
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
        >
          {chefSpecials.map((item) => (
            <SwiperSlide key={item.id} className={styles.categoriesSlide}>
              <div
                onClick={() => navigate(`/menu/food/${item.id}`)}
                className={styles.categoriesCard}
              >
                <div className={styles.categoriesImage}>
                  <img src={item.image} alt={item.title} loading="lazy" />
                </div>
                <p>{item.title}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      <section className={styles.dishes}>
        <h2>Choose Your Craving</h2>
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
        >
          {craving.map((food) => (
            <SwiperSlide className={styles.dishSlide} key={food.id}>
              <div
                className={styles.card}
                key={food.id}
                onClick={() => navigate(`/menu/food/${food.id}`)}
              >
                <div className={styles.imageWrap}>
                  <img className={styles.image} src={food.image} />

                  <span className={`${styles.vegDot} ${styles.veg}`}>
                    <span />
                  </span>
                </div>

                <div className={styles.content}>
                  <div className={styles.topRow}>
                    <h3 className={styles.name}>{food.title}</h3>
                    <span className={styles.rating}>
                      <Star size={12} />
                      {food.rating}
                    </span>
                  </div>

                  <p className={styles.description}>{food.description}</p>

                  <div className={styles.metaRow}>
                    <span className={styles.prepTime}>
                      <Clock size={12} />
                      {food.prepTime} mins
                    </span>
                  </div>

                  <div className={styles.bottomRow}>
                    <div className={styles.priceBlock}>
                      <span className={styles.price}>₹{food.price}</span>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </div>
  );
};
