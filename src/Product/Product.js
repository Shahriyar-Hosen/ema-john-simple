import React from "react";
import "./Product.css";

const Product = (props) => {
  const { img, name, price, seller,ratings } = props.product;
  
  return (
    <div className="product">
        <img src={img} alt="" />
        <div className="product-info">
        <p className="product-name">{name}</p>
        <p>Price: $ {price}</p>
        <p>Seller: {seller}</p>
        <p>Ratings: {ratings}</p>
        </div>
        <button onClick={() => props.handleAddToCart(props.product)} type="button" className="btn-cart">Add to cart</button>
    </div>
  );
};

export default Product;
