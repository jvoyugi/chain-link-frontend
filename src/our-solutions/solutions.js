import React from 'react';

import Nav from '../common/Nav';

import MidSection from './mid-section/MidSection';
import TopSection from './top-section/TopSection';
import Location from './location/Location';
import Footer from '../common/Footer';


const ContactUs = () => {
    return (
        <>
            <Nav/>
            <TopSection />
            <MidSection />
            <Location/>
            <Footer/>
        </>
    )
};
export default ContactUs;