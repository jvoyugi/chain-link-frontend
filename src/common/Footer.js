import React from "react";
import logo from './image.svg';
import styles from './Footer.module.css';
import headerStyles from "./Nav.module.css"

const Footer = () => {
    return (<>
        <div className={styles.footer}>
            <div className={styles.footerColumns}>
                <div className={styles.footerColumn}>
                    <div className={styles.footerHeader}>
                        Company
                    </div>
                    <div className={styles.footerLink}>
                        About
                    </div>
                    <div className={styles.footerLink}>
                        Affiliate
                    </div>
                    <div className={styles.footerLink}>
                        Careers & Culture
                    </div>
                    <div className={styles.footerLink}>
                        Blog
                    </div>
                    <div className={styles.footerLink}>
                        Press
                    </div>
                </div>
                <div className={styles.footerColumn}>
                    <div className={styles.footerHeader}>
                        About Us
                    </div>
                    <div className={styles.footerLink}>
                        Support Center
                    </div>
                    <div className={styles.footerLink}>
                        Customer Support
                    </div>
                    <div className={styles.footerLink}>
                        About Us
                    </div>
                    <div className={styles.footerLink}>
                        Copyright
                    </div>
                    <div className={styles.footerLink}>
                        Popular Campaign
                    </div>
                </div>
                <div className={styles.footerColumn}>
                    <div className={styles.footerHeader}>
                        Our Information
                    </div>
                    <div className={styles.footerLink}>
                        Return Policy
                    </div>
                    <div className={styles.footerLink}>
                        Privacy Policy
                    </div>
                    <div className={styles.footerLink}>
                        Terms & Conditions
                    </div>
                    <div className={styles.footerLink}>
                        Site Map
                    </div>
                    <div className={styles.footerLink}>
                        Store Hours
                    </div>
                </div>
                <div className={styles.footerColumn}>
                    <div className={styles.footerHeader}>
                        My Account
                    </div>
                    <div className={styles.footerLink}>
                        Press Inquiries
                    </div>
                    <div className={styles.footerLink}>
                        Social Media
                    </div>
                    <div className={styles.footerLink}>
                        Directories
                    </div>
                    <div className={styles.footerLink}>
                        Images & B-roll
                    </div>
                    <div className={styles.footerLink}>
                        Permissions
                    </div>
                </div>
                <div className={styles.footerColumn}>
                    <div className={styles.footerHeader}>
                        Policy
                    </div>
                    <div className={styles.footerLink}>
                        Application Security
                    </div>
                    <div className={styles.footerLink}>
                        Software Principles
                    </div>
                    <div className={styles.footerLink}>
                        Unwanted Software Policy
                    </div>
                    <div className={styles.footerLink}>
                        Responsible Supply Chain
                    </div>
                </div>
            </div>
            <div className={styles.footerHr}></div>
            <div className={styles.footerColumns}>
                <div className={headerStyles.homeLink}>
                    <img src={logo} alt="Logo" className={headerStyles.logo} />
                    ChainLink
                </div>
                <div className={styles.copyright}>
                    Copyright {new Date().getFullYear()}
                </div>
                <div className={styles.bottomFooterLinks}>
                    <div className={styles.bottomFooterLink}>Home</div>
                    <div className={styles.bottomFooterLink}>Advertise</div>
                    <div className={styles.bottomFooterLink}>Support</div>
                    <div className={styles.bottomFooterLink}>Marketing</div>
                    <div className={styles.bottomFooterLink}>FAQ</div>
                </div>
            </div>
        </div>
    </>)
};
export default Footer;