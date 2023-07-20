import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from "./IntegrationInputPopUp.module.css";
import InputPopUp from "./IntegrationInputPopUp";

const IntegrationInputPopUp = (props) => {

    return (
        <>
            <div className={styles.loginScreen}>
                <div className={styles.loginScreenHeader}>
                    Enter Business
                </div>

                <div className={styles.form}>
                    <form className={styles.loginForm}>
                        <span className={styles.field}>Business Name</span>
                        <div className={styles.formField}>
                            <input className={styles.formInput}  type="text" name="business" id="business" placeholder="business name " required />
                        </div>
                        <span className={styles.field}>Business Location</span>
                        <div className={styles.formField}>
                            <input className={styles.formInput}  type="text" name="received via" id="received" placeholder="location" required />
                        </div>
                        <span className={styles.field}>Account No</span>
                        <div className={styles.formField}>
                            <input className={styles.formInput} type="text" name="amount" id="amount" placeholder="Account No" required />
                        </div>
                        <span className={styles.field}>Set Identifier</span>
                        <div className={styles.formField}>
                            <input className={styles.formInput} type="text" name="type" id="password" placeholder="Identifier" required />
                        </div>

                        <div className={styles.loginButton}>
                            <button className={styles.submitButton} onClick={()=>{props.setTrigger(false)} }type="submit">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
};
export default IntegrationInputPopUp;