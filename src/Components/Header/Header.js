import React from 'react';
import "./Header.css"
import logo from "../../images/logo.png"
import {Link} from 'react-router-dom'
const Header = () => {
    return (
        <div>
            <div className='header'>
              <img src={logo} alt="" />
            </div>

            <div className='nav'>
                <Link to="/shop" ><a>shop</a></Link>
                <Link to="/review" ><a>Order Review</a></Link>
                <Link to="/manage"><a>Inventory Management</a></Link>
            </div>
        
        </div>
    );
};

export default Header;