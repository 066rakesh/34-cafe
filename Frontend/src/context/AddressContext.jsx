import { createContext, useEffect, useState } from "react";
import { checkDelivery } from "../services/deliveryService";
import {
  createAddress,
  deleteAddressApi,
  getAddressesApi,
} from "../services/addressService";

export const AddressContext = createContext();

export const AddressProvider = ({ children }) => {
  const [userLocation, setUserLocation] = useState(null);
  const [locationData, setLocationData] = useState(null);
  const [locationLoading, setLocationLoading] = useState(false);
  const [deliveryLoading, setDeliveryLoading] = useState(false);
  const [createAddressLoading, setCreateAddressLoading] = useState(false);
  const [userAddresses, setUserAddresses] = useState([]);
  const [getAddressesLoading, setGetAddressesLoading] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState(null);

  const [address, setAddress] = useState({
    houseNumber: "",
    locality: "",
    landmark: "",
    addressType: "",
    isDefault: false,
  });

  useEffect(() => {
    if (!userLocation) return;

    const controller = new AbortController();

    const getAddress = async () => {
      try {
        setDeliveryLoading(true);
        setLocationData(null);

        const response = await checkDelivery(
          {
            latitude: userLocation.latitude,
            longitude: userLocation.longitude,
          },
          controller.signal
        );

        setLocationData(response.data);
      } catch (error) {
        if (error.code === "ERR_CANCELED") {
          return;
        }
        console.error("Unable to get address", error);
      } finally {
        if (!controller.signal.aborted) {
          setDeliveryLoading(false);
        }
      }
    };

    getAddress();

    return () => {
      controller.abort();
    };
  }, [userLocation]);

  useEffect(() => {
    const handleLogout = () => {
      setUserAddresses([]);
      setSelectedAddress(null);
      setUserLocation(null);
      setLocationData(null);
      setAddress({
        houseNumber: "",
        locality: "",
        landmark: "",
        addressType: "",
        isDefault: false,
      });
    };

    window.addEventListener("auth:logout", handleLogout);
    return () => window.removeEventListener("auth:logout", handleLogout);
  }, []);

  const getAddresses = async () => {
    try {
      setGetAddressesLoading(true);
      const response = await getAddressesApi();
      setUserAddresses(response.data.addresses);
    } catch (error) {
      console.error("Unable to get addresses", error);
    } finally {
      setGetAddressesLoading(false);
    }
  };

  const handleCreateAddress = async (addressData) => {
    try {
      setCreateAddressLoading(true);

      const response = await createAddress(addressData);
      await getAddresses();
      return response.data;
    } catch (error) {
      console.error("Unable to create address", error);
      throw error;
    } finally {
      setCreateAddressLoading(false);
    }
  };

  const handleDeleteAddress = async (addressId) => {
    try {
      const response = await deleteAddressApi(addressId);
      removeAddressFromState(addressId);
      return response.data;
    } catch (error) {
      console.error("Unable to delete address", error);
      throw error;
    }
  };

  const removeAddressFromState = (addressId) => {
    setUserAddresses((prevAddresses) =>
      prevAddresses.filter((address) => address._id !== addressId)
    );
  };

  return (
    <AddressContext.Provider
      value={{
        userLocation,
        setUserLocation,

        locationData,
        setLocationData,

        locationLoading,
        setLocationLoading,

        deliveryLoading,
        setDeliveryLoading,

        address,
        setAddress,

        createAddressLoading,
        handleCreateAddress,
        handleDeleteAddress,
        getAddressesLoading,

        getAddresses,
        userAddresses,
        removeAddressFromState,

        selectedAddress,
        setSelectedAddress,
      }}
    >
      {children}
    </AddressContext.Provider>
  );
};
