import classNames from "classnames";
import React from "react";
import BottomBar from "../BottomBar";
import exiChat from "../../assets/exiiChat.png";
import styles from "./ChatContainer.module.css";

const ChatContainer = ({
  onChange,
  userInput,
  listening,
  setListening,
  sendQuestionToBot,
  QnAs,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.topContainer}>
        <h3 className={styles.text}>EXII Bot</h3>
        <p className={classNames(styles.text, styles.subText)}>
          {new Date().toDateString()}
        </p>
      </div>
      <div className={styles.chatContainer}>
        {QnAs.map((QnA) => {
          if (QnA.name === "Exarta") {
            return (
              <div className={styles.exiMsgContainer} key={Math.random()}>
                <img
                  src={exiChat}
                  className={styles.exiiChatImg}
                  alt="exiiChatImg"
                />
                <div className={styles.exiiMsg}>{QnA.message}</div>
              </div>
            );
          } else {
            return (
              <div className={styles.userMsgContainer} key={Math.random()}>
                <div className={styles.userMsg}>{QnA.message}</div>
                <img
                  src={exiChat}
                  className={styles.userChatImg}
                  alt="exiiChatImg"
                />
              </div>
            );
          }
        })}
      </div>
      <BottomBar
        onChange={onChange}
        userInput={userInput}
        listening={listening}
        setListening={setListening}
        sendQuestionToBot={sendQuestionToBot}
      />
    </div>
  );
};

export default ChatContainer;
