import styles from "./Profile.module.css";
import { IoIosArrowDown } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { FaUser } from "../../assets/icons/icon";
import { useContext, useState } from "react";
import { UIContext } from "../../context/UIContext";
import { AuthContext } from "../../context/AuthContext";
import { updateMe } from "../../services/authService";
import toast from "react-hot-toast";

export const Profile = () => {
  const { setIsProfileOpen } = useContext(UIContext);
  const { user, setUser, logoutUser } = useContext(AuthContext);
  const [openSection, setOpenSection] = useState(null);
  const [editingField, setEditingField] = useState(null);
  const [updateData, setUpdateData] = useState({
    name: user.name,
    email: user.email,
  });

  if (!user) return null;

  const { name, email } = user;
  const userName = name.split(" ")[0];

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUpdateData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    try {
      const response = await updateMe(updateData);
      setUser(response.data.user);
      setEditingField(null);
      toast.success("Profile updated successfully");
    } catch (error) {
      console.log("UPDARE ERROR:", error);
      console.log("RESPONSE:", Error.response?.data);
      toast.error(error.response?.data?.message || "Something went wrong");
    }
  };

  const handleCancel = () => {
    setUpdateData({
      name: user.name,
      email: user.email,
    })
    setEditingField(null);
  };

  const handleLogoutUser = () => {
    logoutUser();
    setIsProfileOpen(false);
  };
  return (
    <main className={styles.profile} onClick={(e) => e.stopPropagation()}>
      <button
        type="button"
        className={styles.crossBtn}
        aria-label="Close login"
        onClick={() => setIsProfileOpen(false)}
      >
        <RxCross2 />
      </button>
      <div className={styles.top}>
        <span className={styles.userIcon}>
          <FaUser />
        </span>
        <span className={styles.userName}>{userName}</span>
        <span className={styles.userEmail}>{email}</span>
      </div>

      <div className={styles.wrapper}>
        <div
          className={styles.itemHeader}
          onClick={() => {
            setOpenSection(openSection === "profile" ? null : "profile");
            setEditingField(null);
          }}
        >
          <span>My Profile</span>
          <span
            className={`${styles.arrow} ${openSection === "profile" ? styles.rotate : ""}`}
          >
            <IoIosArrowDown />
          </span>
        </div>

        {openSection === "profile" && (
          <div className={styles.content}>
            <div className={styles.inputGroup}>
              <div className={styles.inputBox}>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={updateData.name}
                  onChange={handleChange}
                  disabled={editingField !== "name"}
                />
                <label htmlFor="name">Name</label>
                <button
                  type="button"
                  className={styles.editBtn}
                  onClick={() => setEditingField("name")}
                >
                  EDIT
                </button>
              </div>

              {editingField === "name" && (
                <div className={styles.actionBtns}>
                  <button
                    type="button"
                    className={styles.updateBtn}
                    onClick={handleSubmit}
                    disabled={updateData.name === user.name}
                  >
                    Update
                  </button>
                  <button
                    type="submit"
                    className={styles.cancelBtn}
                    onClick={handleCancel}
                  >
                    Cancel
                  </button>
                </div>
              )}
            </div>

            <div className={styles.inputGroup}>
              <div className={styles.inputBox}>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={updateData.email}
                  onChange={handleChange}
                  disabled={editingField !== "email"}
                />
                <label htmlFor="email">Email</label>
                <button
                  type="button"
                  className={styles.editBtn}
                  onClick={() => setEditingField("email")}
                >
                  EDIT
                </button>
              </div>

              {editingField === "email" && (
                <div className={styles.actionBtns}>
                  <button
                    type="button"
                    className={styles.updateBtn}
                    onClick={handleSubmit}
                    disabled={updateData.email === user.email}
                  >
                    Update
                  </button>
                  <button
                    type="submit"
                    className={styles.cancelBtn}
                    onClick={handleCancel}
                  >
                    Cancel
                  </button>
                </div>
              )}
            </div>
          </div>
        )}

        <div className={styles.itemHeader}>
          <span>My Orders</span>
          <span
            className={`${styles.arrow} ${openSection === "orders" ? styles.rotate : ""}`}
          >
            <IoIosArrowDown />
          </span>
        </div>

        <div className={styles.itemHeader}>
          <span>Saved Addresses</span>
          <span
            className={`${styles.arrow} ${openSection === "address" ? styles.rotate : ""}`}
          >
            <IoIosArrowDown />
          </span>
        </div>

        <div className={styles.itemHeader}>
          <span>Help & Support</span>
          <span
            className={`${styles.arrow} ${openSection === "help" ? styles.rotate : ""}`}
          >
            <IoIosArrowDown />
          </span>
        </div>

        <div
          className={styles.itemHeader}
          onClick={() =>
            setOpenSection(openSection === "logout" ? null : "logout")
          }
        >
          <span>Logout Options</span>
          <span
            className={`${styles.arrow} ${openSection === "logout" ? styles.rotate : ""}`}
          >
            <IoIosArrowDown />
          </span>
        </div>

        {openSection === "logout" && (
          <button
            type="button"
            className={styles.logoutBtn}
            onClick={handleLogoutUser}
          >
            Log out
          </button>
        )}
      </div>
    </main>
  );
};
