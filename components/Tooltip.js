import { useState } from "react";
export default function Tooltip({ children, text, position = "top" }) {
  const [show, setShow] = useState(false);
  const pos = {
    top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
    bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
    left: "right-full top-1/2 -translate-y-1/2 mr-2",
    right: "left-full top-1/2 -translate-y-1/2 ml-2",
  };
  return (
    <span className="relative inline-block" onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}>
      {children}
      {show && (
        <span className={"absolute z-50 px-2.5 py-1.5 rounded-lg bg-bg-elevated border border-white/[0.06] text-[10px] text-white/60 whitespace-nowrap shadow-xl pointer-events-none " + pos[position]}>
          {text}
        </span>
      )}
    </span>
  );
}
