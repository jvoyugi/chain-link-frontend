import React from "react";
import styles from "./MidSection.module.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding, faEnvelope, faPhoneVolume } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

export const LeftSide = () => {
    return (
        <div className={styles.section}>
            <div className={styles.sectionHeader}>
                We are looking forward to get a review
            </div>
            <div className={styles.sectionBody}>
                Our solution allows you to track expenses, manage debts,
                track inventory among others. We'll even give a summary of
                your business performance! Try it today.
            </div>
            <div className={styles.sectionFooter}>
                <div className={styles.sectionFooterRow}>
                    <span className={styles.icon}>
                        <FontAwesomeIcon icon={faBuilding} />
                    </span>
                    <br />
                    N<sup>th</sup> floor, <br />
                    Times Tower,<br />
                    Haile Selassie Ave., <br />
                    Nairobi,Kenya
                </div>
                <div className={styles.sectionFooterRow}>
                    <span className={styles.icon}>
                        <FontAwesomeIcon icon={faPhoneVolume} />
                    </span>
                    <br />
                    Mobile: +254 712 345 678
                    <br />
                    Tel: 020 123 5678
                </div>
                <div className={styles.sectionFooterRow}>
                    <span className={styles.icon}>
                        <FontAwesomeIcon icon={faEnvelope} />
                    </span>
                    <br />
                    Email: hello@chain-link.co.ke
                </div>
            </div>
            <div className={styles.sectionFooterIcons}>
                <div className={styles.icon}>
                    <span className={styles.footerIcon}><FontAwesomeIcon icon={faYoutube} size='2xl' /></span>
                </div>
                <div className={styles.icon}>
                    <span className={styles.footerIcon}><FontAwesomeIcon icon={faInstagram} size='2xl' /></span>
                </div>
                <div className={styles.icon}>
                    <span className={styles.footerIcon}><FontAwesomeIcon icon={faFacebookF} size='2xl' /></span>
                </div>
                <div className={styles.icon}>
                    <span className={styles.footerIcon}><FontAwesomeIcon icon={faTwitter} size='2xl' /></span>
                </div>
            </div>
        </div>
    )
}