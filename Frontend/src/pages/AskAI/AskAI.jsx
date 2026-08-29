import { DesktopNavbar } from "../../components/Common/DesktopNavbar";
import styles from "./AskAI.module.css";
import { LuArrowUp, LuSparkles, IconChefHat } from "../../assets/icons/icon";
import { DesktopNavbarSkeleton } from "../../components/Common/DesktopNavbarSkeleton";
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";

export const AskAI = () => {
  const { loading } = useContext(AuthContext);

  return (
    <main className={styles.askAi}>
      {loading ? <DesktopNavbarSkeleton /> : <DesktopNavbar />}

      <div className={styles.wrapper}>
        <section className={styles.hero}>
          <span className={styles.badge}>
            <LuSparkles className={styles.sparkle} />
            AI food assistant
          </span>

          <h1>What are you craving today?</h1>
        </section>

        <section className={styles.chat}>
          <div className={styles.messages}>
            <div className={`${styles.message} ${styles.ai}`}>
              <div className={styles.aiAvatar}>
                <IconChefHat size={20} stroke={2} />
              </div>
              <div className={styles.bubble}>
                Hello! What would you like to eat?
              </div>
            </div>

            <div className={`${styles.message} ${styles.user}`}>
              <div className={styles.bubble}>Suggest something spicy</div>
            </div>
          </div>
        </section>

        <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            name="text"
            id="text"
            placeholder="Ask anything..."
            autoComplete="off"
            spellCheck={false}
            aria-label="ask-ai"
            autoFocus
          />
          <button type="submit" aria-label="Send message">
            <LuArrowUp className={styles.searchIcon} />
          </button>
        </form>
      </div>
    </main>
  );
};
