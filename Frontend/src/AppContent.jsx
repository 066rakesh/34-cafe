import { Toaster } from "react-hot-toast";
import { CartProvider } from "./context/CartContext";
import { AddressProvider } from "./context/AddressContext";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router";
import { useEffect, useState } from "react";
import { SplashScreen } from "./components/Common/SplashScreen/SplashScreen";

export const AppContent = () => {
  const [showSplash, setShowSplash] = useState(true);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setShowSplash(false);
  //   }, 1500);

  //   return () => clearTimeout(timer);
  // }, []);

  // if (showSplash) {
  //   return <SplashScreen />;
  // }

  return (
    <CartProvider>
      <AddressProvider>
        <Toaster
          toastOptions={{
            duration: 1500,
            position: "top-right",
            style: {
              fontSize: "25px",
            },
            success: {
              iconTheme: {
                primary: "rgb(255, 82, 0)",
                secondary: "#fff",
              },
            },
            error: {
              iconTheme: {
                primary: "rgb(255, 82, 0)",
                secondary: "#fff",
              },
            },
          }}
        />

        <RouterProvider router={router} />
      </AddressProvider>
    </CartProvider>
  );
};