import { useEffect, useRef } from "react";
export default function MouseGlow() {
  const ref = useRef(null);
  useEffect(() => {
    const handler = (e) => {
      if (ref.current) {
        ref.current.style.background = `radial-gradient(600px circle at ${e.clientX}px ${e.clientY}px, rgba(59,142,255,0.02), transparent 60%)`;
      }
    };
    window.addEventListener("mousemove", handler, { passive: true });
    return () => window.removeEventListener("mousemove", handler);
  }, []);
  return <div ref={ref} className="fixed inset-0 z-[1] pointer-events-none transition-all duration-300" />;
}
