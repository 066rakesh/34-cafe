import styles from "./Login.module.css";
import { RxCross2 } from "../../assets/icons/icon";
import logo from "../../assets/images/logo_black.svg";
import { useContext, useState } from "react";
import { loginUser, verifyOtp } from "../../services/authService";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate, useSearchParams } from "react-router-dom";
import toast from "react-hot-toast";

export const Login = () => {
  const { setIsAuthOpen, setAuthMode, fetchUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const [showOtp, setShowOtp] = useState(false);
  const [otp, setOtp] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState({
    email: "",
    otp: "",
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Please enter a valid email";
    }

    setError(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    try {
      if (!showOtp) {
        setLoading(true);
        await loginUser({ email });
        setShowOtp(true);
        return;
      }

      if (!otp.trim()) {
        setError((prev) => ({
          ...prev,
          otp: "OTP is required",
        }));
        return;
      } else if (!/^\d{6}$/.test(otp)) {
        setError((prev) => ({
          ...prev,
          otp: "Please enter a valid 6-digit OTP",
        }));
        return;
      }

      setLoading(true);
      const response = await verifyOtp({
        email,
        otp,
      });
      toast.success("Logged in successfully!");
      const { token } = response.data;
      localStorage.setItem("token", token);
      await fetchUser();
      const redirect = searchParams.get("redirect");
      if (redirect) {
        navigate(redirect);
      } else {
        setIsAuthOpen(false);
      }
    } catch (error) {
      if (error.response) {
        setError((prev) => ({
          ...prev,
          otp: error.response.data.message,
        }));
      } else if (error.request) {
        setError((prev) => ({
          ...prev,
          otp: "Unable to connect. Please try again.",
        }));
      } else {
        setError((prev) => ({
          ...prev,
          otp: "Something went wrong.",
        }));
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className={styles.login} onClick={(e) => e.stopPropagation()}>
      <button
        type="button"
        className={styles.crossBtn}
        aria-label="Close login"
        onClick={() => setIsAuthOpen(false)}
      >
        <RxCross2 size={25} />
      </button>

      <div className={styles.top}>
        <div className={styles.left}>
          <h2>Login</h2>

          <p onClick={() => setAuthMode("signup")}>
            or <span>create an account</span>
          </p>
        </div>

        <div className={styles.right}>
          <img src={logo} alt="34 paapi Pet Cafe logo" />
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <div className={styles.input}>
          <div className={styles.inputBox}>
            <input
              type="email"
              id="email"
              name="email"
              placeholder=" "
              autoComplete="email"
              autoFocus
              readOnly={showOtp}
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setError((prev) => ({
                  ...prev,
                  email: "",
                }));
              }}
            />

            <label htmlFor="email">Email</label>
          </div>

          {error.email && <p className={styles.error}>{error.email}</p>}

          {showOtp && (
            <div className={styles.inputBox}>
              <input
                type="tel"
                name="otp"
                id="otp"
                inputMode="numeric"
                placeholder=""
                autoFocus
                maxLength={6}
                value={otp}
                onChange={(e) => setOtp(e.target.value.replace(/\D/g, ""))}
              />

              <label htmlFor="otp">OTP</label>
            </div>
          )}

          {error.otp && <p className={styles.error}>{error.otp}</p>}
        </div>

        <div className={styles.bottom}>
          <button type="submit" className={styles.loginBtn} disabled={loading}>
            {showOtp ? (
              loading ? (
                <span className={styles.loadingDots}>
                  <span />
                  <span />
                  <span />
                </span>
              ) : (
                "Verify OTP"
              )
            ) : loading ? (
              <span className={styles.loadingDots}>
                <span />
                <span />
                <span />
              </span>
            ) : (
              "Continue"
            )}
          </button>

          <p>
            By clicking on login, I accept the <span>Terms & Conditions &</span>
            <span> Privacy Policy</span>
          </p>
        </div>
      </form>
    </section>
  );
};
