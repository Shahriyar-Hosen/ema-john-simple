import React, { useEffect, useState } from "react";
import { addToDb, getStoreCart } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
// import Product from "../../Product/Product";
import "./Shop.css";

const Shop = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])

    useEffect(() => {
      fetch('products.json')
      .then(res => res.json())
      .then(data => setProducts(data))
    }, [])

    const handleAddToCart = (selectedProduct) => {
      console.log(cart);
      let newCart = [];
      const exists = cart.find((product) => product.id === selectedProduct.id);
      if (!exists) {
        selectedProduct.quantity = 1
        newCart = [...cart, selectedProduct];
      }
      else{
        const rest = cart.filter((product) => product.id !== selectedProduct.id);
        exists.quantity = exists.quantity + 1
        newCart = [...rest, exists]
      }
      setCart(newCart)
      addToDb(selectedProduct.id)
    }
    
    useEffect(() => {
      const storeCart = getStoreCart();
      const savedCart = [];
      for (const id in storeCart) {
        const addedProduct = products.find((product) =>  product.id === id);
        if (addedProduct) {
          const quantity = storeCart[id];
          addedProduct.quantity = quantity
          savedCart.push(addedProduct)
        }
      }
      setCart(savedCart)
    }, [products])
    

  return (
    <div className="shop-container">
      <div className="products-container">
          {
              products.map((product) => <Product 
              key={product.id}
              product={product}
              handleAddToCart={handleAddToCart}
              ></Product>)
          }
      </div>
      <div className="cart-container">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Shop;
