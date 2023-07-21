import React, { useState } from 'react';
import styles from "./EditPopUp.module.css";

const EditPopUp= (props) => {

    return (
        <>
            <div className={styles.loginScreen}>
                <div className={styles.loginScreenHeader}>
                   Edit Entry
                </div>

                <div className={styles.form}>
                    <form className={styles.loginForm}>
                        <span className={styles.field}>Description</span>
                        <div className={styles.formField}>
                            <input className={styles.formInput}  type="text" name="business" id="business" placeholder="description" required />
                        </div>
                        <span className={styles.field}>Amount</span>
                        <div className={styles.formField}>
                            <input className={styles.formInput}  type="text" name="received via" id="received" placeholder="amount" required />
                        </div>
                        <span className={styles.field}>Status</span>
                        <div className={styles.formField}>
                            <input className={styles.formInput} type="text" name="amount" id="amount" placeholder="status" required />
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

export default EditPopUp;