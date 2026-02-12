import { useEffect, useRef } from "react";
export default function CursorTrail() {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animId;
    let trail = [];
    const maxLength = 20;

    const resize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; };
    resize();
    window.addEventListener("resize", resize);

    const handleMouse = (e) => {
      trail.push({ x: e.clientX, y: e.clientY, life: 1 });
      if (trail.length > maxLength) trail.shift();
    };
    window.addEventListener("mousemove", handleMouse, { passive: true });

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      trail.forEach((p, i) => {
        p.life -= 0.03;
        if (p.life <= 0) return;
        const alpha = p.life * 0.15;
        const size = p.life * 3;
        ctx.beginPath();
        ctx.arc(p.x, p.y, size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(59,142,255,${alpha})`;
        ctx.fill();
      });
      trail = trail.filter((p) => p.life > 0);
      animId = requestAnimationFrame(draw);
    };
    draw();
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouse);
    };
  }, []);
  return <canvas ref={canvasRef} className="fixed inset-0 z-[9997] pointer-events-none" />;
}
