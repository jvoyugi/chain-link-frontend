import React, { useState } from 'react';
import styles from "./IntegrationEditPopUp.module.css";

const IntegrationEditPopUp= (props) => {

    return (
        <>
            <div className={styles.loginScreen}>
                <div className={styles.loginScreenHeader}>
                    Edit Entry
                </div>

                <div className={styles.form}>
                    <form className={styles.loginForm}>
                        <span className={styles.field}>Business</span>
                        <div className={styles.formField}>
                            <input className={styles.formInput}  type="text" name="business" id="business" placeholder="business" required />
                        </div>
                        <span className={styles.field}>Account No</span>
                        <div className={styles.formField}>
                            <input className={styles.formInput}  type="text" name="received via" id="received" placeholder="account No" required />
                        </div>
                        <span className={styles.field}>Location</span>
                        <div className={styles.formField}>
                            <input className={styles.formInput} type="text" name="amount" id="amount" placeholder="location" required />
                        </div>
                        <span className={styles.field}>Identifier</span>
                        <div className={styles.formField}>
                            <input className={styles.formInput} type="text" name="amount" id="amount" placeholder="identifier" required />
                        </div>
                        <div className={styles.loginButton}>
                            <button className={styles.submitButton} onClick={()=>{props.setTrigger(false)} }type="submit">Edit</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
};

export default IntegrationEditPopUp;