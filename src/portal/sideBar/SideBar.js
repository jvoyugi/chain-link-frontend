import React, { useState } from 'react';
import styles from "./SideBar.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from "react-router-dom";

const SideBar = ({ navLinkItem }) => {
    const activeColor = "#2CB34A";
    const inactiveColor = "#02073E";
    return (
        <>
            <div className={styles.sidebar}>
                <Link to="/portal/dashboard" style={{ color: navLinkItem === "dashboard" ? activeColor : inactiveColor }}>Dashboard</Link>
                <Link to="/portal/inputs" style={{ color: navLinkItem === "inputs" ? activeColor : inactiveColor}}>Input</Link>
                <Link to="/Other" style={{ color: navLinkItem === "other" ? activeColor : inactiveColor}} >Other</Link>
                <Link to="/User" style={{ color: navLinkItem === "users" ? activeColor : inactiveColor}}>User Management</Link>
            </div>
        </>
    )
};

export default SideBar;