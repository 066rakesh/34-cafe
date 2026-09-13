import { useContext, useEffect, useState } from "react";
import styles from "./SavedAddresses.module.css";
import {
  BriefcaseBusiness,
  House,
  MapPin,
  MoreHorizontal,
  Trash2,
} from "lucide-react";
import { AddressContext } from "../../context/AddressContext";
import { DesktopNavbar } from "../Common/DesktopNavbar";
import { DeleteAddressModal } from "../Checkout/DeleteAddressModal";
const TYPE_ICONS = { Home: House, Work: BriefcaseBusiness, Other: MapPin };

export const SavedAddresses = () => {
  const [activeAddressId, setActiveAddressId] = useState(null);
  const [deleteAddress, setDeleteAddress] = useState(null);
  const [deleteLoading, setDeleteLoading] = useState(false);
  const [deleteError, setDeleteError] = useState(false);

  const { getAddresses, userAddresses, handleDeleteAddress } =
    useContext(AddressContext);

  useEffect(() => {
    getAddresses();
  }, []);

  const handleConfirmDelete = async () => {
    setDeleteLoading(true);
    setDeleteError(false);
    try {
      await handleDeleteAddress(deleteAddress._id);
      setDeleteAddress(null);
    } catch (error) {
      console.log(error);
      setDeleteError(true);
    } finally {
      setDeleteLoading(false);
    }
  };

  return (
    <main className={styles.page} onClick={() => setActiveAddressId(null)}>
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
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveAddressId((prev) =>
                          prev === address._id ? null : address._id
                        );
                      }}
                    >
                      <MoreHorizontal size={19} />
                    </button>
                    {activeAddressId === address._id && (
                      <div className={styles.actionMenu}>
                        <div className={styles.actionCard}>
                          <button
                            type="button"
                            className={styles.actionBtn}
                            onClick={() => {
                              setDeleteAddress(address);
                              setActiveAddressId(null);
                            }}
                          >
                            <Trash2 size={15} />
                            <span>Delete</span>
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {deleteAddress && (
          <DeleteAddressModal
            onCancel={() => {
              setDeleteAddress(null);
              setDeleteError(null);
            }}
            onConfirm={handleConfirmDelete}
            loading={deleteLoading}
            error={deleteError}
          />
        )}
      </div>
    </main>
  );
};
