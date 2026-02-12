import { useState, useEffect } from "react";
export default function KeyboardHints() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const handler = (e) => {
      if (e.key === "?") setShow((prev) => !prev);
      if (e.key === "Escape") setShow(false);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);
  if (!show) return null;
  const shortcuts = [
    { keys: "⌘K / Ctrl+K", desc: "Open command palette" },
    { keys: "?", desc: "Toggle keyboard shortcuts" },
    { keys: "↑↑↓↓←→←→BA", desc: "Easter egg" },
    { keys: "Esc", desc: "Close modals" },
  ];
  return (
    <div className="fixed inset-0 z-[100001] flex items-center justify-center" onClick={() => setShow(false)}>
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
      <div onClick={(e) => e.stopPropagation()} className="relative bg-bg-elevated border border-white/[0.06] rounded-2xl p-6 max-w-sm w-full mx-4">
        <h3 className="font-display font-bold text-white text-lg mb-4">Keyboard Shortcuts</h3>
        <div className="space-y-3">
          {shortcuts.map((s) => (
            <div key={s.keys} className="flex items-center justify-between">
              <span className="text-[12px] text-white/40">{s.desc}</span>
              <kbd className="text-[10px] text-white/30 px-2 py-1 rounded bg-white/[0.04] border border-white/[0.06] font-mono">{s.keys}</kbd>
            </div>
          ))}
        </div>
        <p className="text-[10px] text-white/15 mt-4 text-center">Press ? to close</p>
      </div>
    </div>
  );
}
