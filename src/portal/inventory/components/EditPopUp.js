import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import styles from "./EditPopUp.module.css";

const EditPopUp = (props) => {
    const [quantity, setQuantity] = useState(props.selectedItem.quantity);
    const [cost, setCost] = useState(props.selectedItem.cost);
    const [name, setName] = useState(props.selectedItem.name);
    const [businesses, setBusinesses] = useState([]);
    const [businessName, setBusinessName] = useState(props.selectedItem.businessName?.businessName);



    const handleQuantity = e => setQuantity(e.target.value);
    const handleCost = e => setCost(e.target.value);
    const handleName = e => { setName(e.target.value) };
    const handleBusinessName = e => setBusinessName(e.target.value);


    useEffect(() => {
        const fetchBusinesses = async () => {
            const response = await fetch(`${process.env.REACT_APP_API_URL}/api/business`,
                {
                    mode: "cors",
                    method: "GET",
                    credentials: "include"
                })
            if (response.ok) {
                let jsonResponse = await response.json();
                setBusinesses(jsonResponse)
            }
            else {
                toast.error(
                    'Could not fetch businesses', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                })
            }
        }
        (async () => await fetchBusinesses())();
        return () => { }
    }, []);

    const handleSubmit = async e => {
        e.preventDefault();

        const payload = {
            quantity: quantity,
            cost: cost,
            name: name,
            businessName: businessName?.length > 0 ? businessName : businesses[0].businessName
        };
        await fetch(`${process.env.REACT_APP_API_URL}/api/inventory/${props.selectedItem._id}`,
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
                    Log your inventory
                </div>
                <div className={styles.form}>
                    <form className={styles.loginForm}>
                        <span className={styles.field}>Name</span>
                        <div className={styles.formField}>
                            <input className={styles.formInput} value={name} onChange={handleName} type="text" name="name" id="name" placeholder="Name" required />
                        </div>
                        <span className={styles.field}>Quantity</span>
                        <div className={styles.formField}>
                            <input className={styles.formInput} value={quantity} onChange={handleQuantity} type="number" name="quantity" id="quantity" placeholder="Quantity" required />
                        </div>
                        <span className={styles.field}>Cost per item</span>
                        <div className={styles.formField}>
                            <input className={styles.formInput} value={cost} onChange={handleCost} type="number" name="cost" id="cost" placeholder="Amount in ksh" required />
                        </div>
                        <span className={styles.field}>Business</span>
                        <div className={styles.formField}>
                            <select
                                className={styles.formInput}
                                onChange={handleBusinessName}
                                name="type"
                                id="business"
                                value={businessName}
                                defaultValue={businessName}
                            >
                                {businesses.length > 0 && businesses.map(element =>
                                    <option key={element._id} value={element.businessName}>{element.businessName}</option>
                                )}
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

export default EditPopUp;