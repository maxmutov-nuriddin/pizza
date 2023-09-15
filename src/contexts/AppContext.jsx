/* eslint-disable react/prop-types */
import { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const cartJson = localStorage.getItem("cart");
  const [values, setValues] = useState(JSON.parse(cartJson) || []);

  const state = { values, setValues };


  return (
    <AppContext.Provider value={state}>
      {children}
    </AppContext.Provider>
  );
};