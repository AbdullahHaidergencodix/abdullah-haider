import { useState, useEffect } from "react";
export default function useOrientation() {
  const [orientation, setOrientation] = useState("portrait");
  useEffect(() => {
    const handler = () => {
      setOrientation(window.innerWidth > window.innerHeight ? "landscape" : "portrait");
    };
    handler();
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);
  return orientation;
}
