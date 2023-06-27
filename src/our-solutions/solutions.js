import React from 'react';

import Nav from '../common/Nav';

import MidSection from './mid-section/MidSection';
import TopSection from './top-section/TopSection';
import BottomSection from "./bottom-section/BottomSection";
import Footer from '../common/Footer';


const ContactUs = () => {
    return (
        <>
            <Nav/>
            <TopSection />
            <MidSection />
            <BottomSection/>
            <Footer/>
        </>
    )
};
export default ContactUs;