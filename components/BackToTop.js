import { useState, useEffect } from "react";
export default function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const fn = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={"fixed z-50 w-11 h-11 md:w-10 md:h-10 rounded-xl glass flex items-center justify-center transition-all duration-500 active:scale-90 " + (show ? "opacity-100 scale-100" : "opacity-0 scale-75 pointer-events-none")}
      style={{ bottom: "max(5rem, calc(env(safe-area-inset-bottom, 0px) + 4rem))", right: "1.5rem" }}
      aria-label="Back to top"
    >
      <svg className="w-4 h-4 text-white/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" /></svg>
    </button>
  );
}
