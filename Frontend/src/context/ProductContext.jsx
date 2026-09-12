import { createContext, useEffect, useState } from "react";
import { getAllProducts } from "../services/productService";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [productsLoading, setProductsLoading] = useState(false);
  const [productsError, setProductsError] = useState(false);

  const fetchProducts = async () => {
    try {
      setProductsLoading(true);

      const response = await getAllProducts();
      setProducts(response.data.products);
    } catch (error) {
      console.error("Unable to fetch products", error);
      setProductsError(true);
    } finally {
      setProductsLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <ProductContext.Provider
      value={{ products, productsLoading, productsError, fetchProducts }}
    >
      {children}
    </ProductContext.Provider>
  );
};
