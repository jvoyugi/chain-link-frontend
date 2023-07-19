import React, { useState } from 'react';
import styles from "./DeletePopUp.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const DeletePopUp = (props) => {

    return (
        <>
            <div className={styles.loginScreen}>
                <div className={styles.loginScreenHeader}>
                    Delete Entry
                </div>

                <div className={styles.form}>
                    <span className={styles.field} >Are you sure you want to delete?</span>
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

export default DeletePopUp;