import { useEffect, useState, useRef } from "react";
export default function useScrollDirection() {
  const [dir, setDir] = useState("up");
  const lastScroll = useRef(0);
  useEffect(() => {
    const handler = () => {
      const current = window.scrollY;
      setDir(current > lastScroll.current ? "down" : "up");
      lastScroll.current = current;
    };
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);
  return dir;
}
