import React from 'react';
import './Cart.css';

const Cart = ({cart}) => {

    let total = 0;
    let shipping = 0;
    let tax = 0;
    for (const product of cart) {
        total = total + product.price
        shipping = shipping + product.shipping
        tax = parseFloat(total * 0.1).toFixed(2);

        console.log(product);
    }
    return (
        <div className='cart'>
            <h3>Order summary</h3>
            <p>Selected Items: {cart.length}</p>
            <p>Total Price: $ {total}</p>
            <p>Total Shipping Charge: $ {shipping}</p>
            <p>Tax: $ {tax}</p>
            <h4>Grand Total: </h4>
        </div>
    );
};

export default Cart;