import React, { useState } from 'react';
import '../Product/Product.css'
const PrintOrder = (props) => {
    console.log(props.remove)
    const [state,setState]=useState(props.print)
    const{img,name,seller,price}=state
    const style={
        height: '400px',
        padding: '10px',
        borderBottom:'1px solid grey'
    }

    return (
           <div style={style} >
                  <div id='pContainer' >
                  <div className='pImg' >
                  <img src={img} alt="" />
               </div>
                  <div className='pDes' >
                  <p>{name}</p>
                  <p>by:${seller}</p>
                  <p>price:${price}</p>
                  <button className='removeBtn' onClick={()=>props.remove(state.key)} >Remove Item</button>
                  </div>
                </div>
        </div>
            
        );
};

export default PrintOrder;