import styles from "./TextInput.module.css";

import React from "react";

const TextInput = ({ text, setText }) => {
  const handleChange = (event) => {
    setText(event.target.value);
  };
  return (
    <div className={styles.TextInput}>
      <textarea
        value={text}
        onChange={handleChange}
        className={styles.TextInput__inputField}
      />
    </div>
  );
};

export default TextInput;
