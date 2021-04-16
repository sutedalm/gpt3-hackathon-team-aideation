import styles from "./ResultPage.module.css";

import TextInput from "../../atoms/TextInput/TextInput";
import useImage from "use-image";
import CanvasResizeContainer from "../../atoms/CanvasResizeContainer/CanvasResizeContainer";

import { Image, Layer, Stage, Text } from "react-konva";
import React, { useState } from "react";
import Sidebar from "../../organisms/Sidebar/Sidebar";
import CanvasTitle from "../../atoms/CanvasTitle/CanvasTitle";

const ResultPage = () => {
  const [content, setContent] = useState({
    title: "title",
    hashtags: [],
    image: "",
  });

  const smartphoneBackgroundImageUrl = "/smartphoneMock.png";
  const [smartphoneBackgroundImage] = useImage(smartphoneBackgroundImageUrl);

  const initialCanvasWidth = 1230;
  const initialCanvasHeight = 2500;

  return (
    <div className={styles.Container}>
      <CanvasResizeContainer
        initialWidth={initialCanvasWidth}
        initialHeight={initialCanvasHeight}
      >
        <Stage>
          <Layer>
            <CanvasTitle text={content.title} fontSize={200} />
            <Image image={smartphoneBackgroundImage} />
          </Layer>
        </Stage>
      </CanvasResizeContainer>
      <Sidebar content={content} setContent={setContent} />
    </div>
  );
};

export default ResultPage;
