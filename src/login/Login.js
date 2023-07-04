import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Nav from '../common/Nav';
import styles from "./Login.module.css";

const Login = () => {

  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  const handleEmailChange = e => setEmail(e.target.value);
  const handlePasswordChange = e => setPassword(e.target.value);

  const handleSubmit = async e => {
    e.preventDefault();
    let payload = JSON.stringify({
      email: email,
      password: password
    });
    await fetch(`${process.env.REACT_APP_API_URL}/api/auth/login`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: payload
      })
      .then(resp => console.log(resp.json()));
  }

  return (
    <>
      <Nav navLinkItem="login" />
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
              <span className={styles.forgotPassword}>Forgot password?</span>
              <input className={styles.formInput} onChange={handlePasswordChange} type="password" name="password" id="password" placeholder="Password" required />
            </div>
            <div className={styles.loginButton}>
              <button className={styles.submitButton} onClick={handleSubmit} type="submit">Login</button>
            </div>
          </form>
          <div>
            <Link to="/sign-up" className={styles.noAccount}>Register a new account</Link>
          </div>
        </div>
      </div>
    </>
  )
};

export default Login;