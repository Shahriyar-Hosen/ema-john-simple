import { useEffect, useState } from "react";
import { getStoreCart } from "../utilities/fakedb";


const useCart = (products) => {
    const [cart, setCart] = useState([])
    useEffect(() => {
        const storeCart = getStoreCart();
        const saveCart = [];
        for (const id in storeCart) {
            const addedProduct = products.find((product) => product._id === id);
            if (addedProduct) {
                 const quantity = storeCart[id];
                 addedProduct.quantity = quantity
                 saveCart.push(addedProduct)
            }
        }
        setCart(saveCart)
    }, [products])
    
    return [cart, setCart]
};

export default useCart;