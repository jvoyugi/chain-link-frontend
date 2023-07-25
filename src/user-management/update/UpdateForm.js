import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { isStrongPassword } from "validator";
import loginStyles from "../../login/Login.module.css";
import styles from "./UpdateForm.module.css";

const UpdateForm = () => {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [passwordConfirmation, setPasswordConfirmation] = useState();
  let [phoneNumber, setPhoneNumber] = useState("");

  const handleEmailChange = e => setEmail(e.target.value);
  const handlePasswordChange = e => setPassword(e.target.value);
  const handlePasswordConfirmationChange = e => setPasswordConfirmation(e.target.value);
  const handlePhoneNumberChange = e => setPhoneNumber(e.target.value);

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
      .then(resp => { if (resp.ok) window.location.href = "/" });
  }


  const handleSubmit = async e => {
    e.preventDefault();
    let payload = {
      email: email,
      phoneNumber: phoneNumber
    };
    if (password && password === passwordConfirmation && isStrongPassword(password))
      payload["password"] = password;

    await fetch(`${process.env.REACT_APP_API_URL}/api/users/me`,
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
        resp.ok ?
          toast.success('Update Success', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          })
          :
          toast.warn('Update failed', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
      });
  }
  useEffect(() => {
    const fetchUser = async () => {
      const resp = await fetch(`${process.env.REACT_APP_API_URL}/api/users/me`,
        {
          credentials: 'include',
          method: "GET",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
          }
        });
      if (resp.status === 200) {
        const jsonResp = await resp.json();
        setEmail(jsonResp.email);
        setPhoneNumber(jsonResp.phoneNumber);
      }
    }
    fetchUser();
  }, [])


  return (
    <>
      <form className={styles.updateForm}>
        <div className={loginStyles.formField}>
          <input className={loginStyles.formInput} value={phoneNumber} onChange={handlePhoneNumberChange} type="tel" name="phoneNumber" id="phoneNumber" placeholder="Phone Number" required />
        </div>
        <div className={loginStyles.formField}>
          <input className={loginStyles.formInput} value={email} onChange={handleEmailChange} type="text" name="email" id="email" placeholder="Email" required />
        </div>
        <div className={loginStyles.formField}>
          <input className={loginStyles.formInput} onChange={handlePasswordChange} type="password" name="password" id="password" placeholder="Password" required />
        </div>
        <div className={loginStyles.formField}>
          <input className={loginStyles.formInput} onChange={handlePasswordConfirmationChange} type="password" name="password" id="password" placeholder="Password Confirmation" required />
        </div>
        <div className={styles.buttonGroup}>
          <button className={styles.submitButton} onClick={handleSubmit} type="submit">Update Account</button>
          <button className={styles.submitButton} onClick={handleDeleteAccount}>Delete Account</button>
        </div>
      </form>
    </>)
}
export default UpdateForm;