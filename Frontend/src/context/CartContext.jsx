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

  const addToCart = (product, variant = null) => {
    setCartItems((currentItems) => {
      const cartItemId = variant ? `${product.id}_${variant.id}` : product.id;

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
          ...product,

          id: cartItemId,
          variantId: variant?.id,
          variantLabel: variant?.label,
          price: variant?.price ?? product.price,

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

  return (
    <CartContext.Provider
      value={{
        cartItems,
        setCartItems,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
