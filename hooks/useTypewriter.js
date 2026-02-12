import { useState, useEffect, useRef } from "react";
export default function useTypewriter(text, delay = 0, speed = 40) {
  const [displayed, setDisplayed] = useState("");
  const started = useRef(false);
  useEffect(() => {
    if (started.current) return;
    const timeout = setTimeout(() => {
      started.current = true;
      let i = 0;
      const interval = setInterval(() => {
        setDisplayed(text.slice(0, i + 1));
        i++;
        if (i >= text.length) clearInterval(interval);
      }, speed);
    }, delay);
    return () => clearTimeout(timeout);
  }, [text, delay, speed]);
  return displayed;
}
