import styles from "./HomePage.module.css";

import React, { useState } from "react";
import Logo from "../../atoms/Logo/Logo";
import Banner from "../../atoms/Banner/Banner";

import ValueProposition from "../ValueProposition/ValueProposition";
import { submitRequest } from "../../../utils/gpt3API";

const HomePage = () => {
  const [text, setText] = useState("");
  const handleChange = (event) => {
    setText(event.target.value);
  };

  const callAPI = () => {
    console.log("Article is submitted");
    // submitRequest(text);
  };

  return (
    <div className={styles.overall}>
      <Logo/>
      <Banner/>
      <div className={styles.TextInput}>
        <textarea
          className={styles.TextInput__inputField}
          value={text}
          onChange={handleChange}
        />
        <button onClick={callAPI}>Submit</button>
      </div>
      <ValueProposition />
    </div>
  );
};

export default HomePage;
