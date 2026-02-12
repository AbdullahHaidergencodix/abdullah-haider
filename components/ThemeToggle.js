import { useState, useEffect } from "react";
export default function ThemeToggle() {
  const [light, setLight] = useState(false);
  useEffect(() => {
    if (light) {
      document.documentElement.classList.add("light-mode");
    } else {
      document.documentElement.classList.remove("light-mode");
    }
  }, [light]);
  return (
    <button
      onClick={() => setLight(!light)}
      className="fixed top-[90px] right-6 z-50 w-10 h-10 rounded-full glass flex items-center justify-center cursor-none hover:border-accent-500/20 transition-all duration-300 group"
      aria-label="Toggle theme"
    >
      <span className="text-sm group-hover:scale-110 transition-transform">{light ? "🌙" : "☀️"}</span>
    </button>
  );
}
