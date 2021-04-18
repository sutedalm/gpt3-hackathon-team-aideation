import styles from "./ValueProposition.module.css";

import React from "react";
import Image from 'next/image'

const ValueProposition = () => {
  return (
    <div>
      <div className={styles.title}>
        <h1> Our Value Proposition:</h1>
      </div>

      <div className={styles.container}>
        <div>
          <div className={styles.image_text}>
          <Image
            className={styles.social_reach}
            src="/social-reach.png"
            width={150}
            height={150}
          />
          </div>
            <h1 className={styles.usp_title}> Increase your reach </h1>
            <p className={styles.usp_text}> Our service generates Hashtags from your article using GPT-3 and also includes the most trending hashtags on instagram, so that YOU can increase your reach!.</p>
        </div>

        <div>
          <div className={styles.image_text}>
          <Image
            className={styles.social_reach}
            src="/drag-and-drop.png"
            width={150}
            height={150}
          />
          </div>
            <h1 className={styles.usp_title}> Flexibility </h1>
            <p className={styles.usp_text}> Our service summarizes your article, generates hashtags, and searches for images. If you don't like it, you can always edit the text, images, hashtags by drag-and-drop without any problem!</p>
        </div>

        <div>
          <div className={styles.image_text}>
          <Image
            className={styles.social_reach}
            src="/back-in-time.png"
            width={150}
            height={150}
          />
          </div>
            <h1 className={styles.usp_title}> Save time </h1>
            <p className={styles.usp_text}> In average, a content manager needs about 15 minutes to summarize a single article. Our service needs only 10 seconds! You can increase your productivity AND save time!</p>
        </div>
      </div>
    </div>
  );
};

export default ValueProposition;
