import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import logo from './image.svg';
import styles from "./Nav.module.css";
import ContactUs from "../contact-us/ContactUs";
import Home from "../landing/Home";

const Nav = () => {

    return (
        <>
            <div className={styles.nav}>
                <Link to="/" style={{ textDecoration: 'none', color: "#262626" }}>
                    <div className={styles.homeLink}>
                        <img src={logo} alt="Logo" class={styles.logo} />
                        ChainLink
                    </div>
                </Link>
                <div className={styles.navLinks}>
                    <div className={styles.navLinkItem}>
                        <Link to="/" style={{ textDecoration: 'none', color: "#262626" }}>Home</Link>
                    </div>
                    <div className={styles.navLinkItem}>
                        About us
                    </div>
                    <div className={styles.navLinkItem}>
                        Our solutions
                    </div>
                    <div className={styles.navLinkItem}>
                        <Link to="/contact-us" style={{ textDecoration: 'none', color: "#262626" }}>Contact Us</Link>
                    </div>
                </div>
                <div className={styles.navLinkItem}>
                    <button type="button" class={styles.navbarLoginButton}>Login</button>
                </div>
            </div>
            <Routes>
                <Route exact path="/contact-us" element={<ContactUs />} />
                <Route exact path="/" element={<Home />} />
            </Routes>
        </>
    )
}

export default Nav;