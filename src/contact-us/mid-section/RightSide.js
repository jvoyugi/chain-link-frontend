import React from "react";
import styles from "./MidSection.module.css";
export const RightSide = ({ props }) => {
    return (
        <div className={styles.section}>
            <div className={styles.formMessage}>
                Leave us a message
            </div>
            <div className={styles.form}>
                <form>
                    <input className={styles.formInput} type="text" name="name" id="name" placeholder="Full name" required />
                    <input className={styles.formInput} type="email" name="email" id="email" placeholder="Email" required />
                    <textarea className={styles.formInput} name="message" id="message" placeholder="Your Message" rows={5} required />
                    <button class={styles.submitButton} type="submit">Send</button>
                </form>
            </div>
        </div>
    )
}