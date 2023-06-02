import React from "react";
import logo from './image.svg';
import './footer.css';
const Footer = () => {
    return (<>
        <div className="footer">
            <div className="footer-columns">
                <div className="footer-column">
                    <div className="footer-header">
                        Company
                    </div>
                    <div className="footer-link">
                        About
                    </div>
                    <div className="footer-link">
                        Affiliate
                    </div>
                    <div className="footer-link">
                        Careers & Culture
                    </div>
                    <div className="footer-link">
                        Blog
                    </div>
                    <div className="footer-link">
                        Press
                    </div>
                </div>
                <div className="footer-column">
                    <div className="footer-header">
                        About Us
                    </div>
                    <div className="footer-link">
                        Support Center
                    </div>
                    <div className="footer-link">
                        Customer Support
                    </div>
                    <div className="footer-link">
                        About Us
                    </div>
                    <div className="footer-link">
                        Copyright
                    </div>
                    <div className="footer-link">
                        Popular Campaign
                    </div>
                </div>
                <div className="footer-column">
                    <div className="footer-header">
                        Our Information
                    </div>
                    <div className="footer-link">
                        Return Policy
                    </div>
                    <div className="footer-link">
                        Privacy Policy
                    </div>
                    <div className="footer-link">
                        Terms & Conditions
                    </div>
                    <div className="footer-link">
                        Site Map
                    </div>
                    <div className="footer-link">
                        Store Hours
                    </div>
                </div>
                <div className="footer-column">
                    <div className="footer-header">
                        My Account
                    </div>
                    <div className="footer-link">
                        Press Inquiries
                    </div>
                    <div className="footer-link">
                        Social Media
                    </div>
                    <div className="footer-link">
                        Directories
                    </div>
                    <div className="footer-link">
                        Images & B-roll
                    </div>
                    <div className="footer-link">
                        Permissions
                    </div>
                </div>
                <div className="footer-column">
                    <div className="footer-header">
                        Policy
                    </div>
                    <div className="footer-link">
                        Application Security
                    </div>
                    <div className="footer-link">
                        Software Principles
                    </div>
                    <div className="footer-link">
                        Unwanted Software Policy
                    </div>
                    <div className="footer-link">
                        Responsible Supply Chain
                    </div>
                </div>
            </div>
            <div className="footer-hr"></div>
            <div className="footer-columns">
                <div className="home-link">
                    <img src={logo} alt="Logo" class="logo" />
                    ChainLink
                </div>
                <div className="copyright">
                    Copyright {new Date().getFullYear()}
                </div>
                <div className="bottom-footer-links">
                    <div className="bottom-footer-link">Home</div>
                    <div className="bottom-footer-link">Advertise</div>
                    <div className="bottom-footer-link">Support</div>
                    <div className="bottom-footer-link">Marketing</div>
                    <div className="bottom-footer-link">FAQ</div>
                </div>
            </div>
        </div>
    </>)
}

export default Footer;