import styles from "./HomePage.module.css";

import React, { useState } from "react";
import Logo from "../../atoms/Logo/Logo";
import HomePageMVP from "../../pages/HomePageMVP/HomePageMVP";
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

      <div className={styles.TextInput}>
        <textarea
          value={text}
          onChange={handleChange}
          className={styles.TextInput__inputField}
        />
        <button onClick={callAPI}>Submit</button>
      </div>
      <HomePageMVP/>
    </div>
  );
};

export default HomePage;
