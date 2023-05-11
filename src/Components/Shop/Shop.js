import React, { useState } from 'react';
import Product from '../Product/Product';
import fakeData from '../../fakeData';
import Cart from '../Cart/Cart';
import './Shop.css'
import OrderReview from '../OrderReview/OrderReview';
const Shop = (props) => {
    const [cart,newCart]=useState([])
    
   const handleClick =(clicked)=>{
       
       newCart([...cart,clicked])
       props.order(cart)
   }
     
   
    return (
        <div className='shop' > 
            <div className='b1'>
            {
                fakeData.map((product)=><Product key={product.key} product={product} handleClick={handleClick} ></Product>)
            }

            </div >
            <div className='c1' ><Cart cart={cart}></Cart></div>

        </div>
          
    );
};

export default Shop;