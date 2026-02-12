import { useState } from "react";
export default function LinkPreview({ href, children }) {
  const [show, setShow] = useState(false);
  return (
    <span className="relative inline-block" onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}>
      <a href={href} target="_blank" rel="noopener noreferrer" className="text-accent-400 hover:text-accent-300 animated-underline cursor-none transition-colors">
        {children}
      </a>
      {show && (
        <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-64 rounded-xl overflow-hidden shadow-2xl border border-white/[0.06] z-50 pointer-events-none">
          <iframe src={href} className="w-full h-40 scale-50 origin-top-left" style={{ width: "200%", height: "320px", pointerEvents: "none" }} tabIndex={-1} />
        </span>
      )}
    </span>
  );
}
