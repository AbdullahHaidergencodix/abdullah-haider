import { useState } from "react";
const colors = [
  { name: "Blue", value: "#3b8eff" },
  { name: "Purple", value: "#7c3aed" },
  { name: "Emerald", value: "#10b981" },
  { name: "Rose", value: "#f43f5e" },
  { name: "Amber", value: "#f59e0b" },
  { name: "Cyan", value: "#06b6d4" },
];
export default function TrailColorPicker() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);
  const apply = (i) => {
    setActive(i);
    document.documentElement.style.setProperty("--accent-main", colors[i].value);
    const dots = document.querySelectorAll(".cursor-dot");
    dots.forEach((d) => { d.style.background = colors[i].value; });
  };
  return (
    <div className="fixed top-[140px] right-6 z-50">
      <button onClick={() => setOpen(!open)} className="w-10 h-10 rounded-full glass flex items-center justify-center cursor-none hover:border-accent-500/20 transition-all group" aria-label="Color picker">
        <span className="text-sm group-hover:scale-110 transition-transform">🎨</span>
      </button>
      {open && (
        <div className="mt-2 flex flex-col gap-1.5 p-2 glass rounded-xl">
          {colors.map((c, i) => (
            <button
              key={c.name}
              onClick={() => apply(i)}
              className={"w-6 h-6 rounded-full transition-all duration-300 cursor-none " + (i === active ? "ring-2 ring-white/30 scale-110" : "hover:scale-110")}
              style={{ background: c.value }}
              title={c.name}
            />
          ))}
        </div>
      )}
    </div>
  );
}
