import styles from "./SignUp.module.css";
import logo from "../../assets/images/logo_black.svg";
import { useContext, useState } from "react";
import { RxCross2 } from "../../assets/icons/icon";
import { signupUser } from "../../services/authService";
import { AuthContext } from "../../context/AuthContext";
import toast from "react-hot-toast";

export const SignUp = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthMode, setIsAuthOpen } = useContext(AuthContext);

  const [signData, setSignData] = useState({
    phone: "",
    name: "",
    email: "",
  });

  const [errors, setErrors] = useState({
    phone: "",
    name: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!signData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(signData.phone)) {
      newErrors.phone = "Enter a valid 10-digit phone number";
    }

    if (!signData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!signData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(signData.email)) {
      newErrors.email = "Enter a valid email";
    }

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    try {
      setLoading(true);
      await signupUser(signData);
      toast.success("Account created successfully");
      setSignData({
        phone: "",
        name: "",
        email: "",
      });
      setAuthMode("login");
    } catch (error) {
      if (error?.response) {
        const data = error.response.data;

        if (Array.isArray(data?.errors)) {
          const serverErrors = {};
          data.errors.forEach((err) => {
            if (!serverErrors[err.field]) serverErrors[err.field] = err.message;
          });
          setErrors((prev) => ({ ...prev, ...serverErrors }));
        } else {
          const field = data?.field || "email";
          setErrors((prev) => ({ ...prev, [field]: data?.message }));
        }
      } else if (error?.request) {
        setErrors((prev) => ({
          ...prev,
          email: "Network error. Please check your connection.",
        }));
      } else {
        setErrors((prev) => ({
          ...prev,
          email: "Something went wrong. Please try again.",
        }));
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className={styles.sign} onClick={(e) => e.stopPropagation()}>
      <button
        type="button"
        className={styles.crossBtn}
        aria-label="Close Sign up"
        onClick={() => setIsAuthOpen(false)}
      >
        <RxCross2 size={25} />
      </button>

      <div className={styles.top}>
        <div className={styles.left}>
          <h2>Sign Up</h2>

          <p onClick={() => setAuthMode("login")}>
            or <span>login to your account</span>
          </p>
        </div>

        <div className={styles.right}>
          <img src={logo} alt="34 Paapi Pet Cafe logo" />
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <div className={styles.input}>
          <div className={styles.inputBox}>
            <input
              type="tel"
              id="phone"
              name="phone"
              inputMode="numeric"
              maxLength={10}
              placeholder=" "
              autoComplete="tel"
              autoFocus
              value={signData.phone}
              onChange={handleChange}
            />

            <label htmlFor="phone">Phone Number</label>
          </div>

          {errors.phone && <p className={styles.error}>{errors.phone}</p>}

          <div className={styles.inputBox}>
            <input
              type="text"
              id="name"
              name="name"
              autoComplete="name"
              placeholder=" "
              value={signData.name}
              onChange={handleChange}
            />

            <label htmlFor="name">Name</label>
          </div>

          {errors.name && <p className={styles.error}>{errors.name}</p>}

          <div className={styles.inputBox}>
            <input
              type="email"
              id="email"
              name="email"
              autoComplete="email"
              placeholder=" "
              value={signData.email}
              onChange={handleChange}
            />

            <label htmlFor="email">Email</label>
          </div>

          {errors.email && <p className={styles.error}>{errors.email}</p>}
        </div>

        <div className={styles.bottom}>
          <button type="submit" className={styles.signinBtn} disabled={loading}>
            {loading ? (
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
            By clicking Continue, I accept the <span>Terms & Conditions &</span>
            <span> Privacy Policy</span>
          </p>
        </div>
      </form>
    </section>
  );
};
