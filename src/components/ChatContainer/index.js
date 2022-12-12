import classNames from "classnames";
import React from "react";
import BottomBar from "../BottomBar";
import styles from "./ChatContainer.module.css";

const ChatContainer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.topContainer}>
        <h3 className={styles.text}>EXII Bot</h3>
        <p className={classNames(styles.text, styles.subText)}>2nd Sep 2022</p>
      </div>
      <BottomBar />
    </div>
  );
};

export default ChatContainer;
