import React from 'react';
import "./BottomSection.css";
import product_image from "../productImage.jpg";

const BottomSection = ({ props }) => {
    return (
        <div className="top-section">
            <div className="left-section">
                <div className='top-section-header'>
                    OUR PRODUCTS AND SOLUTIONS
                </div>
                <div className='top-section-body'>
                    The sales supply chain-link
                </div>
            </div>

            <div className="right-section">
                <img src={product_image} width={500} alt="Application Preview" />
            </div>

        </div>
    )
};
export default BottomSection;