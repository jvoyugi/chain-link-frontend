import React from "react";
import left_image from '../stock-image-1.jpg'
export const RightSide = ({ props }) => {
    return (
        <div className="right-section">
            <img src={left_image} width={500} alt="Someone in front of a laptop" />
        </div>
    )
}