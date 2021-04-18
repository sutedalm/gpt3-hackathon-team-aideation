import React from "react";
import styles from "./LoadingScreen.module.css";
import Image from 'next/image'

const LoadingScreen = () => {
  return (
    <div className={styles.LoadingScreen}>
      <Image
        className={styles.loading_icon}
        src="/loading.png"
        width={100}
        height={100}
        alt="Please wait..."
      />
    </div>
  );
};

export default LoadingScreen;
