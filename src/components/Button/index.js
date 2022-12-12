import classNames from "classnames";
import React from "react";
import styles from "./Button.module.css";

const Button = ({ text, onClick, isSelected, customStyle }) => {
  return (
    <div
      className={classNames(
        styles.container,
        isSelected && styles.selected,
        customStyle
      )}
      onClick={onClick}
    >
      {text}
    </div>
  );
};

export default Button;
