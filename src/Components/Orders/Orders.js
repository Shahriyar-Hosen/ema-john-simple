import React from "react";
import useCart from "../../hooks/useCart";
import useProducts from "../../hooks/useProducts";

const Orders = () => {
  const [products] = useProducts();
  const [cart, setCart] = useCart(products)
  return (
    <div>
      <h1>This is Orders: {products.length}</h1>
      <h1>This is Orders: {cart.length}</h1>
    </div>
  );
};

export default Orders;
