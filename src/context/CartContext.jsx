import React, { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const cartData = JSON.parse(localStorage.getItem("cartData"));
    if (cartData) {
      setCartItems(cartData.cartItems);
      setTotalItems(cartData.totalItems);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cartData", JSON.stringify({ cartItems, totalItems }));
  }, [cartItems, totalItems]);

  // useEffect(() => {
  //   const totalItemsCount =
  //     cartItems?.reduce((total, item) => total + item.quantity, 0)
  //   setTotalItems(totalItemsCount);
  // }, [cartItems]);

  useEffect(() => {
    const totalItemsCount = cartItems.length;
    setTotalItems(totalItemsCount);
  }, [cartItems]);

  // const addToCart = (product, quantity) => {
  //   // Check if the product already exists in the cart
  //   const existingProduct = cartItems.find(
  //     (item) =>
  //       item.product_id === product.id &&
  //       item.variation_id === product.variation_id
  //   );

  //   if (existingProduct) {
  //     // If the product exists, increment the quantity
  //     const updatedCartItems = cartItems.map((item) =>
  //       item.product_id === product.id &&
  //       item.variation_id === product.variation_id
  //         ? { ...item, quantity: item.quantity + 1 }
  //         : item
  //     );
  //     setCartItems(updatedCartItems);
  //   } else {
  //     // If the product doesn't exist, add it to the cart with a quantity of 1
  //     setCartItems([...cartItems, { ...product, quantity: 1 }]);
  //   }
  // };

  const addToCart = (product, quantity) => {
    
    // Check if the product already exists in the cart
    const existingProductIndex = cartItems.findIndex(
      (item) =>
        item.product_id === product.product_id &&
        item.variation_id === product.variation_id
    );

    if (existingProductIndex !== -1) {
      // If the product exists, increment the quantity of that item
      const updatedCartItems = [...cartItems];
      if (updatedCartItems[existingProductIndex].quantity !== undefined) {
        updatedCartItems[existingProductIndex].quantity += quantity;
      } else {
        updatedCartItems[existingProductIndex].quantity = quantity;
      }
      setCartItems(updatedCartItems);
      
    } else {
      // If the product doesn't exist, add it to the cart with the given quantity
      setCartItems([...cartItems, { ...product, quantity }]);
    }
  };


 const removeFromCart = (itemIndex) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems.splice(itemIndex, 1);
    setCartItems(updatedCartItems);
  };


  const incrementQuantity = (index) => {
    if (index !== undefined) {
      const updatedCartItems = [...cartItems];
      updatedCartItems[index].quantity += 1;
      setCartItems(updatedCartItems);
    } else {
      setQuantity((prevQuantity) => prevQuantity + 1);
    }
  };

  const decrementQuantity = (index) => {
    if (index !== undefined) {
      const updatedCartItems = [...cartItems];
      if (updatedCartItems[index].quantity > 1) {
        updatedCartItems[index].quantity -= 1;
        setCartItems(updatedCartItems);
      }
    } else {
      if (quantity > 1) {
        setQuantity((prevQuantity) => prevQuantity - 1);
      }
    }
  };
  
  return (
    <CartContext.Provider
      value={{
        cartItems,
        totalItems,
        addToCart,
        removeFromCart,
        incrementQuantity,
        decrementQuantity,
        quantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};

export default CartContext;
