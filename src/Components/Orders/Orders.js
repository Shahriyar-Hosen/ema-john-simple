import React from "react";
import useCart from "../../hooks/useCart";
import useProducts from "../../hooks/useProducts";
import Cart from "../Cart/Cart";
import ReviewItem from "../ReviewItem/ReviewItem";

const Orders = () => {
  const [products] = useProducts();
  const [cart] = useCart(products);
  return (
    <div className="shop-container">
      <div className="review-item-container">
        {cart.map((product) => (
          <ReviewItem key={product.id} product={product}></ReviewItem>
        ))}
      </div>
      <div className="cart-container">
        <Cart key={cart.id} cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Orders;
