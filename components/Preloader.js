import { useEffect, useState } from "react";

export default function Preloader() {
  const [done, setDone] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const start = performance.now();
    const duration = 1800;
    const tick = () => {
      const elapsed = performance.now() - start;
      const p = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setProgress(Math.round(eased * 100));
      if (p < 1) requestAnimationFrame(tick);
      else setTimeout(() => setDone(true), 200);
    };
    requestAnimationFrame(tick);
  }, []);

  return (
    <div className={"preloader " + (done ? "done" : "")}>
      <div className="flex flex-col items-center gap-6">
        <div className="relative">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent-600 via-purple-500 to-pink-500 flex items-center justify-center animate-pulse-glow">
            <span className="text-white font-display font-bold text-2xl">A</span>
          </div>
          <div className="absolute -inset-3 rounded-3xl border border-purple-500/20 animate-pulse" />
        </div>
        <div className="w-48 h-[3px] bg-white/[0.04] rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-accent-600 via-purple-500 to-pink-500 rounded-full transition-all duration-100"
            style={{ width: progress + "%" }}
          />
        </div>
        <span className="text-[10px] font-mono text-white/20 tabular-nums">{progress}%</span>
      </div>
    </div>
  );
}
