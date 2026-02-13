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
          <div className="w-12 h-12 rounded-xl bg-accent-600 flex items-center justify-center">
            <span className="text-white font-display font-bold text-xl">A</span>
          </div>
          <div className="absolute -inset-2 rounded-2xl border border-accent-500/20 animate-pulse" />
        </div>
        <div className="w-48 h-[2px] bg-white/[0.04] rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-accent-600 to-accent-400 rounded-full transition-all duration-100"
            style={{ width: progress + "%" }}
          />
        </div>
        <span className="text-[10px] font-mono text-white/15 tabular-nums">{progress}%</span>
      </div>
    </div>
  );
}
