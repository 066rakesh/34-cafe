import styles from "./AddressCard.module.css";
import { BriefcaseBusiness, Home, MapPin } from "../../assets/icons/icon";

export const AddressCard = ({ userName, address, onClick, rightSlot }) => {
  return (
    <div className={styles.addressCard} onClick={onClick}>
      <div className={styles.addressTop}>
        <div className={styles.addressLabel}>
          {address?.addressType === "Home" ? (
            <Home size={20} />
          ) : address?.addressType === "Work" ? (
            <BriefcaseBusiness size={20} />
          ) : (
            <MapPin size={20} />
          )}

          <span>{userName}</span>
        </div>
        {rightSlot}
      </div>

      <div className={styles.addressDetails}>
        <span>{address?.houseNumber}</span>
        <span>{address?.locality}</span>
        <span>{address?.landmark}</span>
        <span>{address?.address}</span>
      </div>
    </div>
  );
};
