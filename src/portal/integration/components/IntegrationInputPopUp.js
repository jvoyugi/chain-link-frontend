import React, { useState } from 'react';
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import styles from "./IntegrationInputPopUp.module.css";

const IntegrationInputPopUp = (props) => {
    const [businessName, setBusinessName] = useState("");
    const [location, setLocation] = useState("");
    const [accountNumber, setAccountNumber] = useState("");
    const [identifier, setIdentifier] = useState("");

    const handleBusinessName = e => setBusinessName(e.target.value);
    const handleLocation = e => setLocation(e.target.value);
    const handleAccountNumber = e => setAccountNumber(e.target.value);
    const handleIdentifier = e => setIdentifier(e.target.value);

    const handleSubmit = async e => {
        e.preventDefault();
        const payload = {
            businessName: businessName,
            accountNumber: accountNumber,
            location: location,
            identifier: identifier
        };
        await fetch(`${process.env.REACT_APP_API_URL}/api/business`,
            {
                method: "POST",
                mode: "cors",
                credentials: 'include',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload)
            })
            .then(resp => {
                if (resp.ok) {
                    toast.success('Input success', {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });
                    props.setTrigger(false);
                } else {
                    toast.error('Input failed', {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });
                }
            });
    }

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
                            <input className={styles.formInput} onChange={handleBusinessName}  type="text" name="business" id="business" placeholder="business name " required />
                        </div>
                        <span className={styles.field}>Business Location</span>
                        <div className={styles.formField}>
                            <input className={styles.formInput} onChange={handleLocation}  type="text" name="received via" id="received" placeholder="location" required />
                        </div>
                        <span className={styles.field}>Account No</span>
                        <div className={styles.formField}>
                            <input className={styles.formInput} onChange={handleAccountNumber} type="text" name="amount" id="amount" placeholder="Account No" required />
                        </div>
                        <span className={styles.field}>Set Identifier</span>
                        <div className={styles.formField}>
                            <input className={styles.formInput} onChange={handleIdentifier} type="text" name="type" id="password" placeholder="Identifier" required />
                        </div>

                        <div className={styles.loginButton}>
                            <button className={styles.submitButton} onClick={handleSubmit} type="submit">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
};
export default IntegrationInputPopUp;