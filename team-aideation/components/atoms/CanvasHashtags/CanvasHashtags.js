import React, { useState } from "react";
import { Text } from "react-konva";

const CanvasHashtags = ({
  maxWidth,
  canvasWidth,
  canvasHeight,
  fontSize,
  text,
  draggable,
}) => {
  const [xPos, setXPos] = useState(canvasWidth / 2);
  const [yPos, setYPos] = useState(canvasHeight * 0.8);

  const offsetX = maxWidth / 2;
  const offsetY = fontSize * 0.7;

  return (
    <>
      <Text
        text={text}
        align="center"
        width={maxWidth}
        draggable={draggable}
        fontSize={fontSize}
        x={xPos}
        y={yPos}
        offsetX={offsetX}
        offsetY={offsetY}
        onDragEnd={(e) => {
          setXPos(e.target.x());
          setYPos(e.target.y());
        }}
      />
    </>
  );
};

export default CanvasHashtags;
