import styles from "./NotFound.module.css";
import { useNavigate } from "react-router-dom";
import error from "../../assets/images/404.png";

export const NotFound = () => {
  const navigate = useNavigate();
  return (
    <main className={styles.container}>
      <div className={styles.image}>
        <img src={error} alt="404 page not found illustration" />
      </div>
      <div className={styles.info}>
        <h2>Oops! Page Not Found</h2>

        <p>
          Sorry, the page you're looking for doesn't exist or may have been
          moved.
        </p>

        <div className={styles.buttons}>
          <button
            type="button"
            className={styles.homeBtn}
            onClick={() => navigate("/")}
          >
            Go To Home
          </button>

          <button
            type="button"
            className={styles.backBtn}
            onClick={() => navigate(-1)}
          >
            Go Back
          </button>
        </div>
      </div>
    </main>
  );
};
