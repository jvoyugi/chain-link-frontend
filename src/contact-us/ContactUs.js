import React from 'react';

import MidSection from './mid-section/MidSection';
import TopSection from './top-section/TopSection';
import Location from './location/Location';
import Footer from '../common/Footer';
import Nav from '../common/Nav';

import styles from "./ContactUs.module.css"


const ContactUs = () => {
    return (
        <div className={styles.contactUs}>
            <Nav navLinkItem="contact"/>
            <TopSection />
            <MidSection />
            <Location/>
            <Footer/>
        </div>
    )
};
export default ContactUs;