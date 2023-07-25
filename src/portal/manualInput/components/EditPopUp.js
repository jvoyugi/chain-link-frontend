import React, { useState } from 'react';
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import styles from "./EditPopUp.module.css";

const EditPopUp= (props) => {

    const [amount, setAmount] = useState(props.selectedItem.amount);
    const [description, setDescription] = useState(props.selectedItem.description);
    const [status, setStatus] = useState(props.selectedItem.status);

    const handleAmount = e => setAmount(e.target.value);
    const handleDescription = e => setDescription(e.target.value);
    const handleStatus = e => setStatus(e.target.value);

    const handleSubmit = async e => {
        e.preventDefault();
        const payload = {
            amount: amount,
            description: description,
            status: status
        };
        await fetch(`${process.env.REACT_APP_API_URL}/api/transactions/${props.selectedItem._id}`,
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
                        <span className={styles.field}>Description</span>
                        <div className={styles.formField}>
                            <input className={styles.formInput} value={description} onChange={handleDescription} type="text" name="business" id="business" placeholder="description" required />
                        </div>
                        <span className={styles.field}>Amount</span>
                        <div className={styles.formField}>
                            <input className={styles.formInput} value={amount} onChange={handleAmount} type="text" name="received via" id="received" placeholder="amount" required />
                        </div>
                        <span className={styles.field}>Status</span>
                        <div className={styles.formField}>
                            <input className={styles.formInput} value={status} onChange={handleStatus} type="text" name="amount" id="amount" placeholder="status" required />
                        </div>
                        <div className={styles.loginButton}>
                            <button className={styles.submitButton} onClick={handleSubmit}type="submit">Edit</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
};

export default EditPopUp;