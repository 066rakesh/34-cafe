import axios from "axios";

const getAddressComponent = (components, type) => {
  const component = components.find((item) => item.types?.includes(type));

  return component?.longText || "";
};

export const reverseGeocode = async ({ latitude, longitude }) => {
  try {
    const response = await axios.get(
      `https://geocode.googleapis.com/v4/geocode/location/${latitude},${longitude}`,
      {
        headers: {
          "X-Goog-Api-Key": process.env.GOOGLE_MAPS_API_KEY,
        },
      }
    );

    const results = response.data?.results;

    if (!results?.length) return null;

    const result =
      results.find((item) => item.granularity === "ROOFTOP") || results[0];

    const components = result.addressComponents || [];

    const road = getAddressComponent(components, "route");

    const area =
      getAddressComponent(components, "sublocality") ||
      getAddressComponent(components, "sublocality_level_1") ||
      getAddressComponent(components, "neighborhood");

    const city = getAddressComponent(components, "locality");

    const state = getAddressComponent(
      components,
      "administrative_area_level_1"
    );

    const pincode = getAddressComponent(components, "postal_code");

    const address = [road, area, city, state, pincode]
      .filter(Boolean)
      .join(", ");

    return {
      address,
      pincode,
      city,
      state,
    };
  } catch (error) {
    console.error("Google Geocoding API error:", error);
    throw error;
  }
};
