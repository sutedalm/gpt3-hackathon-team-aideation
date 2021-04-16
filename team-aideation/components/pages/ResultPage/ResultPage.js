import styles from "./ResultPage.module.css";

import TextInput from "../../atoms/TextInput/TextInput";
import useImage from "use-image";
import CanvasResizeContainer from "../../atoms/CanvasResizeContainer/CanvasResizeContainer";

import { Image, Layer, Stage, Text } from "react-konva";
import React, { useState } from "react";
import Sidebar from "../../organisms/Sidebar/Sidebar";
import CanvasTitle from "../../atoms/CanvasTitle/CanvasTitle";
import CanvasArticleImage from "../../atoms/CanvasArticleImage/CanvasArticleImage";
import CanvasHashtags from "../../atoms/CanvasHashtags/CanvasHashtags";

const ResultPage = () => {
  const [content, setContent] = useState({
    title:
      "Corona Zahlen in Deutschland steigen! Maskenpflicht wird verschärft!",
    hashtags:
      "#love #fashion #instagood #style #photooftheday #beautiful #fitness #picoftheday #follow #beauty #like4like #art #ootd #model #cute #followme #repost #instadaily #happy #instagram #makeup #girl #amazing #photography #lifestyle",
    image: "",
  });

  const smartphoneBackgroundImageUrl = "/smartphoneMock.png";
  const articleImageUrl = "./articleImage.jpg";

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
            <CanvasArticleImage
              imageUrl={articleImageUrl}
              draggable={true}
              canvasHeight={initialCanvasHeight}
              canvasWidth={initialCanvasWidth}
            />
            <CanvasTitle
              text={content.title}
              maxWidth={initialCanvasWidth * 0.7}
              canvasWidth={initialCanvasWidth}
              canvasHeight={initialCanvasHeight}
              draggable={true}
              fontSize={100}
            />
            <CanvasHashtags
              text={content.hashtags}
              maxWidth={initialCanvasWidth * 0.7}
              canvasWidth={initialCanvasWidth}
              canvasHeight={initialCanvasHeight}
              draggable={true}
              fontSize={45}
            />
            <Image image={smartphoneBackgroundImage} listening={false} />
          </Layer>
        </Stage>
      </CanvasResizeContainer>
      <Sidebar content={content} setContent={setContent} />
    </div>
  );
};

export default ResultPage;
