import { useEffect, useState } from "react";
export default function useIdle(timeout = 30000) {
  const [idle, setIdle] = useState(false);
  useEffect(() => {
    let timer;
    const reset = () => {
      setIdle(false);
      clearTimeout(timer);
      timer = setTimeout(() => setIdle(true), timeout);
    };
    const events = ["mousemove", "mousedown", "keydown", "touchstart", "scroll"];
    events.forEach((e) => window.addEventListener(e, reset, { passive: true }));
    timer = setTimeout(() => setIdle(true), timeout);
    return () => {
      clearTimeout(timer);
      events.forEach((e) => window.removeEventListener(e, reset));
    };
  }, [timeout]);
  return idle;
}
