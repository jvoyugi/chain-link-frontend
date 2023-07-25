import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import TableDetails from "./TableDetails";
import InputPopUp from "./components/InputPopUp";
import PopUp from "./components/PopUp";
import styles from "./ManualInput.module.css";
import Layout from '../../common/Layout';

const ManualInput = () => {
    const [buttonPopUp, setButtonPopUp] = useState(false);
    return (<Layout pageTitle={"Manual Input"} navLinkItem={"inputs"} child={
        <>
            <div>
                <div className="row align-items-center justify-content-end " className={styles.popUp} >
                    <button className="col-md-9" className={styles.manualButton} onClick={() => setButtonPopUp(true)} > Input transactions manually</button>
                    <PopUp trigger={buttonPopUp} setTrigger={setButtonPopUp} >
                        <InputPopUp setTrigger={setButtonPopUp} />
                    </PopUp>
                </div>
                <div className=" row justify-content-right pt-5">
                    <div className="text-right text-success font-weight-bold" className={styles.dashboardTitle}>
                        <h2 className="card-title">Recent Transactions</h2>
                    </div>
                </div>
                <div className="card-content">
                    <TableDetails />
                </div>
            </div>
        </>} />
    )
};
export default ManualInput;