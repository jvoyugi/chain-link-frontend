import React, { useEffect, useState } from "react";

import SideBar from "./sideBar/SideBar";

import styles from "./Layout.module.css";
import { Navigate } from "react-router-dom";

const Layout = ({ child, navLinkItem, pageTitle }) => {
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

  if (!localStorage.getItem("isLoggedIn")) return <Navigate to="/" />

  return (
    <>
      {windowSize > 950 ?
        <div className={styles.layout}>
          <SideBar navLinkItem={navLinkItem} />
          <div className={styles.child}>
            <div className={styles.pageTitle}>{pageTitle}</div>
            {child}
          </div>
        </div> :
        <>
          <SideBar navLinkItem={navLinkItem} />
          <div className={styles.child}>
            <div className={styles.pageTitle}>{pageTitle}</div>
            {child}
          </div>
        </>
      }
    </>);
}

export default Layout;