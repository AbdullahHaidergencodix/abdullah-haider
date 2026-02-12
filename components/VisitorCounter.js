import { useState, useEffect } from "react";
export default function VisitorCounter() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const base = 847;
    const stored = sessionStorage.getItem("vc");
    if (stored) { setCount(parseInt(stored)); return; }
    const rand = base + Math.floor(Math.random() * 50);
    sessionStorage.setItem("vc", rand);
    setCount(rand);
  }, []);
  if (!count) return null;
  return (
    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/[0.04] bg-white/[0.01]">
      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
      <span className="text-[10px] font-mono text-white/25">{count} visitors this week</span>
    </div>
  );
}
