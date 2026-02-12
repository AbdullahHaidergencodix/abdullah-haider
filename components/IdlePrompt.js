import { useState, useEffect } from "react";
import useIdle from "../hooks/useIdle";
export default function IdlePrompt() {
  const idle = useIdle(45000);
  const [dismissed, setDismissed] = useState(false);
  useEffect(() => { if (!idle) setDismissed(false); }, [idle]);
  if (!idle || dismissed) return null;
  return (
    <div className="fixed bottom-24 left-1/2 -translate-x-1/2 z-50 animate-fade-up">
      <div className="glass rounded-2xl px-6 py-4 border border-accent-500/10 flex items-center gap-4 max-w-sm">
        <span className="text-2xl">👋</span>
        <div>
          <p className="text-[13px] text-white/70 font-medium">Still here?</p>
          <p className="text-[11px] text-white/30">Let me build your website. It only takes 72 hours.</p>
        </div>
        <div className="flex gap-2 flex-shrink-0">
          <a href="#contact" onClick={() => setDismissed(true)} className="text-[11px] text-accent-400 font-medium hover:text-accent-300">Let&rsquo;s go</a>
          <button onClick={() => setDismissed(true)} className="text-[11px] text-white/20 hover:text-white/40 cursor-none">×</button>
        </div>
      </div>
    </div>
  );
}
