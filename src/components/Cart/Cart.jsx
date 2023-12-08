import React from 'react';
import './Cart.css'

const Cart = ({ cart }) => {
    // const cart = props.cart; option 1
    // const{cart}=props; option 2
    let totalPrice = 0;
    let totalShipping = 0;
    let totalQuantity = 0
    for (const product of cart) {
        // if (product.quantity === 0) {
        //     product.quantity = 1;
        // }
        totalPrice = totalPrice + product.price * product.quantity;
        totalShipping = totalShipping + product.shipping;
        totalQuantity = totalQuantity + product.quantity;

    }

    const tax = totalPrice * 7 / 100;

    const grandTotal = totalPrice + totalShipping + tax;

    return (
        <div className='cart'>
            <h4>Order Cart</h4>
            <p>Order Summary : {totalQuantity}</p>
            <p>Total Price :${totalPrice}</p>
            <p>Total Shopping Charge :${totalShipping}</p>
            <p>Tax :${tax.toFixed(2)}</p>
            <h4>Grand Price :${grandTotal.toFixed(2)}</h4>

        </div>
    );
};

export default Cart;