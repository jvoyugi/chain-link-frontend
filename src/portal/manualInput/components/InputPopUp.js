import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import styles from "./InputPopUp.module.css";

const InputPopUp = (props) => {

    const [amount, setAmount] = useState("");
    const [description, setDescription] = useState("");
    const [status, setStatus] = useState("Money In");
    const [businessName, setBusinessName] = useState(props.businesses[0].businessName);


    const handleAmount = e => setAmount(e.target.value);
    const handleDescription = e => setDescription(e.target.value);
    const handleStatus = e => { setStatus(e.target.value) };
    const handleBusinessName = e => setBusinessName(e.target.value);


    const handleSubmit = async e => {
        e.preventDefault();
        const payload = {
            amount: amount,
            description: description,
            status: status,
            businessName: businessName
        };
        await fetch(`${process.env.REACT_APP_API_URL}/api/transactions`,
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
                    Enter your manual Transaction
                </div>

                <div className={styles.form}>
                    <form className={styles.loginForm}>
                        <span className={styles.field}>Business</span>
                        <div className={styles.formField}>
                            <select
                                className={styles.formInput}
                                onChange={handleBusinessName}
                                name="type"
                                id="business"
                                value={businessName}
                                
                            >
                                {props.businesses.length > 0 && props.businesses.map(element =>
                                    <option key={element._id} value={element.businessName}>{element.businessName}</option>
                                )}
                            </select>

                        </div>
                        <span className={styles.field}>Received via</span>
                        <div className={styles.formField}>
                            <input className={styles.formInput} onChange={handleDescription} type="text" name="received via" id="received" placeholder="received via" required />
                        </div>
                        <span className={styles.field}>Amount</span>
                        <div className={styles.formField}>
                            <input className={styles.formInput} onChange={handleAmount} type="number" name="amount" id="amount" placeholder="Amount in ksh" required />
                        </div>
                        <span className={styles.field}>Type</span>
                        <div className={styles.formField}>
                            <select
                                className={styles.formInput}
                                onChange={handleStatus}
                                name="type"
                                id="status"
                                value={status}
                            >
                                <option value="Money In">Money In</option>
                                <option value="Money Out">Money Out</option>
                                <option value="Debt">Debt</option>
                            </select>

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

export default InputPopUp;