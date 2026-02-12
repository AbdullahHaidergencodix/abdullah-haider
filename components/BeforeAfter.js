import { useRef, useState, useEffect } from "react";
export default function BeforeAfter() {
  const [position, setPosition] = useState(50);
  const containerRef = useRef(null);
  const isDragging = useRef(false);

  const updatePosition = (clientX) => {
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.max(5, Math.min(95, x)));
  };

  useEffect(() => {
    const up = () => { isDragging.current = false; };
    const move = (e) => {
      if (!isDragging.current) return;
      updatePosition(e.clientX || e.touches?.[0]?.clientX);
    };
    window.addEventListener("mouseup", up);
    window.addEventListener("mousemove", move);
    window.addEventListener("touchend", up);
    window.addEventListener("touchmove", move, { passive: true });
    return () => {
      window.removeEventListener("mouseup", up);
      window.removeEventListener("mousemove", move);
      window.removeEventListener("touchend", up);
      window.removeEventListener("touchmove", move);
    };
  }, []);

  return (
    <div className="reveal my-16">
      <div className="text-center mb-8">
        <span className="text-[11px] font-mono text-accent-400/50 tracking-[0.3em] uppercase block mb-3">Before & After</span>
        <p className="text-white/30 text-sm">Drag the slider to see the transformation</p>
      </div>
      <div
        ref={containerRef}
        className="relative h-64 md:h-80 rounded-2xl overflow-hidden mx-auto max-w-3xl cursor-col-resize select-none"
        onMouseDown={(e) => { isDragging.current = true; updatePosition(e.clientX); }}
        onTouchStart={(e) => { isDragging.current = true; updatePosition(e.touches[0].clientX); }}
      >
        {/* Before */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
          <div className="text-center opacity-50">
            <span className="text-4xl mb-2 block">😐</span>
            <span className="text-white/30 text-sm font-medium">Before — Generic Template</span>
          </div>
        </div>
        {/* After */}
        <div className="absolute inset-0 bg-gradient-to-br from-accent-900/50 via-bg-primary to-purple-900/30 flex items-center justify-center" style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}>
          <div className="text-center">
            <span className="text-4xl mb-2 block">🤩</span>
            <span className="accent-text text-sm font-bold">After — Custom Built by Me</span>
          </div>
        </div>
        {/* Slider line */}
        <div className="absolute top-0 bottom-0 w-[2px] bg-white/60 z-10" style={{ left: position + "%" }}>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center">
            <span className="text-white/80 text-xs">⟷</span>
          </div>
        </div>
        {/* Labels */}
        <div className="absolute top-3 left-3 px-2 py-1 rounded bg-black/40 backdrop-blur-sm text-[10px] text-white/50 font-mono">BEFORE</div>
        <div className="absolute top-3 right-3 px-2 py-1 rounded bg-accent-600/40 backdrop-blur-sm text-[10px] text-white/80 font-mono">AFTER</div>
      </div>
    </div>
  );
}
