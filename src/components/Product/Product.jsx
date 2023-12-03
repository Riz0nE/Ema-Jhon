import React from 'react';
import './Product.css'

const Product = (props) => {
    const { name, ratings, img, price, seller } = props.product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h6>{name}</h6>
                <h6>Price: ${price}</h6>
                <p className='product-manufacture'>Manufacture: {seller}</p>
                <p>Rating : {ratings} Stars</p>
            </div>
            <button className='btn-cart'>Add to Cart</button>




        </div>
    );
};

export default Product;