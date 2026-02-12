import { useRef, useCallback } from "react";
export default function useDoubleClick(onDouble, onSingle, delay = 300) {
  const clickRef = useRef(0);
  const timerRef = useRef(null);
  return useCallback((e) => {
    clickRef.current++;
    if (clickRef.current === 1) {
      timerRef.current = setTimeout(() => {
        if (onSingle) onSingle(e);
        clickRef.current = 0;
      }, delay);
    } else if (clickRef.current === 2) {
      clearTimeout(timerRef.current);
      if (onDouble) onDouble(e);
      clickRef.current = 0;
    }
  }, [onDouble, onSingle, delay]);
}
