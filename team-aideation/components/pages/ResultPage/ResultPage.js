import styles from "./ResultPage.module.css";
import { useRouter } from "next/router";
import TextInput from "../../atoms/TextInput/TextInput";
import useImage from "use-image";
import CanvasResizeContainer from "../../atoms/CanvasResizeContainer/CanvasResizeContainer";
import Logo from "../../atoms/Logo/Logo";

import { Image, Layer, Stage, Text } from "react-konva";
import React, { useState } from "react";
import Sidebar from "../../organisms/Sidebar/Sidebar";
import CanvasTitle from "../../atoms/CanvasTitle/CanvasTitle";
import CanvasArticleImage from "../../atoms/CanvasArticleImage/CanvasArticleImage";
import CanvasHashtags from "../../atoms/CanvasHashtags/CanvasHashtags";
import PhotoSearch from "../../organisms/PhotoSearch/PhotoSearch";
import { MOCK_RESULT_CONTENT } from "../../../utils/constants";

const ResultPage = () => {
  const router = useRouter();

  const [content, setContent] = useState(
    router.query?.title ? router.query : MOCK_RESULT_CONTENT
  );

  const [sidebarSettings, setSidebarSettings] = useState({
    titleFontSize: 50,
  });

  const smartphoneBackgroundImageUrl = "/smartphoneMock.png";

  const [smartphoneBackgroundImage] = useImage(smartphoneBackgroundImageUrl);

  const initialCanvasWidth = 1230;
  const initialCanvasHeight = 2500;

  return (
    <>
      <div className={styles.Logo__Container}>
        <Logo />
      </div>
      <div className={styles.Container}>
        <main className={styles.MainBody__container}>
          <CanvasResizeContainer
            initialWidth={initialCanvasWidth}
            initialHeight={initialCanvasHeight}
          >
            <Stage>
              <Layer>
                <CanvasArticleImage
                  imageUrl={content.imageUrl}
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
                  fontSize={sidebarSettings.titleFontSize}
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
          <PhotoSearch
            initialKeyword={content.keyword}
            onImageUrlUpdate={(imageUrl) =>
              setContent({
                ...content,
                imageUrl: imageUrl,
              })
            }
          />
        </main>

        <Sidebar
          content={content}
          setContent={setContent}
          sidebarSettings={sidebarSettings}
          setSidebarSettings={setSidebarSettings}
        />
      </div>
    </>
  );
};

export default ResultPage;
