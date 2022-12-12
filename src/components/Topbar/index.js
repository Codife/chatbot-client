import React from "react";
import { EXI } from "../../constants/images";
import Button from "../Button";
import styles from "./Topbar.module.css";

const Topbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.btnContainer}>
        <Button text="About" onClick={() => null} isSelected />
        <Button text="Discord" onClick={() => null} />
        <Button text="Video Chat" onClick={() => null} />
      </div>
      <div className={styles.exiContainer}>
        <img src={EXI} className={styles.exiImg} />
      </div>
      <div className={styles.btnContainer}>
        <Button text="Lands" onClick={() => null} />
        <Button text="Readings" onClick={() => null} />
        <Button text="On This Day" onClick={() => null} />
      </div>
    </div>
  );
};

export default Topbar;
