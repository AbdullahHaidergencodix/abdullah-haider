import { useRef, useState, useCallback } from "react";
export default function useHoverIntent(delay = 200) {
  const [hovering, setHovering] = useState(false);
  const timer = useRef(null);
  const enter = useCallback(() => {
    timer.current = setTimeout(() => setHovering(true), delay);
  }, [delay]);
  const leave = useCallback(() => {
    clearTimeout(timer.current);
    setHovering(false);
  }, []);
  return { hovering, onMouseEnter: enter, onMouseLeave: leave };
}
