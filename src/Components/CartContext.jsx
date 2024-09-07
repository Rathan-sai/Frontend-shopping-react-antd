import React, { createContext, useState } from "react";

// Create the context
export const CartContext = createContext();

// Provider component to wrap the app
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Function to add product to the cart
  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};
