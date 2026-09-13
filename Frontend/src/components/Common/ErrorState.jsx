import styles from "./ErrorState.module.css";

export const ErrorState = ({onRetry, message}) => {
  return (
    <div className={styles.wrapper}>
      <svg
        width="56"
        height="56"
        viewBox="0 0 64 64"
        role="img"
        aria-label="error icon"
      >
        <circle
          cx="32"
          cy="32"
          r="28"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
        <circle cx="23" cy="27" r="3" fill="currentColor" />
        <circle cx="41" cy="27" r="3" fill="currentColor" />
        <path
          d="M 21 42 Q 32 33 43 42"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>

      <p className={styles.message}>{message}</p>

      <button className={styles.retryBtn} onClick={onRetry}>Try again</button>
    </div>
  );
};
