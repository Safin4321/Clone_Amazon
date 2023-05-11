import React from 'react';
import PrintOrder from './PrintOrder';

const OrderReview = (props) => {
    console.log(props.remove)
    
    return (
        <div>
            {
                props.order.map(pd=><PrintOrder  print={pd} remove={props.remove}  ></PrintOrder>)
            }
        </div>
    );
};

export default OrderReview;