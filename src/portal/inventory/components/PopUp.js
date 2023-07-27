import styles from "./PopUp.module.css";
import React from "react";
import { BsX } from 'react-icons/bs';

const PopUp = (props) => {

    return (props.trigger)?(
        <div className={styles.popUp}>
            <div className={styles.popUpInner}>
                <div  className={styles.closeBtn} onClick={()=>{props.setTrigger(false)} }>
                    <BsX />
                </div>
                    {props.children}
            </div>
        </div>
    ) :"";
};

export default PopUp;