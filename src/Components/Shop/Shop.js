import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useCart from "../../hooks/useCart";
import { addToDb } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  const [cart, setCart] = useCart();
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(15);
  const [products, setProducts] = useState([]);

  // Read / Get Method - Read by user name /  Search query

  useEffect(() => {
    const url = `http://localhost:5000/product/?page=${page}&size=${size}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [page, size]);

  // Pagination
  useEffect(() => {
    fetch("http://localhost:5000/productCount")
      .then((res) => res.json())
      .then((data) => {
        const count = data.count;
        const pages = Math.ceil(count / 10);
        setPageCount(pages);
      });
  }, []);

  const handleAddToCart = (selectedProduct) => {
    console.log(cart);
    let newCart = [];
    const exists = cart.find((product) => product._id === selectedProduct._id);
    if (!exists) {
      selectedProduct.quantity = 1;
      newCart = [...cart, selectedProduct];
    } else {
      const rest = cart.filter((product) => product._id !== selectedProduct._id);
      exists.quantity = exists.quantity + 1;
      newCart = [...rest, exists];
    }
    setCart(newCart);
    addToDb(selectedProduct._id);
  };

  return (
    <div className="shop-container">
      <div>
        <div className="products-container">
          {products.map((product) => (
            <Product
              key={product._id}
              product={product}
              handleAddToCart={handleAddToCart}
            ></Product>
          ))}
        </div>

        {/* Pagination */}
        <div className="pagination">
          {[...Array(pageCount).keys()].map((number) => (
            <button
              key={number}
              onClick={() => setPage(number)}
              className={page === number ? "selected" : ""}
            >
              {number + 1}
            </button>
          ))}

          {/* Page size  */}
          <select onChange={(e) => setSize(e.target.value)}>
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15" selected>15</option>
            <option value="20">20</option>
            <option value="25">25</option>
          </select>
        </div>
      </div>

      <div className="cart-container">
        <Cart cart={cart}>
          <Link to={"/orders"}>
            <button>Review Order</button>
          </Link>
        </Cart>
      </div>
    </div>
  );
};

export default Shop;
