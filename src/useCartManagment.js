import { useState } from "react";

const useCart = () => {
  const [cart, setCart] = useState([]);

  const addItem = (item, num) => {
    setCart((prevCart) => [...prevCart, { item: item, num: num }]);
  };

  const removeItem = (itemId) => {
    setCart((prevCart) => prevCart.filter((item) => item.Handle !== itemId));
  };

  const clearCart = () => {
    setCart([]);
  };

  return {
    cart,
    cartLength: cart.length,
    addItem,
    removeItem,
    clearCart,
  };
};

export default useCart;
