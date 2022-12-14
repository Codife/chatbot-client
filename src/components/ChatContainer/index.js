import classNames from "classnames";
import React from "react";
import BottomBar from "../BottomBar";
import exiChat from "../../assets/exiiChat.png";
import styles from "./ChatContainer.module.css";
import ExiiMessage from "./components/ExiiMessage";
import UserMessage from "./components/UserMessage";
import { Select, MenuItem } from "@mui/material";

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
            return <ExiiMessage msg={QnA.message} />;
          } else {
            return <UserMessage msg={QnA.message} />;
          }
        })}
      </div>
      <div className={styles.languageBox}>
        <Select
          value="eng"
          // onChange={handleChange}
          className={styles.languageSelect}
        >
          <MenuItem value="eng">English</MenuItem>
          <MenuItem value="fr">French</MenuItem>
        </Select>
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
