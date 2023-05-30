import React from 'react';
import "./index.css";
import { LeftSide } from './LeftSide';
import { RightSide } from './RightSide';


const TopSection = () => {
    return (
        <div className="top-section">
                <LeftSide />
                <RightSide />
        </div>
    )
};
export default TopSection;