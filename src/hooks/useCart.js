import { useEffect, useState } from "react";
import { getStoreCart } from "../utilities/fakedb";

const useCart = () => {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    const storeCart = getStoreCart();
    const saveCart = [];
    const keys = Object.keys(storeCart);
    fetch("", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(keys),
    })
      .then((res) => res.json())
      .then((products) => {
        for (const id in storeCart) {
          const addedProduct = products.find((product) => product._id === id);
          if (addedProduct) {
            const quantity = storeCart[id];
            addedProduct.quantity = quantity;
            saveCart.push(addedProduct);
          }
        }
      });

    setCart(saveCart);
  }, []);

  return [cart, setCart];
};

export default useCart;
