import React, { useEffect, useRef, useState } from "react";
import { Group, Text } from "react-konva";

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

  // const textRef = useRef(null);

  // useEffect(() => {
  //   console.log(textRef.current.textArr);
  // }, [textRef.current.textArr]);

  return (
    <>
      <Group draggable={draggable}>
        <Text
          text={text}
          align="center"
          width={maxWidth}
          fill={"white"}
          // wrap="none"
          // draggable={draggable}
          fontSize={fontSize * 1.01}
          fontStyle={"bold"}
          fontFamily={"Roboto"}
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
          // shadowOffsetX={fontSize / 20}
          // shadowOffsetY={-fontSize / 20}
          shadowBlur={10}
          stroke={"white"}
          strokeWidth={fontSize / 8}
          fillAfterStrokeEnabled={true}
          // ref={textRef}
        />
        <Text
          text={text}
          align="center"
          width={maxWidth}
          // wrap="none"
          // draggable={draggable}
          fontSize={fontSize}
          fontStyle={"bold"}
          fontFamily={"Roboto"}
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
          shadowOffsetX={-fontSize / 20}
          shadowOffsetY={fontSize / 20}
          shadowBlur={5}
          stroke={"white"}
          strokeWidth={fontSize / 8}
          fillAfterStrokeEnabled={true}
        />
      </Group>
    </>
  );
};

export default CanvasTitle;
