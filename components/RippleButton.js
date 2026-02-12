import { useState } from "react";
export default function RippleButton({ children, className = "", onClick, href }) {
  const [ripples, setRipples] = useState([]);
  const handleClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const id = Date.now();
    setRipples((prev) => [...prev, { x, y, id }]);
    setTimeout(() => setRipples((prev) => prev.filter((r) => r.id !== id)), 600);
    if (onClick) onClick(e);
  };
  const Tag = href ? "a" : "button";
  return (
    <Tag href={href} onClick={handleClick} className={"relative overflow-hidden " + className}>
      {ripples.map((r) => (
        <span
          key={r.id}
          className="absolute rounded-full bg-white/20 animate-[rippleExpand_0.6s_ease-out_forwards] pointer-events-none"
          style={{ left: r.x - 10, top: r.y - 10, width: 20, height: 20 }}
        />
      ))}
      {children}
    </Tag>
  );
}
