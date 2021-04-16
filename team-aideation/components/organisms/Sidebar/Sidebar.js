import styles from "./Sidebar.module.css";
import React from "react";
import TextInput from "../../atoms/TextInput/TextInput";

import Slider from "@material-ui/core/Slider";
import SidebarTextInputField from "../../molecules/SidebarTextInputField/SidebarTextInputField";

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
      <SidebarTextInputField
        label={"Titel:"}
        text={content.title}
        setText={setTitle}
      />
      <div className={styles.Slider__container}>
        <Slider
          value={sidebarSettings.titleFontSize}
          min={50}
          step={5}
          max={200}
          onChange={handleChange}
          className={styles.Slider__slider}
        />
      </div>

      <SidebarTextInputField
        label={"Hashtags:"}
        text={content.hashtags}
        setText={setHashtags}
      />
    </div>
  );
};

export default Sidebar;
