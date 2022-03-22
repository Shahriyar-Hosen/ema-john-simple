import React from 'react';

const Cart = ({cart}) => {
    return (
        <div>
            <h3>Order summary</h3>
        <p>Selected items: {cart.length}</p>
        </div>
    );
};

export default Cart;