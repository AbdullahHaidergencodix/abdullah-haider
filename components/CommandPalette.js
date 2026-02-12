import { useState, useEffect, useRef } from "react";

const commands = [
  { label: "Go to About", section: "about", icon: "👤" },
  { label: "Go to Services", section: "services", icon: "⚡" },
  { label: "Go to Work", section: "work", icon: "💼" },
  { label: "Go to Pricing", section: "pricing", icon: "💰" },
  { label: "Go to Testimonials", section: "testimonials", icon: "⭐" },
  { label: "Go to Contact", section: "contact", icon: "📬" },
  { label: "Go to FAQ", section: "faq", icon: "❓" },
  { label: "Toggle Theme", action: "theme", icon: "🌗" },
  { label: "Back to Top", action: "top", icon: "⬆️" },
];

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    const handler = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setOpen((prev) => !prev);
      }
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  useEffect(() => {
    if (open && inputRef.current) inputRef.current.focus();
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const filtered = commands.filter((c) =>
    c.label.toLowerCase().includes(query.toLowerCase())
  );

  const execute = (cmd) => {
    setOpen(false);
    setQuery("");
    if (cmd.section) {
      const el = document.getElementById(cmd.section);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    } else if (cmd.action === "theme") {
      document.documentElement.classList.toggle("light-mode");
    } else if (cmd.action === "top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100001] flex items-start justify-center pt-[20vh]" onClick={() => setOpen(false)}>
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      <div onClick={(e) => e.stopPropagation()} className="relative w-full max-w-lg mx-4 bg-bg-elevated border border-white/[0.06] rounded-2xl overflow-hidden shadow-2xl">
        <div className="flex items-center gap-3 px-5 py-4 border-b border-white/[0.04]">
          <svg className="w-4 h-4 text-white/25" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type a command..."
            className="flex-1 bg-transparent text-white/80 text-sm outline-none placeholder:text-white/20"
          />
          <kbd className="text-[10px] text-white/15 px-2 py-0.5 rounded border border-white/[0.06]">ESC</kbd>
        </div>
        <div className="max-h-64 overflow-y-auto py-2">
          {filtered.map((cmd, i) => (
            <button
              key={i}
              onClick={() => execute(cmd)}
              className="w-full flex items-center gap-3 px-5 py-3 text-left text-sm text-white/50 hover:text-white hover:bg-white/[0.03] transition-colors cursor-none"
            >
              <span>{cmd.icon}</span>
              <span>{cmd.label}</span>
            </button>
          ))}
          {filtered.length === 0 && (
            <p className="px-5 py-4 text-sm text-white/20 text-center">No results found</p>
          )}
        </div>
        <div className="px-5 py-2.5 border-t border-white/[0.04] flex items-center justify-between">
          <span className="text-[10px] text-white/15">Navigate with ↑↓ • Select with Enter</span>
          <span className="text-[10px] text-white/15">⌘K to toggle</span>
        </div>
      </div>
    </div>
  );
}
