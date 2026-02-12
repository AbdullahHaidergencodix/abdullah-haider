import { useEffect, useState } from "react";
export default function BackToTop() {
  const [show, setShow] = useState(false);
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const handler = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setShow(scrollTop > 400);
      setProgress(docHeight > 0 ? (scrollTop / docHeight) : 0);
    };
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);
  const circumference = 2 * Math.PI * 18;
  const offset = circumference - progress * circumference;
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={"fixed bottom-24 right-6 z-50 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 cursor-none group " + (show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none")}
      aria-label="Back to top"
    >
      <svg className="absolute inset-0 w-12 h-12 -rotate-90" viewBox="0 0 40 40">
        <circle cx="20" cy="20" r="18" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="2" />
        <circle cx="20" cy="20" r="18" fill="none" stroke="#3b8eff" strokeWidth="2" strokeDasharray={circumference} strokeDashoffset={offset} strokeLinecap="round" className="transition-all duration-200" />
      </svg>
      <span className="text-white/50 text-sm group-hover:text-accent-400 transition-colors relative z-10">&#8593;</span>
    </button>
  );
}
