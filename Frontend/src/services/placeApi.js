import axios from "axios";

const GOOGLE_PLACES_BASE_URL = "https://places.googleapis.com/v1/places";

export const searchPlaces = async (query) => {
  const response = await axios.post(
    `${GOOGLE_PLACES_BASE_URL}:autocomplete`,
    {
      input: query,
      includedRegionCodes: ["in"],
    },
    {
      headers: {
        "Content-Type": "application/json",
        "X-Goog-Api-Key": import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
        "X-Goog-FieldMask":
          "suggestions.placePrediction.placeId,suggestions.placePrediction.text,suggestions.placePrediction.structuredFormat",
      },
    },
  );

  const suggestions = response.data.suggestions || [];

  return suggestions.map((item) => {
    const prediction = item.placePrediction;
    return {
      placeId: prediction.placeId,
      mainText: prediction.structuredFormat.mainText.text,
      secondaryText: prediction.structuredFormat.secondaryText.text,
    };
  });
};

export const getPlaceDetails = async (placeId) => {
  const response = await axios.get(`${GOOGLE_PLACES_BASE_URL}/${placeId}`, {
    headers: {
      "X-Goog-Api-Key": import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
      "X-Goog-FieldMask": "location,formattedAddress",
    },
  });

  return response.data.location;
};