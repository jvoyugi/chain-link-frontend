import React from 'react';
import "./BottomSection.css";

const BottomSection = ({ props }) => {
    return (
        <div className="solutions-page">
            <section>
                <div className="container mx-auto py-5">
                    <div className="mb-4 text-center">
                        <div className="row-header">
                            Meet the Exciting Features of our Solution
                            <div className='underline'></div>
                        </div>
                    </div>
                    <div className="row gy-5 d-flex align-items-center justify-content-evenly mt-0">
                        <div className="col-md-4 col-lg-3 text-center">
                            <div className="box_border position-relative rounded pt-5 pb-3 px-3">
                                <div className="shp"></div>
                                <p className="mb-2 mt-4">Brand Building</p>
                                <p className="text-muted text-left text-xl-center text-lg-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            </div>
                        </div>
                        <div className="col-md-4 col-lg-3 text-center">
                            <div className="box_border position-relative rounded pt-5 pb-3 px-3">
                                <div className="shp"></div>
                                <p className="mb-2 mt-4">Pixel Perfect Designing</p>
                                <p className="text-muted text-left text-xl-center text-lg-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            </div>
                        </div>
                        <div className="col-md-4 col-lg-3 text-center">
                            <div className="box_border position-relative rounded pt-5 pb-3 px-3">
                                <div className="shp"></div>
                                <p className="mb-2 mt-4">Marketing</p>
                                <p className="text-muted text-left text-xl-center text-lg-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>


    )
};
export default BottomSection;