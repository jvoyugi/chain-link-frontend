import React from "react";
import logo from './image.svg';
import './nav.css';

const Nav = () => {
    return (
        <div className="nav">
            <div className="home-link">
                <img src={logo} alt="Logo" class="logo" />
                ChainLink
            </div>
            <div className="nav-links">
                <div className="nav-link-item">
                    Home
                </div>
                <div className="nav-link-item">
                    About us
                </div>
                <div className="nav-link-item">
                    Our solutions
                </div>
                <div className="nav-link-item">
                    Contact us
                </div>
            </div>
            <div className="navbar-login-link">
                <button type="button" class="navbar-login-button">Login</button>
            </div>
        </div>

    )
}

export default Nav;