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
            <div className="col-md-12">
                <Nav/>
            </div>
                <div className="component" >
            <div className="col-md-12">
                <TopSection />
            </div>
            <div className="col-md-12">
                <BottomSection/>
            </div>
            <div className="col-md-12 mb-5">
                <MidSection />
            </div>
                </div>
            <div className="col-md-12 mt-5">
                <Footer/>
            </div>
            </div>
        </>
    )
};
export default Solutions;