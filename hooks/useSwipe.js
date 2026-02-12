import { useRef } from "react";
export default function useSwipe(onLeft, onRight, threshold = 50) {
  const startX = useRef(0);
  const onTouchStart = (e) => { startX.current = e.touches[0].clientX; };
  const onTouchEnd = (e) => {
    const diff = startX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > threshold) {
      if (diff > 0 && onLeft) onLeft();
      if (diff < 0 && onRight) onRight();
    }
  };
  return { onTouchStart, onTouchEnd };
}
