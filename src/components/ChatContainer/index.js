import classNames from "classnames";
import React from "react";
import BottomBar from "../BottomBar";
import exiChat from "../../assets/exiiChat.png";
import styles from "./ChatContainer.module.css";

const ChatContainer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.topContainer}>
        <h3 className={styles.text}>EXII Bot</h3>
        <p className={classNames(styles.text, styles.subText)}>2nd Sep 2022</p>
      </div>
      <div className={styles.chatContainer}>
        <div className={styles.exiMsgContainer}>
          <img src={exiChat} className={styles.exiiChatImg} alt="exiiChatImg" />
          <div className={styles.exiiMsg}>
            Left Side Text Left Side Text Left Side Text Left Side Text Left
            Side Text Left Side Text Left Side Text Left Side Text Left Side
            Text Left Side Text Left Side Text Left Side Text
          </div>
        </div>
        <div className={styles.userMsgContainer}>
          <div className={styles.exiiMsg}>
            Righght Side Text RightRight Side Text
          </div>
          <img src={exiChat} className={styles.userChatImg} alt="exiiChatImg" />
        </div>
        <div className={styles.exiMsgContainer}>
          <img src={exiChat} className={styles.exiiChatImg} alt="exiiChatImg" />
          <div className={styles.exiiMsg}>
            Left Side Text Left Side Text Left Side Text Left Side Text Left
            Side Text Left Side Text Left Side Text Left Side Text Left Side
            Text Left Side Text Left Side Text Left Side Text
          </div>
        </div>
        <div className={styles.userMsgContainer}>
          <div className={styles.exiiMsg}>
            Right Side Text Right Side Text Right Side Text Right Side Text
            Right Side Text Right Side Text Right Side Text Right Side Text
            Right Side Text Right Side Text
          </div>
          <img src={exiChat} className={styles.userChatImg} alt="exiiChatImg" />
        </div>
        <div className={styles.exiMsgContainer}>
          <img src={exiChat} className={styles.exiiChatImg} alt="exiiChatImg" />
          <div className={styles.exiiMsg}>
            Left Side Text Left Side Text Left Side Text Left Side Text Left
            Side Text Left Side Text Left Side Text Left Side Text Left Side
            Text Left Side Text Left Side Text Left Side Text
          </div>
        </div>
        <div className={styles.userMsgContainer}>
          <div className={styles.exiiMsg}>
            Right Side Text Right Side Text Right Side Text Right Side Text
            Right Side Text Right Side Text Right Side Text Right Side Text
            Right Side Text Right Side Text
          </div>
          <img src={exiChat} className={styles.userChatImg} alt="exiiChatImg" />
        </div>
        <div className={styles.exiMsgContainer}>
          <img src={exiChat} className={styles.exiiChatImg} alt="exiiChatImg" />
          <div className={styles.exiiMsg}>
            Left Side Text Left Side Text Left Side Text Left Side Text Left
            Side Text Left Side Text Left Side Text Left Side Text Left Side
            Text Left Side Text Left Side Text Left Side Text
          </div>
        </div>
        <div className={styles.userMsgContainer}>
          <div className={styles.exiiMsg}>
            Right Side Text Right Side Text Right Side Text Right Side Text
            Right Side Text Right Side Text Right Side Text Right Side Text
            Right Side Text Right Side Text
          </div>
          <img src={exiChat} className={styles.userChatImg} alt="exiiChatImg" />
        </div>
        <div className={styles.exiMsgContainer}>
          <img src={exiChat} className={styles.exiiChatImg} alt="exiiChatImg" />
          <div className={styles.exiiMsg}>
            Left Side Text Left Side Text Left Side Text Left Side Text Left
            Side Text Left Side Text Left Side Text Left Side Text Left Side
            Text Left Side Text Left Side Text Left Side Text
          </div>
        </div>
        <div className={styles.userMsgContainer}>
          <div className={styles.exiiMsg}>
            Right Side Text Right Side Text Right Side Text Right Side Text
            Right Side Text Right Side Text Right Side Text Right Side Text
            Right Side Text Right Side Text
          </div>
          <img src={exiChat} className={styles.userChatImg} alt="exiiChatImg" />
        </div>
        <div className={styles.exiMsgContainer}>
          <img src={exiChat} className={styles.exiiChatImg} alt="exiiChatImg" />
          <div className={styles.exiiMsg}>
            Left Side Text Left Side Text Left Side Text Left Side Text Left
            Side Text Left Side Text Left Side Text Left Side Text Left Side
            Text Left Side Text Left Side Text Left Side Text
          </div>
        </div>
        <div className={styles.userMsgContainer}>
          <div className={styles.exiiMsg}>
            Right Side Text Right Side Text Right Side Text Right Side Text
            Right Side Text Right Side Text Right Side Text Right Side Text
            Right Side Text Right Side Text
          </div>
          <img src={exiChat} className={styles.userChatImg} alt="exiiChatImg" />
        </div>
        <div className={styles.exiMsgContainer}>
          <img src={exiChat} className={styles.exiiChatImg} alt="exiiChatImg" />
          <div className={styles.exiiMsg}>
            Left Side Text Left Side Text Left Side Text Left Side Text Left
            Side Text Left Side Text Left Side Text Left Side Text Left Side
            Text Left Side Text Left Side Text Left Side Text
          </div>
        </div>
        <div className={styles.userMsgContainer}>
          <div className={styles.exiiMsg}>
            Right Side Text Right Side Text Right Side Text Right Side Text
            Right Side Text Right Side Text Right Side Text Right Side Text
            Right Side Text Right Side Text
          </div>
          <img src={exiChat} className={styles.userChatImg} alt="exiiChatImg" />
        </div>
        <div className={styles.exiMsgContainer}>
          <img src={exiChat} className={styles.exiiChatImg} alt="exiiChatImg" />
          <div className={styles.exiiMsg}>
            Left Side Text Left Side Text Left Side Text Left Side Text Left
            Side Text Left Side Text Left Side Text Left Side Text Left Side
            Text Left Side Text Left Side Text Left Side Text
          </div>
        </div>
        <div className={styles.userMsgContainer}>
          <div className={styles.exiiMsg}>
            Right Side Text ide Text Right Side Text Right Side Text
          </div>
          <img src={exiChat} className={styles.userChatImg} alt="exiiChatImg" />
        </div>
      </div>
      <BottomBar />
    </div>
  );
};

export default ChatContainer;
