import "./styles/Global.css";
import { Toaster } from "react-hot-toast";
import { ProductProvider } from "./context/ProductContext";
import { CartProvider } from "./context/CartContext";
import { AddressProvider } from "./context/AddressContext";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router";

export const App = () => {
  return (
    <>
      <Toaster
        position="top-center"
        toastOptions={{
          duration: 4000,
          style: {
            fontSize: "16px",
          },
        }}
      />
      <ProductProvider>
        <CartProvider>
          <AddressProvider>
            <RouterProvider router={router} />
          </AddressProvider>
        </CartProvider>
      </ProductProvider>
    </>
  );
};
