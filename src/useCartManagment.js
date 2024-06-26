import { useEffect, useState } from "react";

const useCart = () => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState({
    total: 0,
    originalPrice: 0,
    savings: 0,
    shipping: 0,
  });

  const addItem = (item, num) => {
    if (cart.filter((prod) => prod.item["Handle"] === item.Handle).length) {
      const res = cart.map((prod) => {
        if (prod?.item["Handle"] === item.Handle) prod.num = prod.num + num;
        return prod;
      });
      console.log(res);
      setCart([...res]);
      localStorage.setItem("cart", JSON.stringify([...res]));
    } else {
      setCart((prevCart) => [...prevCart, { item: item, num: num }]);
      localStorage.setItem(
        "cart",
        JSON.stringify([...cart, { item: item, num: num }])
      );
    }
  };

  const removeItem = (itemId) => {
    setCart((prevCart) =>
      prevCart.filter((prod) => prod.item.Handle !== itemId)
    );
    localStorage.setItem(
      "cart",
      JSON.stringify(cart.filter((prod) => prod.item.Handle !== itemId))
    );
  };

  const clearCart = () => {
    setCart([...[]]);
    localStorage.removeItem("cart");
  };

  const getCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart"));
    if (cart) {
      setCart(cart);
    }
  };

  const getPrice = (cart) => {
    let res = {
      total: 0,
      originalPrice: 0,
      savings: 0,
      shipping: 0,
    };
    cart?.map((prod) => {
      res = {
        ...res,
        total: (res.total + prod.item["Variant Price"]) * prod.num,
        originalPrice:
          (res.originalPrice + prod.item["Variant Compare At Price"]) *
          prod.num,
        savings:
          (res.originalPrice + prod.item["Variant Compare At Price"]) *
            prod.num -
          (res.total + prod.item["Variant Price"]) * prod.num,
        shipping: 0,
      };
    });
    setTotal({ ...res });
  };

  const addNumProduct = (itemId) => {
    const res = cart.map((prod) => {
      if (prod?.item["Handle"] === itemId) prod.num = prod.num + 1;
      return prod;
    });
    setCart([...res]);
    localStorage.setItem("cart", JSON.stringify([...res]));
  };

  const removeNumProduct = (itemId) => {
    const res = cart.map((prod) => {
      if (prod?.item["Handle"] === itemId && prod.num - 1 > 0)
        prod.num = prod.num - 1;
      return prod;
    });
    setCart([...res]);
    localStorage.setItem("cart", JSON.stringify([...res]));
  };

  useEffect(() => {
    getPrice(cart);
  }, [cart]);

  useEffect(() => {
    getCart();
  }, []);

  return {
    cart,
    cartLength: cart.length,
    addItem,
    removeItem,
    clearCart,
    removeNumProduct,
    addNumProduct,
    total,
  };
};

export default useCart;
