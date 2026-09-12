import { MapPin, Search } from "../../assets/icons/icon";
import styles from "./AddressSearch.module.css";
import { useContext, useState } from "react";
import { AddressContext } from "../../context/AddressContext";
import { getPlaceDetails, searchPlaces } from "../../services/placeApi";

export const AddressSearch = ({ setShowAddressSearch }) => {
  const { setUserLocation } = useContext(AddressContext);

  const [search, setSearch] = useState("");
  const [searchLocationData, setSearchLocationData] = useState(null);
  const [searchLoading, setSearchLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!search.trim()) {
      setSearchLocationData(null);
      return;
    }

    setSearchLoading(true);

    try {
      const suggestions = await searchPlaces(search);
      setSearchLocationData(suggestions);
    } catch (error) {
      console.error(error);
    } finally {
      setSearchLoading(false);
    }
  };

  const handlePlaceSelect = async (placeId) => {
    try {
      const { latitude, longitude } = await getPlaceDetails(placeId);
      setUserLocation({ latitude, longitude });
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  };

  return (
    <main className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type="text"
          id="search"
          name="search"
          placeholder="Enter area, street name..."
          value={search}
          onChange={(e) => {
            const value = e.target.value;
            setSearch(value);

            if (!value.trim()) {
              setSearchLocationData(null);
            }
          }}
          autoFocus
        />
        <button type="submit">
          <Search size={25} />
        </button>
      </form>

      <div className={styles.suggestion}>
        {searchLoading ? (
          <span className={styles.loading}>Fetching results...</span>
        ) : searchLocationData === null ? null : searchLocationData.length ===
          0 ? (
          <span className={styles.noResult}>No results found</span>
        ) : (
          searchLocationData.map((item) => (
            <button
              className={styles.result}
              key={item.placeId}
              onClick={async () => {
                const success = await handlePlaceSelect(item.placeId);

                if (success) {
                  setShowAddressSearch(false);
                }
              }}
            >
              <span>
                <MapPin size={25} />
              </span>

              <div className={styles.info}>
                <strong>{item.mainText}</strong>
                <span>{item.secondaryText}</span>
              </div>
            </button>
          ))
        )}
      </div>
    </main>
  );
};
