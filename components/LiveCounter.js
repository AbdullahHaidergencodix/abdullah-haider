import { useState, useEffect } from "react";
export default function LiveCounter() {
  const [projects, setProjects] = useState(42);
  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.random() > 0.7) setProjects((p) => p + 1);
    }, 30000);
    return () => clearInterval(interval);
  }, []);
  return (
    <span className="inline-flex items-center gap-1.5">
      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
      <span className="text-[12px] text-white/30 font-mono">{projects} projects delivered</span>
    </span>
  );
}
