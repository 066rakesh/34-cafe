import { RxCross2, Search, ArrowLeft } from "../../assets/icons/icon";
import styles from "./AddressDrawer.module.css";
import { MapSection } from "./MapSection";
import { useState } from "react";
import { AddressSearch } from "./AddressSearch";
import { AddressForm } from "./AddressForm";

export const AddressDrawer = ({ setShowAddressDrawer }) => {
  const [showAddressSearch, setShowAddressSearch] = useState(false);

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
                <ArrowLeft size={25} />
              </button>
            ) : (
              <button
                type="button"
                className={styles.crossBtn}
                aria-label="Close login"
                onClick={() => setShowAddressDrawer(false)}
              >
                <RxCross2 size={25} />
              </button>
            )}

            <h2>Add Address</h2>
          </div>

          {showAddressSearch ? (
            ""
          ) : (
            <button
              type="button"
              className={styles.searchBtn}
              onClick={() => setShowAddressSearch(true)}
            >
              <Search size={25} />
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
          <AddressForm setShowAddressDrawer={setShowAddressDrawer}/>
        </div>
      )}
    </main>
  );
};
