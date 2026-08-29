import { MoreHorizontal, Plus, RxCross2 } from "../../assets/icons/icon";
import styles from "./AddressSelectionModal.module.css";
import { useContext, useEffect, useState } from "react";
import { AddressContext } from "../../context/AddressContext";
import { AuthContext } from "../../context/AuthContext";
import { AddressCard } from "./AddressCard";
import { AddressActionMenu } from "./AddressActionMenu";
import { DeleteAddressModal } from "./DeleteAddressModal";

export const AddressSelectionModal = ({
  setShowUserAddresses,
  setSelectedAddress,
  setShowAddressDrawer,
}) => {
  const [activeAddressId, setActiveAddressId] = useState(null);
  const [deleteAddress, setDeleteAddress] = useState(null);
  const { userAddresses, handleDeleteAddress } = useContext(AddressContext);
  const { user } = useContext(AuthContext);

  const handleConfirmDelete = async () => {
    try {
      await handleDeleteAddress(deleteAddress._id);
      setDeleteAddress(null);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main className={styles.modal} onClick={(e) => e.stopPropagation()}>
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <div className={styles.left}>
            <h1>Select Delivery Address</h1>
          </div>
          <div className={styles.right}>
            <button
              type="button"
              className={styles.crossBtn}
              aria-label="Close select address"
              onClick={() => setShowUserAddresses(false)}
            >
              <RxCross2 size={25} />
            </button>
          </div>
        </div>
      </header>
      <div className={styles.content}>
        <div className={styles.contentTop}>
          <h2>Saved Addresses</h2>
          <button type="button" onClick={() => setShowAddressDrawer(true)}>
            <Plus />
            <span>Add new</span>
          </button>
        </div>

        {userAddresses.map((address) => (
          <div className={styles.addressCard} key={address._id}>
            <AddressCard
              userName={user.name}
              address={address}
              onClick={() => {
                setSelectedAddress(address);
                setShowUserAddresses(false);
              }}
              rightSlot={
                <div
                  className={styles.editBtn}
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveAddressId((prev) =>
                      prev === address._id ? null : address._id
                    );
                  }}
                >
                  <MoreHorizontal size={23} />
                </div>
              }
            />
            {activeAddressId === address._id && (
              <AddressActionMenu
                onDelete={() => {
                  setDeleteAddress(address);
                  setActiveAddressId(null);
                }}
              />
            )}
          </div>
        ))}
        {deleteAddress && (
          <DeleteAddressModal
            onCancel={() => setDeleteAddress(null)}
            onConfirm={handleConfirmDelete}
          />
        )}
      </div>
    </main>
  );
};
