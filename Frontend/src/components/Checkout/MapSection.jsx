import {
  AdvancedMarker,
  APIProvider,
  Map,
  useMap,
} from "@vis.gl/react-google-maps";
import styles from "./MapSection.module.css";
import { CAFE_LOCATION } from "../../constants/location";
import { LocateFixed, MapPin } from "../../assets/icons/icon";
import { useContext, useEffect } from "react";
import { AddressContext } from "../../context/AddressContext";
import { useGeolocation } from "../../hooks/useGeolocation";

const MapController = ({ userLocation }) => {
  const map = useMap();

  useEffect(() => {
    if (!map || !userLocation) return;

    map.panTo({
      lat: userLocation.latitude,
      lng: userLocation.longitude,
    });
    map.setZoom(16);
  }, [map, userLocation]);

  return null;
};

export const MapSection = () => {
  const { userLocation, setUserLocation, locationLoading, setLocationLoading } =
    useContext(AddressContext);

  const { locationError, handleCurrentLocation, handleUserNewLocation } =
    useGeolocation({ setUserLocation, setLocationLoading });

  return (
    <div className={styles.mapContainer}>
      <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
        <Map
          className={styles.map}
          defaultCenter={CAFE_LOCATION}
          defaultZoom={13}
          gestureHandling="greedy"
          disableDefaultUI={true}
          mapId="fa9e2a471980d129c2add30a"
        >
          <MapController userLocation={userLocation} />

          {userLocation && (
            <AdvancedMarker
              position={{
                lat: userLocation.latitude,
                lng: userLocation.longitude,
              }}
              draggable={true}
              onDragEnd={handleUserNewLocation}
            >
              <div className={styles.currentLocationMarker}>
                <span className={styles.pulse}></span>
                <span className={styles.marker}>
                  <MapPin size={40} strokeWidth={1.8} />
                </span>
              </div>
            </AdvancedMarker>
          )}
        </Map>
        <button
          type="button"
          className={styles.locationBtn}
          onClick={handleCurrentLocation}
        >
          <LocateFixed size={35} strokeWidth={1.8} />
        </button>
      </APIProvider>
      {locationLoading && (
        <div className={styles.currentLocationResponse}></div>
      )}

      {locationError && (
        <div className={styles.locationError}>
          <p>{locationError}</p>
        </div>
      )}
    </div>
  );
};