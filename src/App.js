import { useState } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Manage from './Components/ManageInventory/Manage';
import OrderReview from './Components/OrderReview/OrderReview'
import Shop from './Components/Shop/Shop';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [order,setOrder]=useState([])
  const handleOrder=(od)=>{
      setOrder(od)
  }
  const handleRemove=(remove)=>{
   const rem=order.filter(pd=>pd.key !== remove)
   setOrder(rem)
}
  return (
    <div>
      
       <BrowserRouter>
        <Routes>
            < Route path="/" exact element={
            <>
            <Header></Header>
            <Shop order={handleOrder} ></Shop>
            </>
             } />
            <Route path="/shop" element={<Shop/>} />
            <Route path="/review" element={<OrderReview order={order} remove={handleRemove}></OrderReview> } />
            <Route path="/manage" element={<Manage/>} />


        </Routes>
       </BrowserRouter>
       
       
    </div>
  );
}

export default App;
