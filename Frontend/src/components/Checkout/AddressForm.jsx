import { useContext, useState } from "react";
import { House, BriefcaseBusiness, MapPin } from "../../assets/icons/icon";
import styles from "./AddressForm.module.css";
import { AddressContext } from "../../context/AddressContext";

export const AddressForm = ({ setShowAddressDrawer }) => {
  const {
    userLocation,
    locationData,
    locationLoading,
    deliveryLoading,
    address,
    setAddress,
    handleCreateAddress,
    createAddressLoading,
  } = useContext(AddressContext);

  const [errors, setErrors] = useState({
    houseNumber: "",
    locality: "",
    landmark: "",
    addressType: "",
  });
  const [submitError, setSubmitError] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setAddress((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleAddressSubmit = async (e) => {
    e.preventDefault();

    if (!userLocation || !locationData.available) {
      return;
    }
    const newErrors = {};

    if (address.houseNumber.trim() === "")
      newErrors.houseNumber = "House / Flat No. is required";
    if (address.locality.trim() === "")
      newErrors.locality = "Locality is required";
    if (address.landmark.trim() === "")
      newErrors.landmark = "Landmark is required";
    if (!address.addressType)
      newErrors.addressType = "Address type is required";

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    const addressData = {
      ...address,
      longitude: userLocation.longitude,
      latitude: userLocation.latitude,
      address: locationData.location.address,
    };

    submitError(false);

    try {
      await handleCreateAddress(addressData);
      setAddress({
        houseNumber: "",
        locality: "",
        landmark: "",
        addressType: "",
      });
      setShowAddressDrawer(false);
    } catch (error) {
      console.log(error);
      submitError(true);
    }
  };

  return (
    <form className={styles.addressForm} onSubmit={handleAddressSubmit}>
      <div className={styles.mapBox}>
        <div className={styles.field}>
          <input
            type="text"
            name="address"
            id="address"
            placeholder="Address "
            value={
              locationLoading
                ? "Identifying your location..."
                : deliveryLoading
                  ? "Checking delivery availability..."
                  : locationData?.location?.address || ""
            }
            disabled
          />
        </div>
      </div>

      {locationData?.available === false && (
        <div className={styles.deliveryError}>
          <p>
            You're{" "}
            <strong>{Number(locationData.distance).toFixed(1)} km away</strong>.
            We deliver within 7 km.
          </p>
        </div>
      )}

      <div className={styles.addressField}>
        <div className={styles.field}>
          <input
            type="text"
            name="houseNumber"
            id="houseNumber"
            placeholder=" "
            autoComplete="address-line2"
            value={address.houseNumber}
            onChange={handleInputChange}
          />
          <label>House / Flat No.</label>
        </div>

        {errors.houseNumber && (
          <p className={styles.error}>{errors.houseNumber}</p>
        )}

        <div className={styles.field}>
          <input
            type="text"
            name="locality"
            id="locality"
            placeholder=""
            autoComplete="address-line1"
            value={address.locality}
            onChange={handleInputChange}
          />
          <label>Area / Street / Society</label>
        </div>

        {errors.locality && <p className={styles.error}>{errors.locality}</p>}

        <div className={styles.field}>
          <input
            type="text"
            name="landmark"
            id="landmark"
            placeholder=" "
            autoComplete="off"
            value={address.landmark}
            onChange={handleInputChange}
          />
          <label>LandMark</label>
        </div>

        {errors.landmark && <p className={styles.error}>{errors.landmark}</p>}

        <div className={styles.addressTypes}>
          <label className={styles.addressType}>
            <input
              type="radio"
              name="addressType"
              value="Home"
              checked={address.addressType === "Home"}
              onChange={handleInputChange}
            />
            <House size={25} />
            <span>Home</span>
          </label>

          <label className={styles.addressType}>
            <input
              type="radio"
              name="addressType"
              value="Work"
              checked={address.addressType === "Work"}
              onChange={handleInputChange}
            />
            <BriefcaseBusiness size={25} />
            <span>Work</span>
          </label>

          <label className={styles.addressType}>
            <input
              type="radio"
              name="addressType"
              value="Other"
              checked={address.addressType === "Other"}
              onChange={handleInputChange}
            />
            <MapPin size={25} />
            <span>Other</span>
          </label>
        </div>

        {errors.addressType && (
          <p className={styles.error}>{errors.addressType}</p>
        )}

        <div className={styles.defaultAddress}>
          <input
            type="checkbox"
            name="isDefault"
            checked={address.isDefault}
            onChange={handleInputChange}
          />
          <span>Make this is my default address</span>
        </div>

        {submitError && (
          <p className={styles.submitErr}>
            Unable to save address. Please try again.
          </p>
        )}

        <button
          type="submit"
          className={styles.proceedBtn}
          disabled={locationData?.available !== true}
        >
          {createAddressLoading ? (
            <span className={styles.loadingDots}>
              <span />
              <span />
              <span />
            </span>
          ) : (
            "Save & Proceed"
          )}
        </button>
      </div>
    </form>
  );
};
