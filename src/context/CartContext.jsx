import React, { createContext, useEffect, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [totalItems, setTotalItems] = useState(0);

  // Load cart data from local storage on component mount
  useEffect(() => {
    const cartData = JSON.parse(localStorage.getItem("order"));
    if (cartData) {
      setCartItems(cartData.items);
      setTotalItems(cartData.items.length);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cartData", JSON.stringify({ cartItems, totalItems }));
  }, [cartItems, totalItems]);

  useEffect(() => {
    const totalItemsCount = cartItems?.length || 0;
    setTotalItems(totalItemsCount);
  }, [cartItems]);

  const addToCart = (product) => {
    setCartItems([...cartItems, { ...product, quantity: 1 }]);
  };

  const removeFromCart = (itemIndex) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems.splice(itemIndex, 1);
    setCartItems(updatedCartItems);
  };

  return (
    <CartContext.Provider
      value={{ cartItems, totalItems, addToCart, removeFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
