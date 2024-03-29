import React ,{useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import TableDetails from "./IntegrationTable";
import InputPopUp from "./components/IntegrationInputPopUp";
import PopUp  from "./components/IntegrationPopUp";
import styles from "./Integration.module.css";
import Layout from '../../common/Layout';

const Integration = () => {
    const[buttonPopUp, setButtonPopUp]= useState(false);
    return (<Layout pageTitle={"Business Information"} navLinkItem={"business"} child={
        <>
            <div>
                    <div className="row align-items-center justify-content-end " className={styles.popUp} >
                        <button className="col-md-9" className={styles.manualButton} onClick={()=>setButtonPopUp(true)} > Input New Business</button>
                        <PopUp trigger={buttonPopUp}  setTrigger ={setButtonPopUp} >
                            <InputPopUp  setTrigger ={setButtonPopUp} />
                        </PopUp>
                    </div>
                    <div className=" row justify-content-right pt-5">
                        <div className="text-right text-success font-weight-bold" className={styles.dashboardTitle}>
                            <h2 className="card-title">Integrated Business List</h2>
                        </div>
                    </div>
                    <div className="card-content">
                        <TableDetails />
                    </div>
                </div>
        </>}/>
    )
};
export default Integration;