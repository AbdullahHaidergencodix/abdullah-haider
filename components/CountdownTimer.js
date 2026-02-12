import { useState, useEffect } from "react";
export default function CountdownTimer({ hours = 72 }) {
  const [time, setTime] = useState(hours * 3600);
  useEffect(() => {
    const i = setInterval(() => setTime((t) => Math.max(0, t - 1)), 1000);
    return () => clearInterval(i);
  }, []);
  const h = Math.floor(time / 3600);
  const m = Math.floor((time % 3600) / 60);
  const s = time % 60;
  return (
    <div className="inline-flex items-center gap-1 font-mono">
      <span className="bg-white/[0.03] border border-white/[0.06] rounded px-2 py-1 text-accent-400/80 text-[14px]">{String(h).padStart(2,"0")}</span>
      <span className="text-white/15">:</span>
      <span className="bg-white/[0.03] border border-white/[0.06] rounded px-2 py-1 text-accent-400/80 text-[14px]">{String(m).padStart(2,"0")}</span>
      <span className="text-white/15">:</span>
      <span className="bg-white/[0.03] border border-white/[0.06] rounded px-2 py-1 text-accent-400/80 text-[14px]">{String(s).padStart(2,"0")}</span>
    </div>
  );
}
