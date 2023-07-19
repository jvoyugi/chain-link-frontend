import styles from "./PopUp.module.css";
import React from "react";
import {BsFillPencilFill, BsFillTrashFill} from "react-icons/bs";
import 'bootstrap/dist/css/bootstrap.min.css';
const Action = (props) => {

    return(
          <span className="flex justify-content-around">
              <BsFillTrashFill color="red" className="m-2" onClick={()=>{props.setTrigger(true)}} />

              <BsFillPencilFill color="green" className="m-2" />
          </span>

    )
};

export default Action;