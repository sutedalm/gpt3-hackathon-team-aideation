import React, { useEffect, useState } from "react";
import { Image } from "react-konva";
import useImage from "use-image";
import { applyResizeCover } from "../../../utils/utils";

const CanvasArticleImage = ({
  imageUrl,
  draggable,
  canvasWidth,
  canvasHeight,
}) => {
  const [image, imageLoadingStatus] = useImage(imageUrl);
  const [shapeProps, setShapeProps] = useState({
    width: canvasWidth,
    height: canvasHeight,
  });

  useEffect(() => {
    if (imageLoadingStatus == "loaded") {
      const [imageWidth, imageHeight] = applyResizeCover(
        image.width,
        image.height,
        canvasWidth,
        canvasHeight
      );

      setShapeProps({
        width: imageWidth,
        height: imageHeight,
        offsetX: imageWidth / 2 - canvasWidth / 2,
        offsetY: imageHeight / 2 - canvasHeight / 2,
      });
    }
  }, [imageLoadingStatus]);

  return <Image image={image} draggable={draggable} {...shapeProps} />;
};

export default CanvasArticleImage;
