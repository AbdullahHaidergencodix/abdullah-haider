import { useState, useEffect, useRef } from "react";
const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&";
export default function useTextScramble(finalText, delay = 0, speed = 30) {
  const [text, setText] = useState("");
  const started = useRef(false);
  useEffect(() => {
    if (started.current) return;
    const timeout = setTimeout(() => {
      started.current = true;
      let iteration = 0;
      const interval = setInterval(() => {
        setText(
          finalText.split("").map((char, i) => {
            if (char === " ") return " ";
            if (i < iteration) return finalText[i];
            return chars[Math.floor(Math.random() * chars.length)];
          }).join("")
        );
        iteration += 1 / 2;
        if (iteration >= finalText.length) {
          setText(finalText);
          clearInterval(interval);
        }
      }, speed);
    }, delay);
    return () => clearTimeout(timeout);
  }, [finalText, delay, speed]);
  return text;
}
