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
          <p className={styles.usp_text}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
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
          <p className={styles.usp_text}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>

        <div>
          <div className={styles.image_text}>
          <Image
            className={styles.social_reach}
            src="/teamwork.png"
            width={150}
            height={150}
          />
          </div>
          <p className={styles.usp_text}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
      </div>
    </div>
  );
};

export default ValueProposition;
