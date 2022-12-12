import React from "react";
import Input from "../Input";
import { BsMic } from "react-icons/bs";
import styles from "./BottomBar.module.css";
import classNames from "classnames";

const BottomBar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.subContainer}>
        <Input customStyle={styles.customInputStyle} />
        <div className={styles.micContainer}>
          <button
            id="speech"
            className={classNames(styles.micBtn, styles.mLeft, styles.type2)}
            // onClick={() => setListening(!listening)}
          >
            {true && <div className={styles.pulseRing}></div>}
            <BsMic className={styles.micIcon} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BottomBar;
