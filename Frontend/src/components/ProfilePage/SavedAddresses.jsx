import { useContext, useEffect, useState } from "react";
import styles from "./SavedAddresses.module.css";
import { BriefcaseBusiness, House, MapPin, MoreHorizontal } from "lucide-react";
import { AddressContext } from "../../context/AddressContext";
import { DesktopNavbar } from "../Common/DesktopNavbar";
import { AddressActionMenu } from "../Checkout/AddressActionMenu";
import { DeleteAddressModal } from "../Checkout/DeleteAddressModal";
const TYPE_ICONS = { home: House, work: BriefcaseBusiness, Other: MapPin };

export const SavedAddresses = () => {
  const [activeAddressId, setActiveAddressId] = useState(null);
  const [deleteAddress, setDeleteAddress] = useState(null);

  const {
    getAddresses,
    getAddressesLoading,
    userAddresses,
    handleDeleteAddress,
  } = useContext(AddressContext);

  useEffect(() => {
    getAddresses();
  }, []);

  const handleConfirmDelete = async () => {
    try {
      await handleDeleteAddress(deleteAddress._id);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main className={styles.page}>
      <DesktopNavbar />
      <div className={styles.wrap}>
        <h1 className={styles.title}>Saved Addresses</h1>

        {userAddresses.length === 0 ? (
          <div className={styles.empty}>
            <MapPin
              size={40}
              style={{ marginBottom: "1.2rem", opacity: "0.5" }}
            />
            <p>No saved addresses yet.</p>
          </div>
        ) : (
          <div className={styles.list}>
            {userAddresses.map((address) => {
              const Icon = TYPE_ICONS[address.addressType] || MapPin;

              return (
                <div className={styles.card} key={address._id}>
                  <div className={styles.icon}>
                    <Icon size={19} />
                  </div>
                  <div className={styles.info}>
                    <div className={styles.typeRow}>
                      <span className={styles.type}>{address.addressType}</span>
                      {address.isDefault && (
                        <span className={styles.defaultBadge}>Default</span>
                      )}
                    </div>
                    <p className={styles.addressText}>
                      {address.houseNumber}, {address.locality},{" "}
                      {address.landmark}, {address.address}
                    </p>
                  </div>
                  <div className={styles.menuWrap}>
                    <button
                      type="button"
                      className={styles.menuBtn}
                      onClick={() =>
                        setActiveAddressId((prev) =>
                          prev === address._id ? null : address._id
                        )
                      }
                    >
                      <MoreHorizontal size={19} />
                    </button>
                  </div>

                  {activeAddressId === address._id && (
                    <AddressActionMenu
                      onDelete={() => {
                        setDeleteAddress(address);
                        setActiveAddressId(null);
                      }}
                    />
                  )}

                  {deleteAddress && (
                    <DeleteAddressModal
                      onCancel={() => setDeleteAddress(null)}
                      onConfirm={handleConfirmDelete}
                    />
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </main>
  );
};
