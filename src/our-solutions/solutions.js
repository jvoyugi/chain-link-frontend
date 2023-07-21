import React from 'react';

import Nav from '../common/Nav';
import MidSection from './mid-section/MidSection';
import TopSection from './top-section/TopSection';
import BottomSection from "./bottom-section/BottomSection";
import Footer from '../common/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

const Solutions = () => {
    return (
        <>
            <div className="grid-container d-flex flex-column" >
            <div className="flex">
                <Nav navLinkItem="solutions"/>
            </div>
            <div className="">
                <TopSection />
            </div>
            <div className="">
                <BottomSection/>
            </div>
            <div className=" mb-5">
                <MidSection />
            </div>
                </div>
            <div className=" mt-5">
                <Footer/>
            </div>
        </>
    )
};
export default Solutions;