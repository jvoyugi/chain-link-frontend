import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import logo from './image.svg';
import { Link } from "react-router-dom";
import './nav.css';

const Nav = () => {
    return (
        <div className="nav">
            <div className="home-link">
                <img src={logo} alt="Logo" class="logo" />
                ChainLink
            </div>
            <div className="nav-links">

                <Link to="/" className="nav-link-item">Home</Link>
                <Link to="/about" className="nav-link-item">About us</Link>
                <Link to="/solutions" className="nav-link-item">Our solutions</Link>
                <Link to="/contact" className="nav-link-item">Contact us</Link>

            </div>
            <div className="navbar-login-link">
                <button type="button" class="navbar-login-button">Login</button>
            </div>
        </div>

    )
}

export default Nav;