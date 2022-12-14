import React from "react";
import exiChat from "../../../../assets/exiiChat.png";
import styles from "./UserMessage.module.css";

function UserMessage({ msg }) {
  return (
    <div className={styles.userMsgContainer} key={Math.random()}>
      <div className={styles.userMsg}>{msg}</div>
      <img src={exiChat} className={styles.userChatImg} alt="exiiChatImg" />
    </div>
  );
}

export default UserMessage;
