import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { addToDb, deleteShoppingCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shope.css'

const Shope = () => {
    const products = useLoaderData();
    const [cart, setCart] = useState([]);

    const handlerAddToCart = (product) => {
        const newCart = [...cart, product]
        setCart(newCart)
        addToDb(product.id)
    }

    const clearCart = () => {
        setCart([]);
        deleteShoppingCart();
    }

    return (
        <div className='shope-container'>
            <div className='product-container'>
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handlerAddToCart={handlerAddToCart}
                    ></Product>)
                }
            </div>
            <div className='order-container'>
                {
                    <Cart
                        clearCart={clearCart}
                        cart={cart}
                    >
                        <Link to={'/orders'}>
                            <button>Review Orders</button>
                        </Link>
                    </Cart>
                }
            </div>
        </div>
    );
};

export default Shope;