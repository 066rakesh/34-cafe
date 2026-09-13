import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./MenuSection.module.css";
import "swiper/css";
import { useNavigate } from "react-router-dom";
import { Clock, Star } from "lucide-react";
import { useContext } from "react";
import { ChefSpecialsSkeleton, CravingSkeleton } from "./MenuSectionSkeleton";
import { ProductContext } from "../../context/ProductContext";
import { ErrorState } from "../Common/ErrorState";

export const MenuSection = () => {
  const navigate = useNavigate();
  const { products, productsLoading, productsError, fetchProducts } =
    useContext(ProductContext);
  const chefSpecials = products.filter((item) => item.isChefSpecial);

  const craving = products.filter((item) => item.isCraving);

  return (
    <div className={styles.menu}>
      <section className={styles.categories}>
        <h2>Chef's Specials</h2>
        {productsLoading ? (
          <div className={styles.skeletonRow}>
            {Array.from({ length: 10 }).map((_, i) => (
              <ChefSpecialsSkeleton key={i} />
            ))}
          </div>
        ) : productsError ? (
          <ErrorState onRetry={fetchProducts} message={"Couldn't load menu"} />
        ) : (
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
              <SwiperSlide key={item._id} className={styles.categoriesSlide}>
                <div
                  onClick={() => navigate(`menu/food/${item._id}`)}
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
        )}
      </section>

      <section className={styles.dishes}>
        <h2>Choose Your Craving</h2>

        {productsLoading ? (
          <div className={styles.skeletonRow}>
            {Array.from({ length: 10 }).map((_, i) => (
              <CravingSkeleton key={i} />
            ))}
          </div>
        ) : productsError ? (
          <ErrorState onRetry={fetchProducts} message={"Couldn't load menu"} />
        ) : (
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
              <SwiperSlide className={styles.dishSlide} key={food._id}>
                <div
                  className={styles.card}
                  onClick={() => navigate(`/menu/food/${food._id}`)}
                >
                  <div className={styles.imageWrap}>
                    <img
                      className={styles.image}
                      src={food.image}
                      alt={food.title}
                      loading="lazy"
                    />

                    <span className={styles.vegDot}>
                      <span
                        className={food.isVeg ? styles.veg : styles.nonVeg}
                      />
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
        )}
      </section>
    </div>
  );
};
