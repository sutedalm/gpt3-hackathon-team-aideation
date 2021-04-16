import styles from "./Sidebar.module.css";
import React from "react";
import TextInput from "../../atoms/TextInput/TextInput";

const Sidebar = ({ content, setContent }) => {
  const setTitle = (text) => {
    setContent({ ...content, title: text });
  };

  const setHashtags = (hashtags) => {
    setContent({ ...content, hashtags: hashtags });
  };

  return (
    <div className={styles.Container}>
      <label>Titel:</label>
      <TextInput text={content.title} setText={setTitle} />
      <label>Hashtags:</label>
      <TextInput text={content.hashtags} setText={setHashtags} />
    </div>
  );
};

export default Sidebar;
