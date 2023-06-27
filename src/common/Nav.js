import React from "react";
import logo from './image.svg';
import { Link } from "react-router-dom";
import styles from './Nav.module.css';

const Nav = ({navLinkItem} ) => {
    return (
        <div className={styles.nav}>
            <div className={styles.homeLink}>
                <img src={logo} alt="Logo" className={styles.logo} />
                ChainLink
            </div>
            <div className={styles.navLinks}>
                <Link to="/" className={styles.navLinkItem} style={{ color: navLinkItem === "home" ? "#2CB34A" : "#02073E" }}>Home</Link>
                <Link to="/about" className={styles.navLinkItem} style={{ color: navLinkItem === "about" ? "#2CB34A" : "#02073E" }}>About us</Link>
                <Link to="/solutions" className={styles.navLinkItem} style={{ color: navLinkItem === "solutions" ? "#2CB34A" : "#02073E" }}>Our solutions</Link>
                <Link to="/contact" className={styles.navLinkItem} style={{ color: navLinkItem === "contact" ? "#2CB34A" : "#02073E" }}>Contact us</Link>
            </div>
            <div className="navbar-login-link">
                <button type="button" className={styles.navbarLoginButton}>Login</button>
            </div>
        </div>
    )
}

export default Nav;