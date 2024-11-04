import { createContext, useState } from "react";

export const ListProvider = createContext(null);

const Provider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [wish, setWish] = useState([]);
  const apiValue = {
    cart,
    setCart,
    wish,
    setWish,
  };
  return (
    <>
      <ListProvider.Provider value={apiValue}>{children}</ListProvider.Provider>
    </>
  );
};

export default Provider;
