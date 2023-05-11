import React from 'react';
import "./Product.css"

const Product = (props) => {
    
    
    const {img,name,price,seller,stock}=props.product

    return (
        <div id='container' >
            <div id='pContainer'>
             <div className='pImg' >
                <img src={img} alt="" />
             </div>
             <div className='pDes'>
                  <p>{name}</p>
                  <p>by:{seller}</p>
                  <p>${price}</p>
                  <p>only {stock} left in stock-order soon</p>
                  <button className='cartBtn' onClick={()=>props.handleClick(props.product)} >Add to cart</button>
             </div>
        </div>
         
        </div>
    );
};

export default Product;