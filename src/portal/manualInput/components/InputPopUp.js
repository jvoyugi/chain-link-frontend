import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from "./InputPopUp.module.css";

const InputPopUp = (props) => {

    return (
        <>
            <div className={styles.loginScreen}>
                <div className={styles.loginScreenHeader}>
                    Enter your manual Transaction
                </div>

                <div className={styles.form}>
                    <form className={styles.loginForm}>
                        <span className={styles.field}>Business</span>
                        <div className={styles.formField}>
                            <input className={styles.formInput}  type="text" name="business" id="business" placeholder="business" required />
                        </div>
                        <span className={styles.field}>Received via</span>
                        <div className={styles.formField}>
                            <input className={styles.formInput}  type="text" name="received via" id="received" placeholder="received via" required />
                        </div>
                        <span className={styles.field}>Amount</span>
                        <div className={styles.formField}>
                            <input className={styles.formInput} type="text" name="amount" id="amount" placeholder="Amount in ksh" required />
                        </div>
                        <span className={styles.field}>Type</span>
                        <div className={styles.formField}>
                            <input className={styles.formInput} type="text" name="type" id="password" placeholder="Type: Money in, money out, debt" required />
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

export default InputPopUp;