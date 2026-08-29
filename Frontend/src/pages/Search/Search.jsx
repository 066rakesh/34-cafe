import { DesktopNavbar } from "../../components/Common/DesktopNavbar";
import styles from "./Search.module.css";
import { IoSearch } from "../../assets/icons/icon";
import { Swiper, SwiperSlide } from "swiper/react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { DesktopNavbarSkeleton } from "../../components/Common/DesktopNavbarSkeleton";
import { useContext, useState } from "react";
import { menu } from "../../data/menu";
import { Clock, Star } from "lucide-react";
import style from "../../components/Menu/FoodGrid.module.css";

const Popular = menu.filter((item) => item.isPopular);

export const Search = () => {
  const [searchFood, setSearchFood] = useState("");
  const { loading } = useContext(AuthContext);
  const navigate = useNavigate();

  const filterMenu = menu.filter((item) => {
    const search = searchFood.toLowerCase().trim();

    return (
      item.title.toLowerCase().includes(search) ||
      item.category.toLowerCase().includes(search)
    );
  });

  return (
    <main className={styles.search}>
      {loading ? <DesktopNavbarSkeleton /> : <DesktopNavbar />}

      <section className={styles.wrapper}>
        <div className={styles.fixedTop}>
          <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
            <input
              type="text"
              name="search"
              id="search"
              placeholder="Search any food..."
              autoFocus
              autoComplete="off"
              spellCheck={false}
              aria-label="Search food"
              value={searchFood}
              onChange={(e) => setSearchFood(e.target.value)}
            />
            <button
              type="submit"
              className={styles.searchBtn}
              aria-label="search"
            >
              <IoSearch />
            </button>
          </form>

          <div className={styles.cuisines}>
            <h3>Popular Cuisines</h3>

            <Swiper
              slidesPerView="auto"
              breakpoints={{
                0: { spaceBetween: 10 },
                768: { spaceBetween: 16 },
                1024: { spaceBetween: 20 },
              }}
            >
              {Popular.map((item) => (
                <SwiperSlide key={item.id} className={styles.slide}>
                  <button
                    type="button"
                    className={styles.card}
                    onClick={() => navigate(`/menu/food/${item.id}`)}
                  >
                    <span className={styles.image}>
                      <img src={item.image} alt={item.title} loading="lazy" />
                    </span>
                    <p>{item.title}</p>
                  </button>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        {searchFood && (
          <div className={styles.scrollArea}>
            <section className={style.foods}>
              {filterMenu.map((food) => (
                <div
                  className={style.card}
                  key={food.id}
                  onClick={() => navigate(`/menu/food/${food.id}`)}
                >
                  <div className={style.imageWrap}>
                    <img className={style.image} src={food.image} />

                    <span className={`${style.vegDot} ${style.veg}`}>
                      <span />
                    </span>
                  </div>

                  <div className={style.content}>
                    <div className={style.topRow}>
                      <h3 className={style.name}>{food.title}</h3>
                      <span className={style.rating}>
                        <Star size={12} />
                        {food.rating}
                      </span>
                    </div>

                    <p className={style.description}>{food.description}</p>

                    <div className={style.metaRow}>
                      <span className={style.prepTime}>
                        <Clock size={12} />
                        {food.prepTime} mins
                      </span>
                      <span className={style.category}>{food.category}</span>
                    </div>

                    <div className={style.bottomRow}>
                      <div className={style.priceBlock}>
                        <span className={style.price}>₹{food.price}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </section>
          </div>
        )}
      </section>
    </main>
  );
};
