import styles from "./PopUp.module.css";
import React from "react";

const PopUp = (props) => {

    return (props.trigger)?(
        <div className={styles.popUp}>
            <div className={styles.popUpInner}>
                <button className={styles.closeBtn} onClick={()=>{props.setTrigger(false)} }>Close</button>
                    {props.children}
            </div>
        </div>
    ) :"";
};

export default PopUp;