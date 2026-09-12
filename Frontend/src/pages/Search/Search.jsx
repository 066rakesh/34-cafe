import { DesktopNavbar } from "../../components/Common/DesktopNavbar";
import styles from "./Search.module.css";
import { IoSearch } from "../../assets/icons/icon";
import { Swiper, SwiperSlide } from "swiper/react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { DesktopNavbarSkeleton } from "../../components/Common/DesktopNavbarSkeleton";
import { useContext, useState } from "react";
import { Clock, Star } from "lucide-react";
import { ProductContext } from "../../context/ProductContext";
import gridStyle from "../../components/Menu/FoodGrid.module.css";



export const Search = () => {
  const [searchFood, setSearchFood] = useState("");
  const { loading } = useContext(AuthContext);
  const { products } = useContext(ProductContext);
  const navigate = useNavigate();

  const Popular = products.filter((item) => item.isPopular);

  const filterMenu = products.filter((item) => {
    const search = searchFood.toLowerCase().trim();

    return (
      item.title.toLowerCase().includes(search) ||
      item.category.toLowerCase().includes(search)
    );
  });

  return (
    <main className={styles.search}>
      {loading ? <DesktopNavbarSkeleton /> : <DesktopNavbar />}

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
        <button type="submit" className={styles.searchBtn} aria-label="search">
          <IoSearch />
        </button>
      </form>

      <div>
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
            <SwiperSlide key={item._id} className={styles.slide}>
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

      {searchFood && (
        <section className={gridStyle.foods}>
          {filterMenu.map((food) => (
            <div
              className={gridStyle.card}
              key={food.id}
              onClick={() => navigate(`/menu/food/${food.id}`)}
            >
              <div className={gridStyle.imageWrap}>
                <img className={gridStyle.image} src={food.image} />

                <span className={`${gridStyle.vegDot} ${gridStyle.veg}`}>
                  <span />
                </span>
              </div>

              <div className={gridStyle.content}>
                <div className={gridStyle.topRow}>
                  <h3 className={gridStyle.name}>{food.title}</h3>
                  <span className={gridStyle.rating}>
                    <Star size={12} />
                    {food.rating}
                  </span>
                </div>

                <p className={gridStyle.description}>{food.description}</p>

                <div className={gridStyle.metaRow}>
                  <span className={gridStyle.prepTime}>
                    <Clock size={12} />
                    {food.prepTime} mins
                  </span>
                  <span className={gridStyle.category}>{food.category}</span>
                </div>

                <div className={gridStyle.bottomRow}>
                  <div className={gridStyle.priceBlock}>
                    <span className={gridStyle.price}>₹{food.price}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </section>
      )}
      </div>
    </main>
  );
};
