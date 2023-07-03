import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Nav from '../common/Nav';
import styles from "./Login.module.css";

const Login = () => {

  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  const handleEmailChange = e => setEmail(e.target.value);
  const handlePasswordChange = e => setPassword(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    let payload = {
      email: email,
      password: password
    }
    console.log(payload);
  }

  return (
    <>
      <Nav />
      <div className={styles.loginScreen}>
        <div className={styles.loginScreenHeader}>
          Sign in to your account
        </div>
        <div className={styles.form}>
          <form className={styles.loginForm}>
            <div className={styles.formField}>
              <input className={styles.formInput} onChange={handleEmailChange} type="text" name="email" id="email" placeholder="Email" required />
            </div>
            <div className={styles.formField}>
              <input className={styles.formInput} onChange={handlePasswordChange} type="password" name="password" id="password" placeholder="Password" required />
            </div>
            <div className={styles.loginButton}>
              <button className={styles.submitButton} onClick={handleSubmit} type="submit">Login</button>
            </div>
          </form>
          <div className={styles.noAccount}>
            <Link to="/sign-up">Click here to register a new account</Link>
          </div>
        </div>
      </div>
    </>
  )
};

export default Login;