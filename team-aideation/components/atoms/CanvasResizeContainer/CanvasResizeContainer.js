import styles from "./CanvasResizeContainer.module.css";

import React from "react";
import { useResizeDetector } from "react-resize-detector";
import { applyResize } from "../../../utils/utils";

const CanvasResizeContainer = ({ children, initialWidth, initialHeight }) => {
  const { ref: canvasResizeContainerRef, width, height } = useResizeDetector();
  const [stageWidth, stageHeight] = applyResize(
    initialWidth,
    initialHeight,
    width,
    height
  );
  const scale = stageWidth / initialWidth;

  const childrenWithProps = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, {
        width: stageWidth,
        height: stageHeight,
        scaleX: scale,
        scaleY: scale,
      });
    }
    return child;
  });

  return (
    <div ref={canvasResizeContainerRef} className={styles.Container}>
      {childrenWithProps}
    </div>
  );
};

export default CanvasResizeContainer;
