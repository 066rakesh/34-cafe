import toast from "react-hot-toast";

export const handleApiError = (error) => {
  if (error.response) {
    toast.error(error.response.data.message);
  } else if (error.request) {
    toast.error("Unable to connect. Please try again.");
  } else {
    toast.error("Something went wrong");
  }
};
