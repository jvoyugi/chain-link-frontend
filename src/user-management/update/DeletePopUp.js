import React from 'react';
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import styles from "./DeletePopUp.module.css";
import loginStyles from "../../login/Login.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const DeletePopUp = (props) => {
  const handleDeleteAccount = async () => {
    await fetch(`${process.env.REACT_APP_API_URL}/api/users/me`,
      {
        method: "DELETE",
        mode: "cors",
        credentials: 'include',
        headers: {
          "Content-Type": "application/json",
        }
      })
      .then(resp => {
        if (resp.ok) {
          toast.success('Sad to see you go', {
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
          window.location.href = "/";
        } else {
          toast.error('Account deletion failed', {
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
          Delete Account
        </div>
        <div className={styles.form}>
          <span className={styles.field} >Are you sure you want to delete your account? This action is irreversible.</span>
          <br />
          <span>(Click cancel to go back and delete to proceed)</span>
          <div className="flex row">
            <div className={styles.loginButton} className="col">
              <button className={styles.cancelButton} onClick={() => { props.setTrigger(false) }} type="submit">Cancel</button>
            </div>
            <div className={styles.loginButton} className="col">
              <button className={styles.deleteButton} onClick={handleDeleteAccount} type="submit">Delete</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
};

export default DeletePopUp;