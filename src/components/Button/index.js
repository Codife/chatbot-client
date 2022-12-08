import classNames from "classnames";
import React from "react";
import styles from "./Button.module.css";

const Button = ({ text, onClick, isSelected }) => {
  return (
    <div className={classNames(styles.container, isSelected && styles.selected)} onClick={onClick}>
      {text}
    </div>
  );
};

export default Button;
