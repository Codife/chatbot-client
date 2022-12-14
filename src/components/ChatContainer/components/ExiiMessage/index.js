import React from "react";
import exiChat from "../../../../assets/exiiChat.png";
import styles from "./ExiiMessage.module.css";

function ExiiMessage({ msg }) {
  return (
    <div className={styles.exiMsgContainer} key={Math.random()}>
      <img src={exiChat} className={styles.exiiChatImg} alt="exiiChatImg" />
      <div className={styles.exiiMsg}>{msg}</div>
    </div>
  );
}

export default ExiiMessage;
