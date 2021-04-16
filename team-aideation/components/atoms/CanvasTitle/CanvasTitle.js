import React, { useEffect, useState } from "react";
import { Text } from "react-konva";

const CanvasTitle = ({
  maxWidth,
  canvasWidth,
  canvasHeight,
  fontSize,
  text,
  draggable,
}) => {
  const [xPos, setXPos] = useState(canvasWidth / 2);
  const [yPos, setYPos] = useState(canvasHeight * 0.25);
  // const [offsetX, setOffsetX] = useState(0);
  // const [offsetY, setOffsetY] = useState(fontSize * 0.7);

  let textNode;

  const offsetX = maxWidth / 2;
  const offsetY = fontSize * 0.7;

  // useEffect(() => {
  //   const currentTextWidth = textNode.getTextWidth();

  //   let scale = maxWidth / currentTextWidth;

  //   const newTextWidth = currentTextWidth * scale;

  //   setOffsetX(newTextWidth / 2);
  // }, [text]);

  return (
    <>
      <Text
        text={text}
        align="center"
        width={maxWidth}
        // wrap="none"
        draggable={draggable}
        fontSize={fontSize}
        fontStyle={"bold"}
        // fontFamily={"WCManoNegraBta"}
        x={xPos}
        y={yPos}
        offsetX={offsetX}
        offsetY={offsetY}
        onDragEnd={(e) => {
          setXPos(e.target.x());
          setYPos(e.target.y());
        }}
        shadowColor={"white"}
        shadowEnabled={true}
        shadowOffsetX={fontSize / 50}
        shadowOffsetY={-fontSize / 40}
        stroke={"white"}
        strokeWidth={fontSize / 70}
        ref={(node) => (textNode = node)}
      />
    </>
  );
};

export default CanvasTitle;
