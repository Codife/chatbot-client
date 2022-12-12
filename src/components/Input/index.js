import classNames from "classnames";
import React from "react";
import sendArrow from "../../assets/send_arrow.svg";
import styles from "./Input.module.css";

const Input = ({ customStyle }) => {
  return (
    <div className={classNames(styles.container, customStyle)}>
      <input className={styles.input} placeholder="Type Something... "/>
      <img src={sendArrow} className={styles.sendButton} alt="sendButton" />
    </div>
  );
};

export default Input;
