import React, { useState } from 'react';
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import styles from "./IntegrationEditPopUp.module.css";

const IntegrationEditPopUp = (props) => {
    const [identifier, setIdentifier] = useState(props.selectedItem.identifier);
    const [businessName, setBusinessName] = useState(props.selectedItem.businessName);
    const [accountNumber, setAccountNumber] = useState(props.selectedItem.accountNumber);
    const [location, setLocation] = useState(props.selectedItem.location);

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
        await fetch(`${process.env.REACT_APP_API_URL}/api/business/${props.selectedItem._id}`,
            {
                method: "PATCH",
                mode: "cors",
                credentials: 'include',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload)
            })
            .then(resp => {
                if (resp.ok) {
                    toast.success('Update success', {
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
                    Edit Entry
                </div>
                <div className={styles.form}>
                    <form className={styles.loginForm}>
                        <span className={styles.field}>Business</span>
                        <div className={styles.formField}>
                            <input className={styles.formInput} value={businessName} onChange={handleBusinessName} type="text" name="business" id="business" placeholder="business" required />
                        </div>
                        <span className={styles.field}>Account No</span>
                        <div className={styles.formField}>
                            <input className={styles.formInput} value={accountNumber} onChange={handleAccountNumber} type="text" name="account" id="account" placeholder="account No" required />
                        </div>
                        <span className={styles.field}>Location</span>
                        <div className={styles.formField}>
                            <input className={styles.formInput} value={location} type="text" onChange={handleLocation} name="location" id="location" placeholder="location" required />
                        </div>
                        <span className={styles.field}>Identifier</span>
                        <div className={styles.formField}>
                            <input className={styles.formInput} value={identifier} type="text" onChange={handleIdentifier} name="identifier" id="identifier" placeholder="identifier" required />
                        </div>
                        <div className={styles.loginButton}>
                            <button className={styles.submitButton} onClick={handleSubmit} type="submit">Edit</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
};

export default IntegrationEditPopUp;