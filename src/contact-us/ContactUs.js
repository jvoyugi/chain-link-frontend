import React from 'react';

import MidSection from './mid-section/MidSection';
import TopSection from './top-section/TopSection';
import Location from './location/Location';
import Footer from '../common/Footer';
import Nav from '../common/Nav';


const ContactUs = () => {
    return (
        <>
            <Nav navLinkItem="contact"/>
            <TopSection />
            <MidSection />
            <Location/>
            <Footer/>
        </>
    )
};
export default ContactUs;