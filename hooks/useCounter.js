import { useEffect, useRef, useState } from "react";
export default function useCounter(target, dur = 2000) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const ran = useRef(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !ran.current) {
        ran.current = true;
        const start = performance.now();
        const step = (now) => {
          const p = Math.min((now-start)/dur,1);
          const eased = 1-Math.pow(1-p,4);
          setCount(Math.floor(eased*target));
          if (p<1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      }
    }, { threshold:0.5 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [target,dur]);
  return { ref, count };
}
