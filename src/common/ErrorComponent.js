import React from 'react';
import styles from "./ErrorComponent.module.css";
const ErrorComponent = ({message}) => {
  return(
    <div className={styles.error}>
    {message}
    </div>);
}
export default ErrorComponent;