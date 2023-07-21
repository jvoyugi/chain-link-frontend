import React, { useState } from 'react';
import styles from "./SideBar.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from "react-router-dom";
import { BsFillHouseFill, BsPersonFill, BsPencil, BsPaperclip,BsFillCloudPlusFill,BsFillDatabaseFill } from "react-icons/bs";
import logo from "../image.svg";

const SideBar = ({ navLinkItem }) => {


    const activeColor = "#2CB34A";
    const inactiveColor = "#02073E";
    return (
        <>

            <div className={styles.sidebar}>

                <div className={styles.homeLink}>
                    <img src={logo} alt="Logo" className={styles.logo} />
                    ChainLink
                </div>
                <Link to="/portal/dashboard" style={{ color: navLinkItem === "dashboard" ? activeColor : inactiveColor }}><BsFillHouseFill/> DASHBOARD</Link>
                <Link to="/portal/business" style={{ color: navLinkItem === "business" ? activeColor : inactiveColor }}><BsFillCloudPlusFill/> BUSINESSES</Link>
                <Link to="/portal/inputs" style={{ color: navLinkItem === "inputs" ? activeColor : inactiveColor}}><BsPencil /> TRANSACTIONS</Link>
                <Link to="/Other" style={{ color: navLinkItem === "other" ? activeColor : inactiveColor}} ><BsPaperclip/> UPDATES</Link>
                <Link to="/Other" style={{ color: navLinkItem === "other" ? activeColor : inactiveColor}} ><BsFillDatabaseFill/> INVENTORY</Link>
                <Link to="/User" style={{ color: navLinkItem === "users" ? activeColor : inactiveColor}}><BsPersonFill/> USERS</Link>
            </div>
        </>
    )
};

export default SideBar;