import { DesktopNavbar } from "../../components/Common/DesktopNavbar";
import styles from "./AskAI.module.css";
import { LuArrowUp, LuSparkles, IconChefHat } from "../../assets/icons/icon";
import { DesktopNavbarSkeleton } from "../../components/Common/DesktopNavbarSkeleton";
import { AuthContext } from "../../context/AuthContext";
import { useContext, useEffect, useRef, useState } from "react";
import { chatbot } from "../../services/chatbotService";

export const AskAI = () => {
  const { loading } = useContext(AuthContext);
  const [messages, setMessages] = useState([
    { sender: "ai", text: "Hello! What would you like to eat?" },
  ]);
  const [input, setInput] = useState("");
  const [aiTyping, setAiTyping] = useState(false);

  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, aiTyping]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setAiTyping(true);

    try {
      const response = await chatbot(input);
      const aimessage = { sender: "ai", text: response.data.reply };
      setMessages((prev) => [...prev, aimessage]);
    } catch (error) {
      console.error("Chatbot error", error);
      const errorMessage = {
        sender: "ai",
        text: "Sorry, please try again!",
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setAiTyping(false);
    }
  };

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
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`${styles.message} ${msg.sender === "ai" ? styles.ai : styles.user}`}
              >
                {msg.sender === "ai" && (
                  <div className={styles.aiAvatar}>
                    <IconChefHat size={20} strokeWidth={2} />
                  </div>
                )}
                <div className={styles.bubble}>{msg.text}</div>
              </div>
            ))}

            {aiTyping && (
              <div className={`${styles.message} ${styles.ai}`}>
                <div className={styles.aiAvatar}>
                  <IconChefHat size={20} strokeWidth={2} />
                </div>

                <div className={styles.typingDots}>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            )}
          </div>
          <div ref={bottomRef}/>
        </section>

        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            type="text"
            name="text"
            id="text"
            placeholder="Ask anything..."
            autoComplete="off"
            spellCheck={false}
            aria-label="ask-ai"
            autoFocus
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button type="submit" aria-label="Send message">
            <LuArrowUp className={styles.searchIcon} />
          </button>
        </form>
      </div>
    </main>
  );
};
