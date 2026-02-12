import { useState } from "react";
export default function HoverReveal({ front, back, className = "" }) {
  const [flipped, setFlipped] = useState(false);
  return (
    <div
      className={"relative cursor-none " + className}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
      style={{ perspective: "1000px" }}
    >
      <div className={"transition-transform duration-700 w-full h-full " + (flipped ? "[transform:rotateY(180deg)]" : "")} style={{ transformStyle: "preserve-3d" }}>
        <div className="absolute inset-0 [backface-visibility:hidden]">{front}</div>
        <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)]">{back}</div>
      </div>
    </div>
  );
}
