import "./styles/Global.css";
import { ProductProvider } from "./context/ProductContext";
import { CartProvider } from "./context/CartContext";
import { AddressProvider } from "./context/AddressContext";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router";

export const App = () => {
  return (
    <ProductProvider>
      <CartProvider>
        <AddressProvider>
          <RouterProvider router={router} />
        </AddressProvider>
      </CartProvider>
    </ProductProvider>
  );
};
