import React from "react";
import logo from './image.svg';
import { Link } from "react-router-dom";
import styles from './Nav.module.css';

const Nav = () => {
    return (
        <div className={styles.nav}>
            <div className={styles.homeLink}>
                <img src={logo} alt="Logo" class={styles.logo} /> 
                ChainLink
            </div>
            <div className={styles.navLinks}>
                <Link to="/" className={styles.navLinkItem}>Home</Link>
                <Link to="/about" className={styles.navLinkItem}>About us</Link>
                <Link to="/solutions" className={styles.navLinkItem}>Our solutions</Link>
                <Link to="/contact" className={styles.navLinkItem}>Contact us</Link>
            </div>
            <div className="navbar-login-link">
                <button type="button" class={styles.navbarLoginButton}>Login</button>
            </div>
        </div>
    )
}

export default Nav;