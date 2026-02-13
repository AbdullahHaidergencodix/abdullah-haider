import { useEffect, useRef } from "react";

export default function LiveBackground() {
  const ref = useRef(null);

  useEffect(() => {
    const c = ref.current;
    if (!c) return;
    if (typeof window === "undefined") return;
    
    const ctx = c.getContext("2d");
    let id;
    let t = 0;

    const resize = () => { 
      c.width = window.innerWidth; 
      c.height = window.innerHeight; 
    };
    resize();
    window.addEventListener("resize", resize, { passive: true });

    const blobs = [
      // Large foundation blobs
      { x: 0.2,  y: 0.3,  r: 0.5,  sx: 0.05, sy: 0.04, h: 260, s: 65, l: 55, a: 0.15 },
      { x: 0.7,  y: 0.2,  r: 0.45, sx: 0.04, sy: 0.06, h: 280, s: 60, l: 50, a: 0.12 },
      { x: 0.5,  y: 0.7,  r: 0.55, sx: 0.06, sy: 0.05, h: 320, s: 70, l: 60, a: 0.10 },
      // Medium accent blobs
      { x: 0.3,  y: 0.6,  r: 0.35, sx: 0.08, sy: 0.07, h: 200, s: 75, l: 65, a: 0.08 },
      { x: 0.8,  y: 0.5,  r: 0.30, sx: 0.07, sy: 0.09, h: 180, s: 80, l: 70, a: 0.07 },
      // Small highlights
      { x: 0.15, y: 0.85, r: 0.25, sx: 0.10, sy: 0.08, h: 45,  s: 85, l: 75, a: 0.06 },
      { x: 0.9,  y: 0.15, r: 0.20, sx: 0.09, sy: 0.11, h: 340, s: 65, l: 68, a: 0.05 },
    ];

    const draw = () => {
      t++;
      ctx.clearRect(0, 0, c.width, c.height);

      for (const b of blobs) {
        const wave = Math.sin(t * 0.001) * 0.5 + 0.5;
        const cx = c.width  * (b.x + Math.sin(t * b.sx * 0.004) * 0.15);
        const cy = c.height * (b.y + Math.cos(t * b.sy * 0.004) * 0.12);
        const radius = Math.min(c.width, c.height) * b.r * (1 + wave * 0.1);

        const hue = (b.h + Math.sin(t * 0.0005) * 30) % 360;
        
        const g = ctx.createRadialGradient(cx, cy, 0, cx, cy, radius);
        g.addColorStop(0,    `hsla(${hue}, ${b.s}%, ${b.l}%, ${b.a})`);
        g.addColorStop(0.4,  `hsla(${hue}, ${b.s - 10}%, ${b.l - 5}%, ${b.a * 0.6})`);
        g.addColorStop(0.7,  `hsla(${hue}, ${b.s - 20}%, ${b.l - 10}%, ${b.a * 0.3})`);
        g.addColorStop(1,    "transparent");

        ctx.fillStyle = g;
        ctx.fillRect(0, 0, c.width, c.height);
      }

      id = requestAnimationFrame(draw);
    };
    id = requestAnimationFrame(draw);

    return () => { 
      cancelAnimationFrame(id); 
      window.removeEventListener("resize", resize); 
    };
  }, []);

  return (
    <>
      <canvas 
        ref={ref} 
        className="fixed inset-0 pointer-events-none" 
        style={{ zIndex: 0 }}
      />
      <div className="fixed inset-0 pointer-events-none md:hidden mobile-aurora-premium" style={{ zIndex: 0 }} />
    </>
  );
}
