import styles from "./Sidebar.module.css";
import React from "react";
import TextInput from "../../atoms/TextInput/TextInput";

const Sidebar = ({ content, setContent }) => {
  const setTitle = (text) => {
    setContent({ ...content, title: text });
  };

  return (
    <div>
      <label>Titel:</label>
      <TextInput text={content.title} setText={setTitle} />
    </div>
  );
};

export default Sidebar;
