import { useEffect, useRef, useState } from "react";
export default function CursorText() {
  const [text, setText] = useState("");
  const ref = useRef(null);
  useEffect(() => {
    const handler = (e) => {
      const el = e.target.closest("[data-cursor-text]");
      setText(el ? el.dataset.cursorText : "");
    };
    window.addEventListener("mouseover", handler);
    return () => window.removeEventListener("mouseover", handler);
  }, []);
  useEffect(() => {
    const handler = (e) => {
      if (ref.current) {
        ref.current.style.left = e.clientX + "px";
        ref.current.style.top = (e.clientY - 30) + "px";
      }
    };
    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, []);
  if (!text) return null;
  return (
    <div ref={ref} className="fixed z-[99998] pointer-events-none px-2 py-1 rounded bg-accent-600/90 text-white text-[10px] font-medium -translate-x-1/2 transition-opacity duration-200 whitespace-nowrap">
      {text}
    </div>
  );
}
