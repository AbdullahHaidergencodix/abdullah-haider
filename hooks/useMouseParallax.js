import { useEffect, useState } from "react";
export default function useMouseParallax(intensity = 0.02) {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const handler = (e) => {
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      setPos({ x: (e.clientX - cx) * intensity, y: (e.clientY - cy) * intensity });
    };
    window.addEventListener("mousemove", handler, { passive: true });
    return () => window.removeEventListener("mousemove", handler);
  }, [intensity]);
  return pos;
}
