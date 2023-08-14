import { createContext, useState, useEffect } from "react";

import PRODUCTS from "../shop-data.json";

// the actual value
export const ProductsContext = createContext({
  products: [],
});

//provider value

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState(PRODUCTS);
  const value = { products };

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
