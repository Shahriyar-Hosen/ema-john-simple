import React from "react";
import useProducts from "../../hooks/useProducts";

const Orders = () => {
  const [products] = useProducts();
  return (
    <div>
      <h1>This is Orders: {products.length}</h1>
    </div>
  );
};

export default Orders;
