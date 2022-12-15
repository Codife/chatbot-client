import classNames from "classnames";
import React, { useState } from "react";
import BottomBar from "../BottomBar";
import ExiiMessage from "./components/ExiiMessage";
import UserMessage from "./components/UserMessage";
import { Select, MenuItem } from "@mui/material";
import styles from "./ChatContainer.module.css";

const ChatContainer = ({
  onChange,
  userInput,
  listening,
  setListening,
  sendQuestionToBot,
  QnAs,
  handleLanguageChange,
  language,
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
            return <ExiiMessage msg={QnA.message} key={Math.random()} />;
          } else {
            return <UserMessage msg={QnA.message} key={Math.random()} />;
          }
        })}
      </div>
      <div className={styles.languageBox}>
        <Select
          value={language}
          onChange={handleLanguageChange}
          className={styles.languageSelect}
        >
          <MenuItem value="English">English</MenuItem>
          <MenuItem value="French">French</MenuItem>
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
