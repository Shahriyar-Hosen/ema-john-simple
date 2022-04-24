import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useProducts from "../../hooks/useProducts";
import { addToDb, getStoreCart } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  const [cart, setCart] = useState([]);
  const [products] = useProducts();
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(10);

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
    const exists = cart.find((product) => product.id === selectedProduct.id);
    if (!exists) {
      selectedProduct.quantity = 1;
      newCart = [...cart, selectedProduct];
    } else {
      const rest = cart.filter((product) => product.id !== selectedProduct.id);
      exists.quantity = exists.quantity + 1;
      newCart = [...rest, exists];
    }
    setCart(newCart);
    addToDb(selectedProduct.id);
  };

  useEffect(() => {
    const storeCart = getStoreCart();
    const savedCart = [];
    for (const id in storeCart) {
      const addedProduct = products.find((product) => product.id === id);
      if (addedProduct) {
        const quantity = storeCart[id];
        addedProduct.quantity = quantity;
        savedCart.push(addedProduct);
      }
    }
    setCart(savedCart);
  }, [products]);

  return (
    <div className="shop-container">
      <div>
        <div className="products-container">
          {products.map((product) => (
            <Product
              key={product.id}
              product={product}
              handleAddToCart={handleAddToCart}
            ></Product>
          ))}
        </div>

        {/* Pagination */}
        <div className="pagination">
          {[...Array(pageCount).keys()].map((number) => (
            <button
              onClick={() => setPage(number)}
              className={page === number ? "selected" : ""}
            >
              {number + 1}
            </button>
          ))}

           {/* Page size  */}
        <select onChange={(e) => setSize(e.target.value)}>
          <option value="5">5</option>
          <option value="10" selected>10</option>
          <option value="15">15</option>
          <option value="20">20</option>
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
