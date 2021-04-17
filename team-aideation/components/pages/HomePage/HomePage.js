import styles from "./HomePage.module.css";

import React, { useState } from "react";
import { useRouter } from "next/router";
import Logo from "../../atoms/Logo/Logo";
import Banner from "../../atoms/Banner/Banner";

import ValueProposition from "../ValueProposition/ValueProposition";
import { submitRequest } from "../../../utils/gpt3API";

const mockResultContent = {
  title: "Corona Zahlen in Deutschland steigen! Maskenpflicht wird verschärft!",
  hashtags: "#love #fashion #instagood #style #photooftheday",
  imageUrl: "./articleImage.jpg",
  keyword: "Maskenpflicht",
};

const HomePage = () => {
  const [text, setText] = useState("");

  const router = useRouter();

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = (e) => {
    console.log("Article is submitted");
    e.preventDefault();

    // submitRequest(text);
    //TODO: do api request
    const resultContent = mockResultContent;

    router.push({
      pathname: "/result",
      query: resultContent,
    });
  };

  return (
    <div className={styles.overall}>
      <Logo />
      <Banner />
      <div className={styles.TextInput}>
        <textarea
          className={styles.TextInput__inputField}
          value={text}
          onChange={handleChange}
        />
        <button onClick={handleSubmit}>Submit</button>
      </div>
      <ValueProposition />
    </div>
  );
};

export default HomePage;
