import styles from "./TextInput.module.css";

import React from "react";

const TextInput = ({ text, setText }) => {
  const handleChange = (event) => {
    setText(event.target.value);
  };
  return (
    <div className={styles.TextInput}>
      <textarea
        className={styles.TextInput__inputField}
        value={text}
        onChange={handleChange}
      />
    </div>
  );
};

export default TextInput;
