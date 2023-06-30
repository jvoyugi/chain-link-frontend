import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./BottomSection.css";
import solution from "../theSolution.jpg"

import styles from './BottomSection.css';
import benefit1 from "../pic.jpg"
import benefit2 from "../pic5.jpg"
import benefit3 from "../pic2.jpg"

const BottomSection = ({ props }) => {
    return (
        <>
            <div className="container mx-auto py-5  ">
                    <div className="text-center pt-3">
                        <div className="row-header">
                            Meet the Exciting Features of our Solution
                            <div className='underline'></div>
                        </div>
                    </div>
                    <div className="row gy-5 d-flex align-items-center justify-content-evenly mt-0 BottomSectionRow">
                        <div className="col-md-4 col-lg-3 text-center">
                            <div className="box_border position-relative rounded pt-5 pb-3 px-3 borderBottom shadow">
                                <div className="shp"></div>
                                <p className="mb-2 mt-4">All in One Tracker</p>
                                <p className="text-muted text-left text-xl-center text-lg-center">Track your business income and expenditure real time either from legacy systems or mpesa or bank.</p>
                            </div>
                        </div>
                        <div className="col-md-4 col-lg-3 text-center">
                            <div className="box_border position-relative rounded pt-5 pb-3 px-3 borderBottom shadow">
                                <div className="shp"></div>
                                <p className="mb-2 mt-4">Real-time Dashboards</p>
                                <p className="text-muted text-left text-xl-center text-lg-center">Avoid money loss  when transacting with different accounts by having a common real-time view</p>
                            </div>
                        </div>
                        <div className="col-md-4 col-lg-3 text-center">
                            <div className="box_border position-relative rounded pt-5 pb-3 px-3 borderBottom shadow">
                                <div className="shp"></div>
                                <p className="mb-2 mt-4">Multiple interfaces</p>
                                <p className="text-muted text-left text-xl-center text-lg-center">Track your sales , debts and expenditures with ease from both mobile and web tools</p>
                            </div>
                        </div>
                    </div>


        </div>

            <section className="sec_2 flex">
                <div className="sec_bg py-5">
                    <div className="container d-flex justify-content-center align-items-center ">
                        <div className=" col-sm-9 col-sm-6 text-center py-3">
                            <p className="display-6 mb-1 text-white">Automatic tracker for your expenditure, debts and sales</p>
                            <img className="image-fluid py-3" alt="brand" width="40%" src={solution} />
                            <p className="text-white lead">Your sales supply chain link</p>
                        </div>
                    </div>
                </div>
            </section>



        </>


    )
};
export default BottomSection;