import React from "react";
import styles from "./MidSection.module.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding, faEnvelope, faPhoneVolume } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

export const LeftSide = () => {
    return (
        <div className={styles.section}>
            <div className={styles.sectionHeader}>
                We are looking forward to start a project with you
            </div>
            <div className={styles.sectionBody}>
                Our strong team allows us to successfully initiate,
                execute and commission multi-disciplinary projects
                spanning all aspects of engineering. We have a solution for you!
            </div>
            <div>
                <div className={styles.sectionFooter}>
                    <div className={styles.sectionFooterRow}>
                        <span className={styles.icon}>
                            <FontAwesomeIcon icon={faBuilding} />
                        </span>
                        <br />
                        N<sup>th</sup> floor, <br />
                        Times Tower,<br />
                        Haile Selasie Ave., <br />
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
        </div>
    )
}