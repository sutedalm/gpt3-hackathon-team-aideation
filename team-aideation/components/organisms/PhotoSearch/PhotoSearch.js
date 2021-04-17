import styles from "./PhotoSearch.module.css";
import React, { useState } from "react";

export default function PhotoSearch() {
  const [query, setQuery] = useState("");
  const [pics, setPics] = useState([]);

  const searchPhotos = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/imageSearch", {
      body: JSON.stringify({
        data: {
          keyword: query,
        },
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    const result = await res.json();

    console.log(result);
    console.log(result.images);

    setPics(result.images);
  };

  return (
    <div className={styles.PhotoSearch}>
      <form className={styles.PhotoSearch__form} onSubmit={searchPhotos}>
        <input
          type="text"
          name="query"
          className={styles.input}
          placeholder={`Bildersuche`}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit" className={styles.button}>
          Search
        </button>
      </form>

      <div className={styles.card__list}>
        {pics.map((pic) => (
          <div className={styles.card} key={pic.id}>
            <img
              className={styles.card__image}
              alt={pic.alt_description}
              src={pic.urls.full}
              width="50%"
              height="50%"
            ></img>
          </div>
        ))}{" "}
      </div>
    </div>
  );
}
