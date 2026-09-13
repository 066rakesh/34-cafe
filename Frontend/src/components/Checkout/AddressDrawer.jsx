import { RxCross2, Search, ArrowLeft } from "../../assets/icons/icon";
import styles from "./AddressDrawer.module.css";
import { MapSection } from "./MapSection";
import { useContext, useState } from "react";
import { AddressSearch } from "./AddressSearch";
import { AddressForm } from "./AddressForm";
import { AddressContext } from "../../context/AddressContext";

export const AddressDrawer = ({ setShowAddressDrawer }) => {
  const [showAddressSearch, setShowAddressSearch] = useState(false);
  const { setAddress, setUserLocation, setLocationData } =
    useContext(AddressContext);

  const handleClose = () => {
    setUserLocation(null);
    setLocationData(null);
    setAddress({
      houseNumber: "",
      locality: "",
      landmark: "",
      addressType: "",
      isDefault: false,
    });
    setShowAddressDrawer(false);
  };

  return (
    <main className={styles.address} onClick={(e) => e.stopPropagation()}>
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <div className={styles.left}>
            {showAddressSearch ? (
              <button
                type="button"
                className={styles.backBtn}
                aria-label="Back button"
                onClick={() => setShowAddressSearch(false)}
              >
                <ArrowLeft size={22} />
              </button>
            ) : (
              <button
                type="button"
                className={styles.crossBtn}
                aria-label="Close address drawer"
                onClick={handleClose}
              >
                <RxCross2 size={20} />
              </button>
            )}

            <h2>Add Address</h2>
          </div>

          {!showAddressSearch && (
            <button
              type="button"
              className={styles.searchBtn}
              onClick={() => setShowAddressSearch(true)}
            >
              <Search size={20} />
            </button>
          )}
        </div>
      </header>
      {showAddressSearch ? (
        <AddressSearch setShowAddressSearch={setShowAddressSearch} />
      ) : (
        <div className={styles.content}>
          <div className={styles.mapSection}>
            <MapSection />
          </div>
          <AddressForm setShowAddressDrawer={setShowAddressDrawer} />
        </div>
      )}
    </main>
  );
};
