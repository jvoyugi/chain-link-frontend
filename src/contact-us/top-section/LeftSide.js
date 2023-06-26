import React from "react";
import styles from "./TopSection.module.css";
export const LeftSide = () => {
    return (
        <div className={styles.leftSection}>
            <div className={styles.topSectionHeader}>
                Subscribe to our mailing list to get the best offers
            </div>
            <div className={styles.topSectionBody}>
                By subscribing you agree to terms of service
            </div>
            <form>
                <div className={styles.topSectionForm}>
                    <div>
                        <input type="email" className={styles.emailSubscriberInput} placeholder="Enter your email" name='email' id='email' required />
                    </div>
                    <div>
                        <button type="submit" className={styles.subscribeButton}>Subscribe</button>
                    </div>
                </div>
            </form>
        </div>
    )
}