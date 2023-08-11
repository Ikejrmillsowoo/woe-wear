import { createContext, useState } from "react";

import PRODUCTS from "../shop-data.json";

// the actual value
export const CartContext = createContext({
  cartItems: [],
  isCartOpen: false,
  setIsCartOpen: () => {},
});

//provider value

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const value = { isCartOpen, setIsCartOpen };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
