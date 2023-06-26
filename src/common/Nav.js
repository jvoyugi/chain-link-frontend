import React from "react";
import {
    Routes,
    Route,
    Link
} from "react-router-dom";
import logo from './image.svg';
import './nav.css';
import ContactUs from "../contact-us/ContactUs";

const Nav = () => {

    return (
        <>
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
                        <Link to="/contact-us" style={{ textDecoration: 'none', color: "#262626" }}>Contact Us</Link>
                    </div>
                </div>
                <div className="navbar-login-link">
                    <button type="button" class="navbar-login-button">Login</button>
                </div>
            </div>
            <Routes>
                <Route exact path="/contact-us" element={<ContactUs />} />
            </Routes>
        </>
    )
}

export default Nav;