import styles from "./HomePage.module.css";

import React, { useState } from "react";
import { useRouter } from "next/router";
import Logo from "../../atoms/Logo/Logo";
import Banner from "../../atoms/Banner/Banner";
import Backdrop from '@material-ui/core/Backdrop';

import ValueProposition from "../ValueProposition/ValueProposition";
import LoadingScreen from "../../atoms/LoadingScreen/LoadingScreen";
import { submitRequest } from "../../../utils/gpt3API";
import {
  EXAMPLE_SEARCH_QUERY,
  FALLBACK_ARTICLE_IMAGE_URL,
} from "../../../utils/constants";

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));

const HomePage = () => {
  const classes = useStyles();
  const [text, setText] = useState(EXAMPLE_SEARCH_QUERY);
  const [loading, setLoading] = useState(false)

  const router = useRouter();
  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = async (e) => {
    setLoading({loading: true});

    console.log("Article is submitted");
    e.preventDefault();

    const res = await fetch("/api/gpt3", {
      body: JSON.stringify({
        data: {
          searchQuery: text,
        },
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });
    const result = await res.json();

    console.log(result);
    const imageSearchPrompt = result.keyword;
    const imagesResponse = await fetch("/api/imageSearch", {
      body: JSON.stringify({
        data: {
          keyword: imageSearchPrompt,
        },
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });
    const imagesResult = await imagesResponse.json();

    const articleImageUrl = imagesResult?.images[0]
      ? imagesResult?.images[0].urls.full
      : FALLBACK_ARTICLE_IMAGE_URL;
    console.log(articleImageUrl);

    const resultContent = {
      ...result,
      imageUrl: articleImageUrl,
    };

    console.log(resultContent);

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
        <Backdrop className={classes.backdrop} open={loading}>
          <LoadingScreen/>
        </Backdrop>

      </div>
      <ValueProposition />
    </div>
  );
};

export default HomePage;
