import { useState, useEffect, useRef } from "react";
export default function useViewportProgress() {
  const ref = useRef(null);
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const handler = () => {
      const rect = el.getBoundingClientRect();
      const total = window.innerHeight + rect.height;
      const visible = window.innerHeight - rect.top;
      setProgress(Math.max(0, Math.min(1, visible / total)));
    };
    window.addEventListener("scroll", handler, { passive: true });
    handler();
    return () => window.removeEventListener("scroll", handler);
  }, []);
  return { ref, progress };
}
