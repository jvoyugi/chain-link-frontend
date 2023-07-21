import React, { useState, useEffect } from "react";
import styles from "./SideBar.module.css";
import navStyles from "../Nav.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import { BsFillHouseFill, BsPersonFill, BsPencil, BsPaperclip, BsFillCloudPlusFill, BsFillDatabaseFill, BsPower } from "react-icons/bs";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import logo from "../image.svg";

const HamburgerSideBar = ({ navLinkItem }) => {
    const [hamburgerMenuVisibility, setHamburgerMenuVisibility] = useState(false);

    const toggleVisibility = () => setHamburgerMenuVisibility(!hamburgerMenuVisibility);
    const activeColor = "#02073E";
    const inactiveColor = "#FFFFFF";

    return (
        <>
            <div className={styles.homeBar}>
                <div className={navStyles.homeLink}>
                    <img src={logo} alt="Logo" className={styles.logo} />
                    ChainLink
                </div>
                <div className={styles.hamBurgerSidebarIcon}>
                    <FontAwesomeIcon icon={hamburgerMenuVisibility ? faXmark : faBars} size="2xl" onClick={toggleVisibility} style={{ cursor: "pointer" }} />
                </div>
            </div>
            {hamburgerMenuVisibility &&
            <div className={styles.hamBurgerSidebarMenu}>
                <div className={styles.hamBurgerSidebarNavLinks}>
                        <Link to="/portal/dashboard" className={navStyles.hamburgerNavLinkItem} style={{ color: navLinkItem === "dashboard" ? activeColor : inactiveColor }}><BsFillHouseFill /> DASHBOARD</Link>
                    <br />
                        <Link to="/portal/business" className={navStyles.hamburgerNavLinkItem} style={{ color: navLinkItem === "business" ? activeColor : inactiveColor }}><BsFillCloudPlusFill /> BUSINESSES</Link>
                    <br />
                        <Link to="/portal/inputs" className={navStyles.hamburgerNavLinkItem} style={{ color: navLinkItem === "inputs" ? activeColor : inactiveColor }}><BsPencil /> TRANSACTIONS</Link>
                    <br />
                        <Link to="/other" className={navStyles.hamburgerNavLinkItem} style={{ color: navLinkItem === "other" ? activeColor : inactiveColor }} ><BsPaperclip /> UPDATES</Link>
                    <br />
                        <Link to="/other" className={navStyles.hamburgerNavLinkItem} style={{ color: navLinkItem === "other" ? activeColor : inactiveColor }} ><BsFillDatabaseFill /> INVENTORY</Link>
                    <br />
                        <Link to="/users" className={navStyles.hamburgerNavLinkItem} style={{ color: navLinkItem === "users" ? activeColor : inactiveColor }}><BsPersonFill /> USERS</Link>
                    <br />
                    <button className={styles.hamburgerNavButtonItem}><BsPower /> LOGOUT</button>
                </div>
            </div>}
        </>
    )
}


const DesktopSideBar = ({ navLinkItem }) => {
    const activeColor = "#2CB34A";
    const inactiveColor = "#02073E";
    return (
        <>
            <div className={styles.homeBar}>
                <div className={styles.homeLink}>
                    <img src={logo} alt="Logo" className={styles.logo} />
                    ChainLink
                </div>
            </div>
            <div className={styles.sidebar}>
                <Link to="/portal/dashboard" style={{ color: navLinkItem === "dashboard" ? activeColor : inactiveColor }}><BsFillHouseFill /> DASHBOARD</Link>
                <Link to="/portal/business" style={{ color: navLinkItem === "business" ? activeColor : inactiveColor }}><BsFillCloudPlusFill /> BUSINESSES</Link>
                <Link to="/portal/inputs" style={{ color: navLinkItem === "inputs" ? activeColor : inactiveColor }}><BsPencil /> TRANSACTIONS</Link>
                <Link to="/other" style={{ color: navLinkItem === "other" ? activeColor : inactiveColor }} ><BsPaperclip /> UPDATES</Link>
                <Link to="/other" style={{ color: navLinkItem === "other" ? activeColor : inactiveColor }} ><BsFillDatabaseFill /> INVENTORY</Link>
                <Link to="/users" style={{ color: navLinkItem === "users" ? activeColor : inactiveColor }}><BsPersonFill /> USERS</Link>
                <button className={styles.logoutButton}><BsPower /> LOGOUT</button>
            </div>
        </>
    )
};

const SideBar = ({ navLinkItem }) => {
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
            {windowSize > 950 ? <DesktopSideBar navLinkItem={navLinkItem} /> : <HamburgerSideBar navLinkItem={navLinkItem} />}
        </div>
    )
}

export default SideBar;