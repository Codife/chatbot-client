import React from "react";
import Input from "../Input";
import { BsMic } from "react-icons/bs";
import styles from "./BottomBar.module.css";
import classNames from "classnames";

const BottomBar = ({
  onChange,
  userInput,
  listening,
  setListening,
  sendQuestionToBot,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.subContainer}>
        <Input
          customStyle={styles.customInputStyle}
          onChange={onChange}
          value={userInput}
          sendQuestionToBot={sendQuestionToBot}
        />
        <div className={styles.micContainer}>
          <button
            id="speech"
            className={classNames(styles.micBtn, styles.mLeft, styles.type2)}
            onClick={() => setListening(!listening)}
          >
            {listening && <div className={styles.pulseRing}></div>}
            <BsMic className={styles.micIcon} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BottomBar;
