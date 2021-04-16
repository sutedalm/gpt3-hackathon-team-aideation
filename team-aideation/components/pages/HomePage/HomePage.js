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
    submitRequest(text);
  };

  return (
    <div>
      <Logo/>
      <Banner/>
      <div className={styles.TextInput}>
        <textarea
          value={text}
          onChange={handleChange}
          className={styles.TextInput__inputField}
        />
        <button onClick={callAPI}>Submit</button>
      </div>
      <ValueProposition/>
    </div>
  );
};

export default HomePage;
