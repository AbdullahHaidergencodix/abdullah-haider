import { useEffect, useRef, useState } from "react";
export default function useScrollVelocity() {
  const [velocity, setVelocity] = useState(0);
  const lastScroll = useRef(0);
  const lastTime = useRef(Date.now());
  useEffect(() => {
    const handler = () => {
      const now = Date.now();
      const dt = now - lastTime.current;
      if (dt > 0) {
        const v = Math.abs(window.scrollY - lastScroll.current) / dt;
        setVelocity(v);
      }
      lastScroll.current = window.scrollY;
      lastTime.current = now;
    };
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);
  return velocity;
}
