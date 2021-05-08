import React from 'react';
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from "../assets/crown.svg";
import "./header.style.scss";

const Header = ()=>(
    <div className="header-container">
        <Link className="logo-container" to="/">
            <Logo/>
        </Link>
        <div className="options">
            <Link className="option" to="/shop">SHOP</Link>
            <Link className="option" to="/contactUs">CONTACT</Link>
        </div>
    </div>
)
export default Header;