import styles from "./SidebarTextInputField.module.css";
import React from "react";
import TextInput from "../../atoms/TextInput/TextInput";

const SidebarTextInputField = ({ label, text, setText }) => {
  return (
    <div className={styles.Container}>
      <label> {label} </label>
      <TextInput className={styles.TextInput} text={text} setText={setText} />
    </div>
  );
};

export default SidebarTextInputField;
