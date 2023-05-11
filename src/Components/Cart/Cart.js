import React from 'react';
import './Cart.css'
import {Link} from 'react-router-dom'


const Cart = (props) => {
    
    var cost =0
    var shippingcost=0
    var tax=0
    var total=0
    for(var i=0;i<props.cart.length;i++){
        var product=props.cart[i]
         cost=cost+product.price
         shippingcost = shippingcost+ product.shipping
         tax=cost/10;
         total=cost+tax
    }

    return (
        <div className='cart'>
            <h2>Order Summary</h2>
            <h4>Items ordered:{props.cart.length}</h4>
            <p>Items:${cost.toFixed(2)}</p>
            <p>Shipping & Handling:{shippingcost.toFixed(2)}</p>
            <p>Total before tax:{cost.toFixed(2)}</p>
            <p>Estimated Tax:{tax.toFixed(2)}</p>
            <h4>Order Total:{Math.floor(total.toFixed(2))}</h4>
            <Link to='/review' ><button className='cartBtn'>Proceed</button></Link>
            
        </div>
    );
};

export default Cart;