import { useRef, useCallback } from "react";
export default function useLongPress(callback, ms = 500) {
  const timerRef = useRef(null);
  const onStart = useCallback(() => {
    timerRef.current = setTimeout(callback, ms);
  }, [callback, ms]);
  const onEnd = useCallback(() => {
    clearTimeout(timerRef.current);
  }, []);
  return { onMouseDown: onStart, onMouseUp: onEnd, onMouseLeave: onEnd, onTouchStart: onStart, onTouchEnd: onEnd };
}
