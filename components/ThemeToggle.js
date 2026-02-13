import { useState, useEffect } from "react";
export default function ThemeToggle() {
  const [light, setLight] = useState(false);
  useEffect(() => {
    if (light) document.documentElement.classList.add("light-mode");
    else document.documentElement.classList.remove("light-mode");
  }, [light]);
  return (
    <button onClick={() => setLight(!light)}
      className="fixed top-[80px] md:top-[90px] right-4 md:right-6 z-50 w-11 h-11 md:w-10 md:h-10 rounded-xl glass flex items-center justify-center active:scale-90 transition-all duration-300 group"
      style={{ top: "max(80px, calc(env(safe-area-inset-top, 0px) + 60px))" }}
      aria-label="Toggle theme">
      <span className="text-base md:text-sm group-hover:scale-110 transition-transform">{light ? "\u{1F319}" : "\u2600\uFE0F"}</span>
    </button>
  );
}
