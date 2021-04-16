import React from "react";
import { Text } from "react-konva";

const CanvasTitle = ({ text, fontSize }) => {
  return (
    <>
      <Text text={text} fontSize={fontSize} draggable={true} />
    </>
  );
};

export default CanvasTitle;
