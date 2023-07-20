import React, { useState } from 'react';
import styles from "./IntegrationDeletePopUp.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const IntegrationDeletePopUp= (props) => {

    return (
        <>
            <div className={styles.loginScreen}>
                <div className={styles.loginScreenHeader}>
                    Delete Business
                </div>

                <div className={styles.form}>
                    <span className={styles.field} >Are you sure you want to delete this business?</span>
                    <br />
                    <span>(Click cancel to go back and delete to proceed)</span>
                    <div className="flex row">
                        <div className={styles.loginButton} className="col">
                            <button className={styles.cancelButton} onClick={()=>{props.setTrigger(false)} }type="submit">Cancel</button>
                        </div>
                        <div className={styles.loginButton} className="col">
                            <button className={styles.deleteButton} onClick={()=>{props.setTrigger(false)} }type="submit">Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default IntegrationDeletePopUp;