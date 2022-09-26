import React from 'react';
import './Cart.css'

const Cart = ({ cart }) => {
    const [product] = cart
    console.log(cart)
    return (
        <div className='cart-container'>
            <h2>Order Summary</h2>
            <p>Selected Items: {cart.length}</p>
        </div>
    );
};

export default Cart;