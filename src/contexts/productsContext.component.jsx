import { createContext, useState, useEffect } from "react";

import PRODUCTS from "../shop-data.json";

// import {
//   createUserDocumentFromAuth,
//   onAuthStateChangedListener,
//   signOutUser,
// } from "../utils/firebase/firebase.utils";

// the actual value
export const ProductsContext = createContext({
  products: [],
});

//provider value

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState(PRODUCTS);
  const value = { products };

  // signOutUser();

  //   useEffect(() => {
  //     const unsubscribe = onAuthStateChangedListener((product) => {
  //       if (product) {
  //         createUserDocumentFromAuth(product);
  //       }
  //       setCurrentUser(product);
  //     });

  //     return unsubscribe;
  //   }, []);

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
