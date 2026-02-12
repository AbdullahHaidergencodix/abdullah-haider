import { useEffect } from "react";
export default function useShake(callback, threshold = 15) {
  useEffect(() => {
    let lastX = 0, lastY = 0, lastZ = 0;
    const handler = (e) => {
      const { x, y, z } = e.accelerationIncludingGravity || {};
      if (x == null) return;
      const dx = Math.abs(x - lastX);
      const dy = Math.abs(y - lastY);
      const dz = Math.abs(z - lastZ);
      if ((dx > threshold && dy > threshold) || (dx > threshold && dz > threshold) || (dy > threshold && dz > threshold)) {
        callback();
      }
      lastX = x; lastY = y; lastZ = z;
    };
    window.addEventListener("devicemotion", handler);
    return () => window.removeEventListener("devicemotion", handler);
  }, [callback, threshold]);
}
