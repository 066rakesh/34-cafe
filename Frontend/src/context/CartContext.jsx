import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem("cart");

    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    const handleLogout = () => setCartItems([]);

    window.addEventListener("auth:logout", handleLogout);
    return () => window.removeEventListener("auth:logout", handleLogout);
  }, []);

  const addToCart = (food, variant = null) => {
    setCartItems((currentItems) => {
      const cartItemId = variant ? `${food._id}_${variant._id}` : food._id;

      const existingItems = currentItems.find((item) => item.id === cartItemId);

      if (existingItems) {
        return currentItems.map((item) =>
          item.id === cartItemId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [
        ...currentItems,
        {
          ...food,

          id: cartItemId,
          variantId: variant?._id,
          variantLabel: variant?.label,
          price: variant?.price ?? food.price,

          quantity: 1,
        },
      ];
    });
  };

  const increaseQuantity = (cartItemId) => {
    setCartItems((currentItems) => {
      return currentItems.map((item) =>
        item.id === cartItemId ? { ...item, quantity: item.quantity + 1 } : item
      );
    });
  };

  const decreaseQuantity = (cartItemId) => {
    setCartItems((currentItems) => {
      return currentItems
        .map((item) =>
          item.id === cartItemId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0);
    });
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        setCartItems,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
