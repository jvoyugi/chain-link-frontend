import React, { useState } from 'react';

import Nav from '../common/Nav';
import styles from "./Register.module.css";
import { Link } from 'react-router-dom';

const Register = () => {

  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [passwordConfirmation, setPasswordConfirmation] = useState();
  let [phoneNumber, setPhoneNumber] = useState("");
  let [fullName, setFullName] = useState("");

  const handleEmailChange = e => setEmail(e.target.value);
  const handlePasswordChange = e => setPassword(e.target.value);
  const handlePasswordConfirmationChange = e => setPasswordConfirmation(e.target.value);
  const handlePhoneNumberChange = e => setPhoneNumber(e.target.value);
  const handleFullNameChange = e => setFullName(e.target.value);

  const handleSubmit = async e => {
    e.preventDefault();
    if (password === passwordConfirmation) {
      let payload = JSON.stringify({
        email: email,
        password: password,
        phoneNumber: phoneNumber,
        fullName: fullName
      });
      await fetch(`${process.env.REACT_APP_API_URL}/api/users`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: payload
        })
        .then(resp => console.log(resp.json()));
    }
  }

  return (
    <>
      <Nav navLinkItem="register" />
      <div className={styles.registerScreen}>
        <div className={styles.registerScreenHeader}>
          Create your account
        </div>
        <div className={styles.form}>
          <form className={styles.registerForm}>
            <div className={styles.formField}>
              <input className={styles.formInput} onChange={handleFullNameChange} type="text" name="fullName" id="fullName" placeholder="Full Name" required />
            </div>
            <div className={styles.formField}>
              <input className={styles.formInput} onChange={handlePhoneNumberChange} type="tel" name="phoneNumber" id="phoneNumber" placeholder="Phone Number" required />
            </div>
            <div className={styles.formField}>
              <input className={styles.formInput} onChange={handleEmailChange} type="text" name="email" id="email" placeholder="Email" required />
            </div>
            <div className={styles.formField}>
              <input className={styles.formInput} onChange={handlePasswordChange} type="password" name="password" id="password" placeholder="Password" required />
            </div>
            <div className={styles.formField}>
              <input className={styles.formInput} onChange={handlePasswordConfirmationChange} type="password" name="password" id="password" placeholder="Password Confirmation" required />
            </div>
            <div className={styles.registerButton}>
              <button className={styles.submitButton} onClick={handleSubmit} type="submit">Sign Up</button>
            </div>
          </form>
          <div>
            <Link to="/login" className={styles.noAccount}>Click here to sign in</Link>
          </div>
        </div>
      </div>
    </>
  )
};

export default Register;