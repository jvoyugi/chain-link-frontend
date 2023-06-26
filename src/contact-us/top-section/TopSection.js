import React from 'react';
import styles from "./TopSection.module.css";
import { LeftSide } from './LeftSide';
import { RightSide } from './RightSide';


const TopSection = () => {
    return (
        <div className={styles.topSection}>
                <LeftSide />
                <RightSide />
        </div>
    )
};
export default TopSection;