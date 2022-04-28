import { useEffect, useState } from "react";
import { getStoreCart } from "../utilities/fakedb";

const useCart = () => {
  const [cart, setCart] = useState([]);
  useEffect(() => {
      // Use Post to load some product using keys

    const storedCart = getStoreCart();
    const savedCart = [];
    const keys = Object.keys(storedCart);

    fetch("https://fierce-lake-08822.herokuapp.com/productByKeys", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(keys),
    })
      .then((res) => res.json())
      .then((products) => {
        for (const id in storedCart) {
          const addedProduct = products.find((product) => product._id === id);
          if (addedProduct) {
            const quantity = storedCart[id];
            addedProduct.quantity = quantity;
            savedCart.push(addedProduct);
          }
        }
        setCart(savedCart);
      });
  }, []);

  return [cart, setCart];
};

export default useCart;
