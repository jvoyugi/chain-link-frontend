import React from 'react';
import styles from "./MidSection.module.css";
import { LeftSide } from './LeftSide';
import { RightSide } from './RightSide';


const MidSection = () => {
    return (
        <div className={styles.contactPage}>
            <div className={styles.pageHeader}>
                Get In Touch
                <div className={styles.underline}></div>
            </div>
            <div className={styles.mainContent}>
                <LeftSide />
                <RightSide />
            </div>
        </div>
    )
};
export default MidSection;