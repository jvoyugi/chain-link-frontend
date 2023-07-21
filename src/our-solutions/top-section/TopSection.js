import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./TopSection.css";
import product_image from "../productImage.jpg";

const TopSection = ({ props }) => {
    return (
        <>
        <section className="p-1 text-center text-sm-start top">
            <div className="container">
                <div className="d-sm-flex align-items-center justify-content-between">
                    <div className="intro-text1 my-5 p-1">
                        <h1>
                            OUR  <span className="solutions_text">PRODUCTS</span>  AND <span className="solutions_text">SOLUTIONS </span>
                        </h1>

                        <div className='lead intro-text1 justify-content-between'>
                            The right sales supply chain-link for your business
                        </div>
                </div>

                    <img src={product_image} className="img-fluid mb-2 d-sm-block rounded custom-image"  alt="chainLink" />
            </div>
        </div>
        </section>
        </>
    )
};
export default TopSection;