import { useRef, useState } from "react";
export default function SpotlightCard({ children, className = "" }) {
  const ref = useRef(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);
  const handleMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };
  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      className={"relative overflow-hidden " + className}
    >
      {hovering && (
        <div
          className="absolute w-64 h-64 rounded-full pointer-events-none z-0 transition-opacity duration-300"
          style={{
            left: pos.x - 128,
            top: pos.y - 128,
            background: "radial-gradient(circle, rgba(59,142,255,0.06) 0%, transparent 70%)",
          }}
        />
      )}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
