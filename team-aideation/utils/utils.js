import { useState, useEffect, useLayoutEffect } from "react";

export const applyResize = (
  initialWidth,
  initialHeight,
  containerWidth,
  containerHeight
) => {
  // if (initialWidth < containerWidth && initialHeight < containerHeight) {
  //   return [initialWidth, initialHeight];
  // }

  const ratio = initialWidth / initialHeight;
  let newHeight = containerHeight;
  let newWidth = newHeight * ratio;
  if (newWidth > containerWidth) {
    newWidth = containerWidth;
    newHeight = newWidth / ratio;
  }
  newWidth = newWidth > 0 ? newWidth : 1;
  newHeight = newHeight > 0 ? newHeight : 1;
  return [newWidth, newHeight];
};
export const applyResizeCover = (
  initialWidth,
  initialHeight,
  containerWidth,
  containerHeight
) => {
  const ratio = initialWidth / initialHeight;
  let newHeight = containerHeight;
  let newWidth = newHeight * ratio;
  if (newWidth < containerWidth) {
    newWidth = containerWidth;
    newHeight = newWidth / ratio;
  }
  newWidth = newWidth > 0 ? newWidth : 1;
  newHeight = newHeight > 0 ? newHeight : 1;
  return [newWidth, newHeight];
};

// function from https://stackoverflow.com/a/15832662/512042
export function downloadURI(uri, name) {
  var link = document.createElement("a");
  link.download = name;
  link.href = uri;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

export function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState({
    width: 400,
    height: 700,
  });

  useLayoutEffect(() => {
    function handleResize() {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}
