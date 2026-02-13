import { useRef, useState } from "react";

export default function MagneticButton({ children, className = "", href, onClick }) {
  const ref = useRef(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMouse = (e) => {
    if (window.innerWidth < 768) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * 0.3;
    const y = (e.clientY - rect.top - rect.height / 2) * 0.3;
    setPos({ x, y });
  };

  const reset = () => setPos({ x: 0, y: 0 });

  const style = {
    transform: `translate(${pos.x}px, ${pos.y}px)`,
    transition: "transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
  };

  if (href) {
    return (
      <a ref={ref} href={href} className={className} style={style}
        onMouseMove={handleMouse} onMouseLeave={reset} onClick={onClick}>
        {children}
      </a>
    );
  }

  return (
    <button ref={ref} className={className} style={style}
      onMouseMove={handleMouse} onMouseLeave={reset} onClick={onClick}>
      {children}
    </button>
  );
}
