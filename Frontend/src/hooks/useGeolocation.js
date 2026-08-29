import { useState } from "react";

export const useGeolocation = ({ setUserLocation, setLocationLoading }) => {
  const [locationError, setLocationError] = useState("");

  const handleCurrentLocation = () => {
    setLocationLoading(true);
    setLocationError("");

    navigator.geolocation.getCurrentPosition(
      (location) => {
        const { latitude, longitude } = location.coords;
        setUserLocation({ latitude, longitude });
        setLocationLoading(false);
        setLocationError("");
      },
      (error) => {
        console.log("Unable to fetch location", error);
        setLocationLoading(false);

        if (error.code === error.PERMISSION_DENIED) {
          setLocationError("Location permission was denied. Please allow location access.");
        } else if (error.code === error.POSITION_UNAVAILABLE) {
          setLocationError("Unable to detect your location. Please try again.");
        } else if (error.code === error.TIMEOUT) {
          setLocationError("Location request timed out. Please try again.");
        }
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0,
      },
    );
  };

  const handleUserNewLocation = (e) => {
    const latitude = e.latLng.lat();
    const longitude = e.latLng.lng();
    setUserLocation({ latitude, longitude });
  };

  return { locationError, handleCurrentLocation, handleUserNewLocation };
};