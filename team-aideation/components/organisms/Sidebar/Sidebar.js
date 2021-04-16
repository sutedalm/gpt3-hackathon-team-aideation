import styles from "./Sidebar.module.css";
import React from "react";
import TextInput from "../../atoms/TextInput/TextInput";

import Slider from "@material-ui/core/Slider";

const Sidebar = ({
  content,
  setContent,
  sidebarSettings,
  setSidebarSettings,
}) => {
  const setTitle = (text) => {
    setContent({ ...content, title: text });
  };

  const setHashtags = (hashtags) => {
    setContent({ ...content, hashtags: hashtags });
  };

  const handleChange = (event, newValue) => {
    setSidebarSettings({
      ...sidebarSettings,
      titleFontSize: newValue,
    });
  };
  return (
    <div className={styles.Container}>
      <div className={styles.sidebar_labels}>
        <label> Titel: </label>
        <TextInput text={content.title} setText={setTitle} />

      </div>
      <div className={styles.slider}>
        <Slider
          value={sidebarSettings.titleFontSize}
          min={50}
          step={5}
          max={200}
          onChange={handleChange}
        />
      </div>
      
      {/* {sidebarSettings.titleFontSize} */}
      <div className={styles.sidebar_labels}>
        <label> Hashtags: </label>
        <TextInput text={content.hashtags} setText={setHashtags} />
      </div>
    </div>
  );
};

export default Sidebar;
