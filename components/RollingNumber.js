import { useEffect, useRef, useState } from "react";
export default function RollingNumber({ value, className = "" }) {
  const [display, setDisplay] = useState(0);
  const prevVal = useRef(0);
  useEffect(() => {
    const start = prevVal.current;
    const diff = value - start;
    const duration = 1500;
    const startTime = performance.now();
    const animate = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 4);
      setDisplay(Math.round(start + diff * eased));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
    prevVal.current = value;
  }, [value]);
  return <span className={className}>{display}</span>;
}
