import React, { useState, useEffect } from "react";
import logo from './image.svg';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import styles from './Nav.module.css';

const HamburgerNavBar = ({ navLinkItem }) => {
    const [hamburgerMenuVisibility, setHamburgerMenuVisibility] = useState(false);

    const toggleVisibility = () => setHamburgerMenuVisibility(!hamburgerMenuVisibility);
    const activeColor = "#02073E";
    const inactiveColor = "#FFFFFF";

    return (
        <>
            <div className={styles.hamBurgerIcon}>
                <FontAwesomeIcon icon={faBars} size="2xl" onClick={toggleVisibility} style={{ cursor: "pointer" }} />
            </div>
            {hamburgerMenuVisibility &&
                <div className={styles.hamburgerMenu}>
                    <div className={styles.hamburgerMenuClose}>
                        <FontAwesomeIcon icon={faXmark} onClick={toggleVisibility} size="xl" style={{ cursor: "pointer" }} />
                    </div>
                    <div className={styles.hamburgerNavLinks}>
                        <Link to="/" className={styles.hamburgerNavLinkItem} style={{ color: navLinkItem === "home" ? activeColor : inactiveColor }}>Home</Link>
                        <br />
                        <Link to="/about" className={styles.hamburgerNavLinkItem} style={{ color: navLinkItem === "about" ? activeColor : inactiveColor }}>About us</Link>
                        <br />
                        <Link to="/solutions" className={styles.hamburgerNavLinkItem} style={{ color: navLinkItem === "solutions" ? activeColor : inactiveColor }}>Our solutions</Link>
                        <br />
                        <Link to="/contact" className={styles.hamburgerNavLinkItem} style={{ color: navLinkItem === "contact" ? activeColor : inactiveColor }}>Contact us</Link>
                        <br />
                        <Link to="/login" className={styles.hamburgerNavLinkItem} style={{ color: navLinkItem === "login" ? activeColor : inactiveColor }}>Login</Link>
                    </div>
                </div>}
        </>
    )
}

const NavBar = ({ navLinkItem }) => {
    return (
        <>
            <div className={styles.navLinks}>
                <Link to="/" className={styles.navLinkItem} style={{ color: navLinkItem === "home" ? "#2CB34A" : "#02073E" }}>Home</Link>
                <Link to="/about" className={styles.navLinkItem} style={{ color: navLinkItem === "about" ? "#2CB34A" : "#02073E" }}>About us</Link>
                <Link to="/solutions" className={styles.navLinkItem} style={{ color: navLinkItem === "solutions" ? "#2CB34A" : "#02073E" }}>Our solutions</Link>
                <Link to="/contact" className={styles.navLinkItem} style={{ color: navLinkItem === "contact" ? "#2CB34A" : "#02073E" }}>Contact us</Link>
            </div>
            <div className={styles.navbarLoginLink}>
                <button type="button" className={styles.navbarLoginButton}>Login</button>
            </div>
        </>
    )
}

const Nav = ({ navLinkItem }) => {
    const [windowSize, setWindowSize] = useState(window.innerWidth);

    useEffect(() => {
        function handleWindowResize() {
            setWindowSize(window.innerWidth);
        }
        window.addEventListener('resize', handleWindowResize);
        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, []);

    return (
        <div className={styles.nav}>
            <div className={styles.homeLink}>
                <img src={logo} alt="Logo" className={styles.logo} />
                ChainLink
            </div>
            {windowSize > 800 ? <NavBar navLinkItem={navLinkItem} /> : <HamburgerNavBar navLinkItem={navLinkItem} />}
        </div>
    )
}
export default Nav;