import React from 'react';
import "./TopSection.css";
import product_image from "../productImage.jpg";

const TopSection = ({ props }) => {
    return (
        <div className="top-section">
            <div className="left-section">
                <div className='top-section-header'>
                    OUR PRODUCTS AND SOLUTIONS
                </div>
                <div className='top-section-body'>
                    The right sales supply chain-link for your business
                </div>
            </div>

            <div className="right-section">
                <img src={product_image} width={500} alt="chainLink" />
            </div>

        </div>
    )
};
export default TopSection;