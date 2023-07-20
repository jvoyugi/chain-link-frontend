import React ,{useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import TableDetails from "./TableDetails";
import InputPopUp from "./components/InputPopUp";
import PopUp  from "./components/PopUp";
import styles from "./ManualInput.module.css";
import SideBar from "../../common/sideBar/SideBar"

const ManualInput = () => {
    const[buttonPopUp, setButtonPopUp]= useState(false);
    return (
        <>
            <div>
                <SideBar navLinkItem="inputs"/>
            <div  className={styles.content}   >
                <div className=" row pt-5 align-items-center justify-content-evenly">
                    <div className="col-md-4 col-lg-3 font-weight-bold" className={styles.manualTitle}>
                        Manual Input
                    </div>
                </div>
                <div className="row align-items-center justify-content-end " className={styles.popUp} >
                    <button className="col-md-9" className={styles.manualButton} onClick={()=>setButtonPopUp(true)} > Input transactions manually</button>
                    <PopUp trigger={buttonPopUp}  setTrigger ={setButtonPopUp} >
                        <InputPopUp  setTrigger ={setButtonPopUp} />
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
        </div>

        </>
    )
};
export default ManualInput;