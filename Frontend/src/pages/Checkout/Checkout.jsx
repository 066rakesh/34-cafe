import { ArrowLeft, Plus, Home } from "../../assets/icons/icon";
import styles from "./Checkout.module.css";
import { SummaryCard } from "../../components/Checkout/SummaryCard";
import { useContext, useEffect, useState } from "react";
import { AddressDrawer } from "../../components/Checkout/AddressDrawer";
import { AddressContext } from "../../context/AddressContext";
import { AuthContext } from "../../context/AuthContext";
import { AddressSelectionModal } from "../../components/Checkout/AddressSelectionModal";
import { AddressCard } from "../../components/Checkout/AddressCard";
import { AddressSkeleton } from "../../components/Checkout/AddressSkeleton ";
import { CartContext } from "../../context/CartContext";
import { EmptyCheckout } from "../EmptyCheckout/EmptyCheckout";
import { DesktopNavbar } from "../../components/Common/DesktopNavbar";
import { useSearchParams } from "react-router-dom";

export const Checkout = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const showAddressDrawer = searchParams.get("modal") === "add-address";
  const showUserAddresses = searchParams.get("modal") === "select-address";

  const openAddressDrawer = () => setSearchParams({ modal: "add-address" });
  const closeAddressDrawer = () => setSearchParams({}, { replace: false });

  const openUserAddresses = () => setSearchParams({ modal: "select-address" });
  const closeUserAddresses = () => setSearchParams({});

  const {
    getAddresses,
    userAddresses,
    getAddressesLoading,
    selectedAddress,
    setSelectedAddress,
  } = useContext(AddressContext);
  const { user } = useContext(AuthContext);
  const { cartItems } = useContext(CartContext);

  useEffect(() => {
    if (showAddressDrawer || showUserAddresses) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [showAddressDrawer, showUserAddresses]);

  useEffect(() => {
    if (!user) return;
    getAddresses();
  }, [user]);

  useEffect(() => {
    if (userAddresses.length === 0) {
      setSelectedAddress(null);
      return;
    }

    const defaultAddress = userAddresses.find(
      (address) => address.isDefault === true
    );

    setSelectedAddress(defaultAddress || userAddresses[0]);
  }, [userAddresses]);

  if (cartItems.length === 0) {
    return <EmptyCheckout />;
  }

  return (
    <main className={styles.checkout}>
      <DesktopNavbar />
      <div className={styles.container}>
        <section className={styles.left}>
          {getAddressesLoading ? (
            <AddressSkeleton />
          ) : (
            <>
              {userAddresses.length > 0 ? (
                <AddressCard
                  userName={user?.name}
                  address={selectedAddress}
                  rightSlot={
                    <div
                      className={styles.addressChange}
                      onClick={openUserAddresses}
                    >
                      <span>Change</span>
                    </div>
                  }
                />
              ) : (
                <div className={styles.addressCard}>
                  <div className={styles.addressTop}>
                    <div className={styles.addressLabel}>
                      <span>
                        <Home size={20} />
                      </span>
                      <span>No saved address</span>
                    </div>
                  </div>

                  <div className={styles.addressDetails}>
                    <span>Add a delivery address to continue.</span>
                  </div>
                </div>
              )}
            </>
          )}

          <button
            type="button"
            className={styles.addAddressButton}
            onClick={openAddressDrawer}
          >
            <span className={styles.plusIcon}>
              <Plus />
            </span>

            <span>Add New Address</span>
          </button>

          {showUserAddresses && (
            <div className={styles.overlay} onClick={closeUserAddresses}>
              <AddressSelectionModal
                setShowUserAddresses={closeUserAddresses}
                setSelectedAddress={setSelectedAddress}
                setShowAddressDrawer={openAddressDrawer}
              />
            </div>
          )}

          <div
            className={showAddressDrawer ? styles.overlay : ""}
            onClick={closeAddressDrawer}
          >
            {showAddressDrawer && (
              <AddressDrawer setShowAddressDrawer={closeAddressDrawer} />
            )}
          </div>
        </section>
        <SummaryCard />
      </div>
    </main>
  );
};
