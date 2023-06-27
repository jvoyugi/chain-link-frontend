import React from 'react';
import "./AboutUs.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from "../common/Nav";
import Footer from "../common/Footer";

const AboutUs = ({ props }) => {
    return (
        <>
            <Nav/>
            <div className="solutions-page">
                <section>
                    <div className="container mx-auto py-5">
                        <div className="mb-4 text-center">
                            <div className="row-header">
                                AboutUs
                                <div className='underline'></div>
                            </div>
                        </div>
                    </div>

                </section>
            </div>
            <Footer/>
        </>
    )
};
export default AboutUs;