import { useEffect, useState } from "react";

export default function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
    layoutWidth: 0,
    layoutHeight: 0,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
        layoutWidth: window.innerWidth - 288,
        layoutHeight: window.innerHeight - 160,
      });
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty(`--vh`, `${vh}px`);
    }

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
}